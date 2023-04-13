import classNames from 'classnames';
import styles from './Navbar.module.css';
import BackdropModal from './BackdropModal';
import Homepage from './pages/Home';
import Account from "./pages/Account";

import Auth from './auth/Authentication';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { db, auth} from "../config/firebase";
import { getDoc, doc } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

function Navbar(){


  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
        auth.onAuthStateChanged(async function(user) {
        if (user) {
          // zkusit vymazat, všichni uživatelé mají vytvořený účet v dokumentech a měli by všichni mít username a tohle by teda nebylo třeba
          if(user.displayName == null){
            await getDoc(doc(db, "users", user.email)).then((userSnapshot) => {
              if(userSnapshot.exists()){
                const username = userSnapshot.data().username;
                setLoggedUser(username);
              }
              else{
                console.error("No user of this email!");
              }
            });
          }
          else{
            setLoggedUser(user.displayName);
          }
          console.log("nav detection works, a user is logged in");
          console.log(auth.currentUser);
        }
        else{
          setLoggedUser(null);
          console.log("nav detection works, a user is not logged in");
        }
      });
      }, [auth]);

    const [signInIsVisible, setSignInIsVisible] = useState(false);
    function hideSignInHandler() {
      setSignInIsVisible(false);
    }
    function showSignInHandler() {
      if(auth.currentUser == null){
        setSignInIsVisible(true);
      }
      else{
        console.log(auth.currentUser.displayName);
        setSignInIsVisible(true);
      }
    }


    const profileUser = loggedUser === null ? <div className={styles.link} onClick={showSignInHandler}>PROFILE</div> : <div className={styles.link}><Link to="/Account" className={styles.link}>{loggedUser}</Link></div>;

    return (<>
        <nav>
            <div className={styles.nav}>
                <div className={styles.item}><Link to="/"><img className={styles.logo} src="/src/components/img/logo/logo2.png" alt="LOGO"></img></Link></div>
                <div className={styles.menu}>
                <div className={styles.subitem}><Link to="/" className={styles.link}>HOME</Link></div>
                <div className={styles.subitem}><Link to="/MyFavorites" className={styles.link}>MY FAVORITES</Link></div>
                <div className={styles.subitem}><Link to="/MyRecipes" className={styles.link}>MY RECIPES</Link></div>
                </div>
                {profileUser}
            </div>
        </nav>
        
        {signInIsVisible ? (
        <BackdropModal onClose={hideSignInHandler}>
          <Auth />
        </BackdropModal>
      ) : null}
        </>
    );
}



export default Navbar;