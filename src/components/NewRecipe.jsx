import styles from './NewRecipe.module.css';
import classNames from 'classnames';
import { useState } from 'react';

import {auth} from "../config/firebase";

function NewRecipe({onSent, onAddRecipe}){
    
let ingredientArray = [];
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [ingredient, setIngredient] = useState("");

    const newIngredient = <div className={styles.input_container}>
    <label className={styles.input_label} htmlFor="recipeIgredient_field">Ingredients</label>
    <input placeholder="Ingredient" title="Input title" name="input-ingredients" type="text" className={styles.input_field} id="recipeIngredient_field" required onChange={(e) => setIngredient(e.target.value)} value={ingredient}/>
</div>;
    return(
        <>
        <div className={styles.body}>
        <div className={styles.newRecipe}>
            <h2>PŘIDEJ RECEPT</h2>
            <form styles={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.title_container}>
                <p className={styles.title}>Add a recipe!</p>
                <div className={styles.subtitle}>Přidejte svůj unikátní recept, dodatečné informace budou možné doplnit při úpravě receptu.</div>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeName_field">Recipe Name</label>
                <input placeholder="Recipe Name" title="Input title" name="input-name" type="text" className={styles.input_field} id="recipeName_field" required onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeDescription_field">Description</label>
                <input placeholder="Recipe Description" title="Input title" name="input-description" type="text" className={styles.input_field} id="recipeDescription_field" required onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeIgredient_field">Ingredients</label>
                <input placeholder="Ingredient" title="Input title" name="input-ingredients" type="text" className={styles.input_field} id="recipeIngredient_field" required onChange={(e) => setIngredient(e.target.value)} value={ingredient}/>
            </div>
            
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeInstructions_field">Instructions</label>
                <div className={styles.textAreaWrapper}>
                <textarea cols={30} rows={10} placeholder="Instructions" title="Input title" name="input-instructions" type="text" className={styles.input_field} id="recipeInstructions_field" required onChange={(e) => setInstructions(e.target.value)} value={instructions}/>
                </div>
            </div>
                
                <input id="submitButton" type="submit" value="Post Recipe"></input>
            </form>
        </div>
        </div>
        </>
    )
        function submitHandler(e){
            e.preventDefault();
            if(ingredient.trim().length == 0 || name.trim().length == 0 || description.trim().length == 0 || instructions.trim().length == 0){
                alert("políčka musejí být vyplněna, mezera se nepočítá");
            }else{  
                const recipeData = {
                    name: name,
                    description: description,
                    instructions: instructions,
                    ingredients: ingredient,
                    userId: auth?.currentUser?.uid,
                    author: auth?.currentUser?.displayName,
                };
                onAddRecipe(recipeData);
                onSent();
            }
        }

        function addIngredientHandler(e){
            ingredientArray.push(newIngredient);
            console.log(ingredientArray);
            e.preventDefault();


        }
}

/*

<br/>
                <label htmlFor="description">Popis </label>
                <input type="text" id="description" required onChange={descriptionChangeHandler}></input>
                <br/>
                <label htmlFor="instructions">Postup</label>
                <div className={styles.textAreaWrapper}>
                <textarea id="instructions" cols={30} rows={10} required onChange={instructionsChangeHandler}></textarea>
                </div>
                <br/>
                <label htmlFor="ingredients">Ingredience</label>
                <div className={styles.textAreaWrapper}>
                <textarea id="ingredients" cols={30} rows={5} required onChange={ingredientsChangeHandler}></textarea>
                </div>
                <br/>

*/

export default NewRecipe;