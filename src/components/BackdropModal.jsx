import styles from "./BackdropModal.module.css";


function BackdropModal({children, onClose}){
return(
    <>
    <div className={styles.backdrop} onClick={onClose}/>
    <dialog open={true} className={styles.modal}>
    {children}
    </dialog>
    </>
);
}

export default BackdropModal;