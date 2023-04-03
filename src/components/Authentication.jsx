import { useState } from "react";
import {auth, googleProvider} from "../config/firebase";
import {createUserWithEmailAndPassword ,signInWithPopup,signOut} from "firebase/auth";

import styles from "../Authentication.module.css";

function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully");
        } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            alert("Email is already in use");
        } else if (error.code === "auth/invalid-email") {
            alert("Invalid email address");
        } else if (error.code === "auth/weak-password") {
            alert("Password is too weak");
        } else {
            console.error("Error signing in user:", error);
        }
        }
    };

    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
        console.log("User signed in successfully");
        } catch (error) {
            console.error("Error signing in user:", error);
        }
    };

    const logOut = async () => {
        try {
        await signOut(auth);
        console.log("User signed out successfully");
        } catch (error) {
            console.error("Error signing out user:", error);
        }
    };

    return <div>
        <div className={styles.register}> 
        <input 
            type="email" 
            placeholder="Email..." 
            onChange={(e) => setEmail(e.target.value)}
            /> 
            <br/>
        <input 
            type="password" 
            placeholder="Password..." 
            onChange={(e) => setPassword(e.target.value)}
            /> 
            <br/>
        <button onClick={signIn}> Sign In </button>
        <button onClick={signInWithGoogle}> Sign In With Google </button>
        <br/>
        <button onClick={logOut}> Sign Out </button>
        </div>
    </div>
};

export default Auth;