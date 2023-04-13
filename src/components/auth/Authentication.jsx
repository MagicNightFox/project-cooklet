import { useState } from "react";
import {auth, googleProvider, db} from "../../config/firebase";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth";

import styles from "./Authentication.module.css";
import { setDoc, doc, addDoc } from "firebase/firestore";

import Login from "./Login";
import Register from "./Register";

export const logOut = async () => {
  try {
  await signOut(auth);
  console.log("User signed out successfully");
  } catch (error) {
      console.error("Error signing out user:", error);
  }
};
function Auth() {
  const [hasAccount, setHasAccount] = useState(true);
 
    /*console.log(auth?.currentUser);*/
    
function hasAccountHandler(){
  //při přepínání mezi registrací a přihlášením se zadané hodnoty resetují
setHasAccount(!hasAccount);
}

    return (<div>
      {hasAccount ? <Login switchToRegister = {hasAccountHandler}/> : <Register switchToLogin = {hasAccountHandler}/>}
  </div>
  );
};

export default Auth;

