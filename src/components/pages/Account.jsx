import styles from "./layout.module.css";
//importované react funkce
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//importované firebase funkce
import {auth, db} from "../../config/firebase";
import { signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
//importované komponenty
import BackdropModal from "../BackdropModal";
import ChangeEmail from "../Settings/EmailChange";
import ChangePassword from "../Settings/PasswordChange";
import ChangeUsername from "../Settings/UsernameChange";

function Account(){
const [loggedUser, setLoggedUser] = useState(null);
const [providerIsGoogle, setProviderIsGoogle] = useState(true);
const [calledForm, setCalledForm] = useState();
const navigate = useNavigate();

//funkce pro odhlášení
const logOut = async () => { 
    try {
    await signOut(auth);
    //console.log("User signed out successfully");
    } catch (error) {
        console.error("Error signing out user:", error);
    }
  };

  //funkce pro získání přihlášeného uživatele a získání jeho patřičného záznemů v databázi "users"
function getUser(){
auth.onAuthStateChanged(async function(user) {
    if (user != null) { 
            await getDoc(doc(db, "users", user.uid)).then((userSnapshot) => {
            if(userSnapshot.exists()){
                setLoggedUser(userSnapshot.data());             //existuje daný uživatel a k němu záznam? uložit uživatele do proměnné loggedUser
            }
            else{
                console.error("No user of this email!");        //neexistuje? vyhodi
            }
            });
        
        if(user.providerData[0].providerId != "google.com"){
        setProviderIsGoogle(false);                             //pokud je uživatel přihlášen přes google, má omezená možnosti změny
        }else{
            setProviderIsGoogle(true);
        }
    }
    else{
        setLoggedUser(null);
        navigate("/", {replace:true}); //pokud není přihlášen tak ho to automaticky přenese na hlavní stránku aplikace
    }
});
}
useEffect(() => { //vyvolá funkci při každé změně přihlášeného uživatele - přihlášení/odhlášení
    getUser();
}, [auth]);

const [changeFormIsVisible, setChangeFormIsVisible] = useState(false);  //funugje pro schování či zobrazení formuláře pro změnu
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
    <div className={styles.account_btn_container}>
<button className={styles.account_btn} onClick={logOut}>Log Out</button>
<div className={styles.divider}>
    <hr className={styles.line}/>
    <div>Settings</div>
    <hr className={styles.line}/>
  </div>
<button className={styles.account_btn} onClick={() => {setCalledForm(<ChangeUsername providerIsGoogle = {providerIsGoogle} onSent={() => {getUser(); hideChangeFormHandler();}}/>);showChangeFormHandler();}}>Change username</button>
{providerIsGoogle 
    ? <div className={styles.subtitle}>*We can't change your gmail or gmail password, sorry!</div>
    : <div>
    
    <button className={styles.account_btn} onClick={() => {setCalledForm(<ChangeEmail onSent={() => {getUser(); hideChangeFormHandler();}}/>) ;showChangeFormHandler();}}>Change email</button>
    <br/>
    <button className={styles.account_btn} onClick={() => {setCalledForm(<ChangePassword onSent={() => {getUser(); hideChangeFormHandler();}}/>);showChangeFormHandler();}}>Change password</button>
    </div>
    }
</div>
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