// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiFor5DDCBgP-3DnZxI1QUBrZWw5S9Qac",
  authDomain: "prueba-react-ac5a9.firebaseapp.com",
  projectId: "prueba-react-ac5a9",
  storageBucket: "prueba-react-ac5a9.firebasestorage.app",
  messagingSenderId: "421885567710",
  appId: "1:421885567710:web:b3a83a8f7743194894184f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);