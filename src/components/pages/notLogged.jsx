import Login from "../auth/Login";
import Register from "../auth/Register";
import { useState } from "react";
import styles from "./layout.module.css";

function NotLogged(){
    const [hasAccount, setHasAccount] = useState(true);
    function hasAccountHandler(){
        //při přepínání mezi registrací a přihlášením se zadané hodnoty resetují
      setHasAccount(!hasAccount);
    }

    return (<div className={styles.body}>
        <div className={styles.centered}>
        {hasAccount ? <Login switchToRegister = {hasAccountHandler} /> : <Register switchToLogin = {hasAccountHandler}/>}
        </div>
    </div>
    );
}

export default NotLogged;