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
// {children} nám vyrenderuje všechny komponenty co jsou obaleny touto komponentou
}

export default BackdropModal;