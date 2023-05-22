// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBl75lTlZLqBbzsi2B8e8DakbU_NRHI5nw",
  authDomain: "technexuslogin.firebaseapp.com",
  projectId: "technexuslogin",
  storageBucket: "technexuslogin.appspot.com",
  messagingSenderId: "977730503337",
  appId: "1:977730503337:web:7fa1e9e54b788064265fb8",
  measurementId: "G-6RRHN2V98Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export default app;