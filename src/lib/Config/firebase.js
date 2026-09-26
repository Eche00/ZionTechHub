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
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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
export const storage = getStorage(app);  // <-- FIXED: Changed from storageF to storage
export const storageF = getStorage(app); // <-- ADDED: Alias for backward compatibility

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
 * Upload image to Firebase Storage
 * @param {File} file - Image file
 * @param {string} path - Storage path
 * @returns {Promise<string>} - Download URL
 */
export const uploadImage = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

/**
 * Delete image from Firebase Storage
 * @param {string} path - Storage path
 * @returns {Promise<void>}
 */
export const deleteImage = async (path) => {
  try {
    const storageRef = ref(storage, path);
    await deleteObject(storageRef);
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};

// Export all functions
export default {
  auth,
  db,
  storage,
  storageF: storage, // Alias for backward compatibility
  isAdminUser,
  getAdminData,
  adminLogin,
  adminLogout,
  adminPasswordReset,
  createAdmin,
  uploadImage,
  deleteImage
};
