import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1tM_8Z8dQ32h6Coae5MmcLVBlMrOgGs0",
  authDomain: "newspaper-firebase-f8958.firebaseapp.com",
  projectId: "newspaper-firebase-f8958",
  storageBucket: "newspaper-firebase-f8958.firebasestorage.app",
  messagingSenderId: "417060040057",
  appId: "1:417060040057:web:67fcb76c0f586c379b13a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);