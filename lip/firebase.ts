import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNJD-pRxi5tNXgF_HGbnW2BqRVtwxnFCI",
  authDomain: "malibuu-beer-league.firebaseapp.com",
  projectId: "malibuu-beer-league",
  storageBucket: "malibuu-beer-league.firebasestorage.app",
  messagingSenderId: "162307843633",
  appId: "1:162307843633:web:fb01fe1597efe6b34c5710",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);