import classNames from 'classnames';
import styles from './Navbar.module.css';
import BackdropModal from './BackdropModal';
import Homepage from './pages/Home';

import Auth from './Authentication';

import { useState } from 'react';
import {Link} from "react-router-dom";


function Navbar(props){

    const [signInIsVisible, setSignInIsVisible] = useState(false);
    function hideSignInHandler() {
      setSignInIsVisible(false);
    }
    function showSignInHandler() {
      setSignInIsVisible(true);
    }


    return (<>
        <nav>
            <div className={styles.nav}>
                <div className={styles.item}><Link to="/"><img className={styles.logo} src="/src/components/img/logo/logo2.png" alt="LOGO"></img></Link></div>
                <div className={styles.menu}>
                <div className={styles.subitem}><Link to="/" className={styles.link}>HOME</Link></div>
                <div className={styles.subitem}><Link to="/Account" className={styles.link}>MY FAVORITES</Link></div>
                <div className={styles.subitem}><Link to="/Account" className={styles.link}>MY RECIPES</Link></div>
                </div>
                <div className={styles.link} onClick={showSignInHandler}>Profile</div>
            </div>
        </nav>
        {signInIsVisible ? (
        <BackdropModal onClose={hideSignInHandler}>
          <Auth />
        </BackdropModal>
      ) : null}
        </>
    )

   

}



export default Navbar;