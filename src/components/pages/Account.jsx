import { ProviderId, getAuth } from "firebase/auth";
import {auth, db} from "../../config/firebase";
import styles from "./layout.module.css";
import { logOut } from "../auth/Authentication";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";

import BackdropModal from "../BackdropModal";
import ChangeEmail from "../Settings/EmailChange";
import ChangePassword from "../Settings/PasswordChange";
import ChangeUsername from "../Settings/UsernameChange";

function Account(){
    //have account info (maybe profile picture, email, name, username, maybe in the future even number of recipes submitted, number of recipes favorited)
    // input Settings
//Settings could be rendered upon click - you only see a button that says to show settings and once clicked, they roll out under the information above it
const [loggedUser, setLoggedUser] = useState(null);
const [providerIsGoogle, setProviderIsGoogle] = useState(true);
const [calledForm, setCalledForm] = useState();
const navigate = useNavigate();

function getUser(){
auth.onAuthStateChanged(async function(user) {
    if (user != null) {
            await getDoc(doc(db, "users", user.uid)).then((userSnapshot) => {
            if(userSnapshot.exists()){
                setLoggedUser(userSnapshot.data());
            }
            else{
                console.error("No user of this email!");
            }
            });
        
        if(user.providerData[0].providerId != "google.com"){
        setProviderIsGoogle(false);

        }else{
            setProviderIsGoogle(true);
        }
    }
    else{
        setLoggedUser(null);
        navigate("/", {replace:true});
    }
});
}
useEffect(() => {
    getUser();
}, [auth]);

const [changeFormIsVisible, setChangeFormIsVisible] = useState(false);
    function hideChangeFormHandler() {
      setChangeFormIsVisible(false);
    }
    function showChangeFormHandler() {
        setChangeFormIsVisible(true);
    }

    return(<div className={styles.Account}>
{
loggedUser == null 
? 
null 
: 
<div className={styles.body}>
    <div className={styles.profileInfo}> 
    <h1>My Account</h1>
    <img className={styles.profilePic} src="https://img.icons8.com/ios/100/null/test-account.png"/>
<div>
    <h2>{loggedUser.username}</h2>
    <p>{loggedUser.email}</p>
<button onClick={logOut} className={styles.logout}>Log Out</button><br></br>
<button onClick={() => {setCalledForm(<ChangeUsername providerIsGoogle = {providerIsGoogle} onSent={() => {getUser(); hideChangeFormHandler();}}/>);showChangeFormHandler();}}>Change username</button>
{providerIsGoogle 
    ? <div className={styles.subtitle}>*We can't change your gmail or gmail password, sorry!</div>
    : <div>
    <br/>
    <button onClick={() => {setCalledForm(<ChangeEmail onSent={() => {getUser(); hideChangeFormHandler();}}/>) ;showChangeFormHandler();}}>Change email</button>
    <br/>
    <button onClick={() => {setCalledForm(<ChangePassword onSent={() => {getUser(); hideChangeFormHandler();}}/>);showChangeFormHandler();}}>Change password</button>
    </div>
    }

</div>
</div>
{changeFormIsVisible ? (
        <BackdropModal onClose={hideChangeFormHandler}>
          {calledForm}
        </BackdropModal>
      ) : null}
</div>
}
</div>);

}

export default Account;