import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT7EfKJy2K37QdcZOdHQOAXfeiOf2g0Fc",
  authDomain: "cis371-3597a.firebaseapp.com",
  projectId: "cis371-3597a",
  storageBucket: "cis371-3597a.firebasestorage.app",
  messagingSenderId: "548276375636",
  appId: "1:548276375636:web:6194f38739d6084c945dc1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;