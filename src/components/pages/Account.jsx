import { ProviderId, getAuth } from "firebase/auth";
import {auth} from "../../config/firebase";
import styles from "./layout.module.css";
import { logOut } from "../auth/Authentication";
import { Link } from "react-router-dom";
import AccountSettings from "../AccountSettings";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Account(){
    //have account info (maybe profile picture, email, name, username, maybe in the future even number of recipes submitted, number of recipes favorited)
    // input Settings
//Settings could be rendered upon click - you only see a button that says to show settings and once clicked, they roll out under the information above it
const [loggedUser, setLoggedUser] = useState(null);
const navigate = useNavigate();
useEffect(() => {
auth.onAuthStateChanged(async function(user) {
    if (user != null) {
        setLoggedUser(user);
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.photoURL);
        console.log(user.providerData[0].providerId);
    }
    else{
        setLoggedUser(null);
        navigate("/", {replace:true});
    }
});
}, []);



    return(<div className={styles.Account}>
{
loggedUser == null 
? 
null 
: 
<div className={styles.body}>
    <h1>Account</h1>
<div>
    {loggedUser.photoURL == null || loggedUser.photoURL == undefined ? null : <img src = {loggedUser.photoURL} alt="ProfilePic"/>}
<button onClick={logOut} className={styles.logout}>Log Out</button>
</div>
</div>
}
</div>);

}

export default Account;