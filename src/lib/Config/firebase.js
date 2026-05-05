import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
  updateDoc
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

// Initialize firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageF = getStorage(app);

// ============ ADMIN AUTHENTICATION FUNCTIONS ============

// Check if user is admin
export const isAdminUser = async (userId) => {
  try {
    if (!userId) return false;
    const adminDoc = await getDoc(doc(db, "admins", userId));
    return adminDoc.exists() && adminDoc.data().isActive === true;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};

// Get admin data
export const getAdminData = async (userId) => {
  try {
    const adminDoc = await getDoc(doc(db, "admins", userId));
    if (adminDoc.exists()) {
      return { id: adminDoc.id, ...adminDoc.data() };
    }
    return null;
  } catch (error) {
    console.error("Error getting admin data:", error);
    return null;
  }
};

// Admin login with verification
export const adminLogin = async (email, password) => {
  try {
    // First, check if email exists in admins collection
    const adminsRef = collection(db, "admins");
    const q = query(adminsRef, where("email", "==", email.toLowerCase()));
    const adminSnapshot = await getDocs(q);
    
    if (adminSnapshot.empty) {
      throw new Error("NO_ADMIN: This email is not registered as an admin");
    }
    
    const adminDoc = adminSnapshot.docs[0];
    const adminData = adminDoc.data();
    
    if (!adminData.isActive) {
      throw new Error("ACCOUNT_DISABLED: Your admin account has been disabled");
    }
    
    // Attempt login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Verify UID matches
    if (user.uid !== adminDoc.id) {
      await signOut(auth);
      throw new Error("AUTH_ERROR: Admin verification failed");
    }
    
    // Update last login
    await updateDoc(doc(db, "admins", user.uid), {
      lastLoginAt: serverTimestamp(),
      lastLoginIP: "web"
    });
    
    return { 
      success: true, 
      user, 
      adminData: { id: adminDoc.id, ...adminData } 
    };
  } catch (error) {
    console.error("Admin login error:", error);
    throw error;
  }
};

// Admin logout
export const adminLogout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false, error: error.message };
  }
};

// Send password reset for admin
export const adminPasswordReset = async (email) => {
  try {
    // Verify email exists in admins collection
    const adminsRef = collection(db, "admins");
    const q = query(adminsRef, where("email", "==", email.toLowerCase()));
    const adminSnapshot = await getDocs(q);
    
    if (adminSnapshot.empty) {
      throw new Error("No admin account found with this email");
    }
    
    await sendPasswordResetEmail(auth, email, {
      url: `${window.location.origin}/admin-login`,
      handleCodeInApp: false
    });
    
    return { success: true };
  } catch (error) {
    console.error("Password reset error:", error);
    throw error;
  }
};

// Create first admin (Run this once in browser console)
export const createFirstAdmin = async (email, password, name) => {
  try {
    const { createUserWithEmailAndPassword } = await import("firebase/auth");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
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
    
    console.log("Admin created successfully!");
    return { success: true, user };
  } catch (error) {
    console.error("Error creating admin:", error);
    return { success: false, error: error.message };
  }
};

// Get all admins (for super admin)
export const getAllAdmins = async () => {
  try {
    const adminsRef = collection(db, "admins");
    const snapshot = await getDocs(adminsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting admins:", error);
    return [];
  }
};

// Update admin status (activate/deactivate)
export const updateAdminStatus = async (adminId, isActive) => {
  try {
    await updateDoc(doc(db, "admins", adminId), {
      isActive: isActive,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating admin:", error);
    return { success: false, error: error.message };
  }
};
