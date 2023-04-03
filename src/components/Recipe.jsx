import styles from './Recipe.module.css';

function Recipe({name, description, prepTime, instructions, ingredients, onDelete}){
    return(
<div className={styles.recipe}>
    <div className={styles.head}>
<h2>{name}</h2>

</div>
<hr/>
<button onClick={onDelete}>Delete</button>
<br/>
<p>{prepTime}</p>
<p>{description}</p>
<p>Instrukce:</p>
<p>{instructions}</p>
<p>Ingredience:</p>
<p>{ingredients}</p>
</div>

);

}

export default Recipe;