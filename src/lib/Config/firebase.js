import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBcPc-YBlhZlH2OJmEtQreeK0j2ubQROy0",
    authDomain: "ziontechhub-affiliates.firebaseapp.com",
    projectId: "ziontechhub-affiliates",
    storageBucket: "ziontechhub-affiliates.firebasestorage.app",
    messagingSenderId: "253323308856",
    appId: "1:253323308856:web:5cd9289aa5591bb9741bcd",
    measurementId: "G-9GZDQ1HHXL"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
