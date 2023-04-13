import Navbar from "../Navbar";
import Recipes from "../Recipes";
import styles from "./layout.module.css";
function Homepage() {
return (
<div className={styles.body}>
    <Recipes />
</div>

);
}

export default Homepage;