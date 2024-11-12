import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebaseConfig from "../config/firebaseConfig";  // Import the config
import firebaseConfig from "./config/firebaseconfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
