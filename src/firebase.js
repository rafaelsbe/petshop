import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBs_T--gH_mKGas-XIdGjrhg0H9zmFO0M4",
    authDomain: "petshop-react-d9ca7.firebaseapp.com",
    projectId: "petshop-react-d9ca7",
    storageBucket: "petshop-react-d9ca7.firebasestorage.app",
    messagingSenderId: "31793653596",
    appId: "1:31793653596:web:905ab699dde8a897360399",
    measurementId: "G-YVLVNBS0LP"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);