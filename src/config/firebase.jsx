// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const api = import.meta.env.VITE_APIKEY;
const domain = import.meta.env.VITE_AUTH_DOMAIN
const project = import.meta.env.VITE_PROJECT_ID;
const bucket = import.meta.env.VITE_STORAGE_BUCKET;
const sender = import.meta.env.VITE_SENDER_ID;
const appid = import.meta.env.VITE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: api,
    authDomain: domain,
    projectId: project,
    storageBucket: bucket,
    messagingSenderId: parseInt(sender),
    appId: appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);