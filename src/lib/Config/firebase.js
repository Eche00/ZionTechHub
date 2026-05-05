import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  arrayUnion,
  arrayRemove
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBueDjAdmkJrioUikm5SpXBXF4UYdbDsVc",
  authDomain: "zth-official.firebaseapp.com",
  projectId: "zth-official",
  storageBucket: "zth-official.firebasestorage.app",
  messagingSenderId: "480895410150",
  appId: "1:480895410150:web:9ab2078e520e58044e4027",
  measurementId: "G-GW57B73HJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageService = getStorage(app);

// ==================== ADMIN AUTHENTICATION FUNCTIONS ====================

/**
 * Check if a user is an admin
 * @param {string} userId - The user's UID
 * @returns {Promise<boolean>} - True if user is admin
 */
export const isAdminUser = async (userId) => {
  try {
    if (!userId) return false;
    
    // Check in admins collection
    const adminDoc = await getDoc(doc(db, "admins", userId));
    if (adminDoc.exists() && adminDoc.data().isActive === true) {
      return true;
    }
    
    // Fallback: Check in users collection with admin role
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists() && userDoc.data().role === "Admin") {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};

/**
 * Get admin data for a user
 * @param {string} userId - The user's UID
 * @returns {Promise<Object|null>} - Admin data or null
 */
export const getAdminData = async (userId) => {
  try {
    if (!userId) return null;
    
    // Check in admins collection first
    const adminDoc = await getDoc(doc(db, "admins", userId));
    if (adminDoc.exists()) {
      return { id: adminDoc.id, ...adminDoc.data() };
    }
    
    // Fallback to users collection
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    }
    
    return null;
  } catch (error) {
    console.error("Error getting admin data:", error);
    return null;
  }
};

/**
 * Admin login with verification
 * @param {string} email - Admin email
 * @param {string} password - Admin password
 * @returns {Promise<Object>} - Login result
 */
export const adminLogin = async (email, password) => {
  try {
    // First, check if email exists in admins collection or users collection with admin role
    let isAuthorizedAdmin = false;
    let adminData = null;
    
    // Check in admins collection
    const adminsRef = collection(db, "admins");
    const q1 = query(adminsRef, where("email", "==", email.toLowerCase()));
    const adminSnapshot = await getDocs(q1);
    
    if (!adminSnapshot.empty) {
      const adminDoc = adminSnapshot.docs[0];
      adminData = adminDoc.data();
      if (adminData.isActive === true) {
        isAuthorizedAdmin = true;
      }
    }
    
    // If not found in admins, check in users collection
    if (!isAuthorizedAdmin) {
      const usersRef = collection(db, "users");
      const q2 = query(usersRef, where("email", "==", email.toLowerCase()), where("role", "==", "Admin"));
      const userSnapshot = await getDocs(q2);
      
      if (!userSnapshot.empty) {
        isAuthorizedAdmin = true;
        adminData = userSnapshot.docs[0].data();
      }
    }
    
    if (!isAuthorizedAdmin) {
      throw new Error("NO_ADMIN: This email is not registered as an administrator");
    }
    
    if (adminData && adminData.isActive === false) {
      throw new Error("ACCOUNT_DISABLED: Your admin account has been disabled");
    }
    
    // Attempt login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update last login timestamp
    const adminDocRef = doc(db, "admins", user.uid);
    await updateDoc(adminDocRef, {
      lastLoginAt: serverTimestamp(),
      lastLoginIP: "web"
    }).catch(() => {
      // If document doesn't exist in admins, try users collection
      return updateDoc(doc(db, "users", user.uid), {
        lastLoginAt: serverTimestamp()
      }).catch(() => {});
    });
    
    return { 
      success: true, 
      user, 
      adminData: adminData || { name: "Admin", role: "Admin" }
    };
  } catch (error) {
    console.error("Admin login error:", error);
    throw error;
  }
};

/**
 * Admin logout
 * @returns {Promise<Object>} - Logout result
 */
export const adminLogout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Send password reset email for admin
 * @param {string} email - Admin email
 * @returns {Promise<Object>} - Reset result
 */
export const adminPasswordReset = async (email) => {
  try {
    // Verify email exists as admin
    let isAdmin = false;
    
    const adminsRef = collection(db, "admins");
    const q1 = query(adminsRef, where("email", "==", email.toLowerCase()));
    const adminSnapshot = await getDocs(q1);
    
    if (!adminSnapshot.empty) {
      isAdmin = true;
    } else {
      const usersRef = collection(db, "users");
      const q2 = query(usersRef, where("email", "==", email.toLowerCase()), where("role", "==", "Admin"));
      const userSnapshot = await getDocs(q2);
      if (!userSnapshot.empty) {
        isAdmin = true;
      }
    }
    
    if (!isAdmin) {
      throw new Error("No admin account found with this email");
    }
    
    await sendPasswordResetEmail(auth, email, {
      url: `${window.location.origin}/signin`,
      handleCodeInApp: false
    });
    
    return { success: true };
  } catch (error) {
    console.error("Password reset error:", error);
    throw error;
  }
};

/**
 * Create a new admin user
 * @param {string} email - Admin email
 * @param {string} password - Admin password
 * @param {string} name - Admin name
 * @returns {Promise<Object>} - Creation result
 */
export const createAdmin = async (email, password, name) => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add to admins collection
    await setDoc(doc(db, "admins", user.uid), {
      uid: user.uid,
      email: email.toLowerCase(),
      name: name,
      role: "super_admin",
      isActive: true,
      createdAt: serverTimestamp(),
      permissions: ["all"],
      createdBy: "system"
    });
    
    // Send email verification
    await sendEmailVerification(user);
    
    return { success: true, user };
  } catch (error) {
    console.error("Error creating admin:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get all users (admins + regular users)
 * @returns {Promise<Array>} - List of all users
 */
export const getAllUsers = async () => {
  try {
    const users = [];
    
    // Get from admins collection
    const adminsSnapshot = await getDocs(collection(db, "admins"));
    adminsSnapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data(), source: "admins" });
    });
    
    // Get from users collection
    const usersSnapshot = await getDocs(collection(db, "users"));
    usersSnapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data(), source: "users" });
    });
    
    return users;
  } catch (error) {
    console.error("Error getting users:", error);
    return [];
  }
};

/**
 * Update admin status (activate/deactivate)
 * @param {string} adminId - Admin UID
 * @param {boolean} isActive - Active status
 * @returns {Promise<Object>} - Update result
 */
export const updateAdminStatus = async (adminId, isActive) => {
  try {
    await updateDoc(doc(db, "admins", adminId), {
      isActive: isActive,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating admin status:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Delete a user (admin or regular)
 * @param {string} userId - User UID
 * @param {string} source - 'admins' or 'users'
 * @returns {Promise<Object>} - Delete result
 */
export const deleteUser = async (userId, source = "users") => {
  try {
    if (source === "admins") {
      await deleteDoc(doc(db, "admins", userId));
    } else {
      await deleteDoc(doc(db, "users", userId));
    }
    
    // Note: Deleting from Firebase Auth requires admin SDK or cloud function
    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, error: error.message };
  }
};

/**
 * Get current admin user data
 * @returns {Promise<Object|null>} - Current admin data
 */
export const getCurrentAdmin = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return null;
    
    const adminData = await getAdminData(user.uid);
    return adminData;
  } catch (error) {
    console.error("Error getting current admin:", error);
    return null;
  }
};

// Export all functions
export default {
  auth,
  db,
  storageService,
  isAdminUser,
  getAdminData,
  adminLogin,
  adminLogout,
  adminPasswordReset,
  createAdmin,
  getAllUsers,
  updateAdminStatus,
  deleteUser,
  getCurrentAdmin
};
