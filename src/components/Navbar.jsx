import classNames from 'classnames';
import styles from './Navbar.module.css';
import BackdropModal from './BackdropModal';
import Homepage from './pages/Home';
import Account from "./pages/Account";

import Auth from './auth/Authentication';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { db, auth} from "../config/firebase";
import { getDoc, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

function Navbar(){

  const [logoUrl, setLogoUrl] = useState("");
  const [loggedUser, setLoggedUser] = useState();
  useEffect(() => {
        auth.onAuthStateChanged(async function(user) {
        if (user) {
          setLoggedUser(auth.currentUser.displayName);          //uživatel je přihlášen a jeho jméno je zapsáno pro vyrenderování v navbaru
        }
        else{
          setLoggedUser(null);                                  //uživatel není přihlášen
        }
      });
      }, [auth]);

      //ve firebase storage je uloženo logo projektu, které je poté staženo do browseru a nastaveno jako logo v Navbaru
      useEffect(() => {
        const storage = getStorage();
        const logoRef = ref(storage, "gs://cookletproject.appspot.com/logo2.png"); 
        
        getDownloadURL(logoRef) // stáhneme logo do browseru
          .then((url) => {
            setLogoUrl(url); //uložíme url staženého loga do usestatu aby mohlo být použito jako source v navigaci
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

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

    
    const profileUser = loggedUser === null ? <div className={styles.link} onClick={showSignInHandler}>ACCOUNT</div> : <div className={styles.link}><Link to="/Account" className={styles.link}>{loggedUser}</Link></div>;

    return (<>
        <nav>
            <div className={styles.nav}>
                <div className={styles.item}><Link to="/"><img className={styles.logo} src={logoUrl} alt="Logo" /></Link></div>
                <div className={styles.menu}>
                <div className={styles.subitem}><Link to="/" className={styles.link}>HOME</Link></div>
                {loggedUser ? <div className={styles.subitem}><Link to="/MyFavorites" className={styles.link}>MY FAVORITES</Link></div>: null}
                {loggedUser ? <div className={styles.subitem}> <Link to="/MyRecipes" className={styles.link}>MY RECIPES</Link></div> : null}
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