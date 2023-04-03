// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDuedY6-D_KW04VimzfID6fQhk8CYBGQLA",
authDomain: "cooklet-89a59.firebaseapp.com",
projectId: "cooklet-89a59",
storageBucket: "cooklet-89a59.appspot.com",
messagingSenderId: "992431415792",
appId: "1:992431415792:web:8e7cb181d6fbbc1b1efd35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);