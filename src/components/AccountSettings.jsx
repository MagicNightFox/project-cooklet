import { useState } from "react";
import styles from "./AccountSettings.module.css";

function Settings(){
    var format = /[ `!@#$%^&*()+=\[\]{};':"\\|,.<>\/?~]/;
    
// Add settings -> Reset password, change username, change email. 
// reset password - first, he will be asked to confirm current pasword. He will then be asked to write a new password and confirm it.
// reset email - first, confirm password, then change email. (maybe in authentication export a function that checks if the passwords are the same or if the email is correctly written)
const [newUsername, setNewUsername] = useState("");
const [newEmail, setNewEmail] = useState("");



function changeUsername(){
    if(newUsername.trim().length > 3){
        
        if(!format.test(newUsername)){
            console.log("Username changed successfully");
            console.log(newUsername.trim());
        }
        else{
            alert('NEPOVOLENÝ FORMÁT - Povolené znaky: "_", "-" ');
        };
        
      }
        else{
          alert("Delší jméno, alespoň 4 písmena");
        }
}

function changeEmail(){
    console.log(newEmail);
    if(newEmail.trim().length > 3){
        console.log("Email changed successfully");
      }
        else{
          alert("Delší Mail, alespoň 4 písmena");
        }
}

    return(
<div>
    <input type="text" onChange={(e) => setNewUsername(e.target.value)} value={newUsername}></input>
        <button onClick={changeUsername}>Change Username</button><br></br>
        <input type="email" onChange={(e) => setNewEmail(e.target.value)} value={newEmail}></input>
        <button onClick={changeEmail}>Change Email</button>
</div>
    );
}


export default Settings;