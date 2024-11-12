import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these values with your Firebase project’s config values
const firebaseConfig = {
  apiKey: "AIzaSyDNa2NwE9-MEa9Y8fxqleI8H8XQW64fGts",
  authDomain: "bite-bliss-f5f1b.firebaseapp.com",
  projectId: "bite-bliss-f5f1b",
  storageBucket: "bite-bliss-f5f1b.firebasestorage.app",
  messagingSenderId: "747789281448",
  appId: "1:747789281448:web:58d240e687d75c81937a9d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
