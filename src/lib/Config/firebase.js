import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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

// Helper function to check if user is admin
export const isAdminUser = async (userId) => {
  try {
    const { doc, getDoc } = await import("firebase/firestore");
    const adminDoc = await getDoc(doc(db, "admins", userId));
    return adminDoc.exists() && adminDoc.data().isActive === true;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
