import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDU9xOlgy5dnNiYZ-3XTNftrDqxIF_d5r0",
    authDomain: "movie-2307b.firebaseapp.com",
    projectId: "movie-2307b",
    storageBucket: "movie-2307b.firebasestorage.app",
    messagingSenderId: "1061575529805",
    appId: "1:1061575529805:web:714b28ef98472ba12dd304"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error signing in:", error);
    }
};

export const logout = () => signOut(auth);
export { auth };
