import styles from "./Footer.module.css"

function Footer(){

    return(
        <>
        <footer>
            <div className={styles.foot}>
            <p>Stránka slouží pouze jako univerzitní projekt. | Nikola Trpková</p>
            </div>
        </footer>
        </>
    )

}

export default Footer;