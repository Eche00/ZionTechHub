import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCmR8q9uAPD_ulf7HrIKTi8FE_6m5GlAe8",
//   authDomain: "zion-tech-hub.firebaseapp.com",
//   projectId: "zion-tech-hub",
//   storageBucket: "zion-tech-hub.firebasestorage.app",
//   messagingSenderId: "349282976116",
//   appId: "1:349282976116:web:46bd165e7f577f317dec21",
//   measurementId: "G-0J3ZJ7JG3L",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCbU2iGzn39wbd-P3JdBnDuxT-emx_tdwA",
  authDomain: "chatme-ae9e7.firebaseapp.com",
  projectId: "chatme-ae9e7",
  storageBucket: "chatme-ae9e7.appspot.com",
  messagingSenderId: "704645971111",
  appId: "1:704645971111:web:522f486b23efc9e5e2af82",
  measurementId: "G-RZ7B0XL3PE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storageF = getStorage(app);
