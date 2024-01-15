// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c08b.firebaseapp.com",
  projectId: "mern-estate-6c08b",
  storageBucket: "mern-estate-6c08b.appspot.com",
  messagingSenderId: "1029595446709",
  appId: "1:1029595446709:web:f17fac8aa5068c580d6dfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);