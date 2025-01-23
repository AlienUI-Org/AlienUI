import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "alienui.firebaseapp.com",
  projectId: "alienui",
  storageBucket: "alienui.firebasestorage.app",
  messagingSenderId: "848567543316",
  appId: "1:848567543316:web:bdc98bb7470fc313796901",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
