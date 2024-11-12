// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";  // Import the config file

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
