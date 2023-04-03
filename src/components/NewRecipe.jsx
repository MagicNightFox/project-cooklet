import styles from './NewRecipe.module.css';
import classNames from 'classnames';
import { useState } from 'react';

import {auth} from "../config/firebase";

function NewRecipe({onSent, onAddRecipe}){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ingredients, setIngredients] = useState("");

    return(
        <>
        <div className={styles.body}>
        <div className={styles.recipe}>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Název </label><br/>
                <input id="name" className={styles.name} type="text" required onChange={nameChangeHandler}></input>
                <br/>
                <label htmlFor="description">Popis </label><br/>
                <input type="text" id="description" required onChange={descriptionChangeHandler}></input>
                <br/>
                <label htmlFor="instructions">Postup</label><br/>
                <div className={styles.textAreaWrapper}>
                <textarea id="instructions" cols={30} rows={10} required onChange={instructionsChangeHandler}></textarea>
                </div>
                <br/>
                <label htmlFor="ingredients">Ingredience</label>
                <div className={styles.textAreaWrapper}>
                <textarea id="ingredients" cols={30} rows={5} required onChange={ingredientsChangeHandler}></textarea>
                </div>
                <br/>
                <input id="submitButton" type="submit" value="Post Recipe"></input>
            </form>
        </div>
        </div>
        </>
    )

        function nameChangeHandler(e){
            setName(e.target.value);
        }
        function descriptionChangeHandler(e){
            setDescription(e.target.value);
        }
        function instructionsChangeHandler(e){
            setInstructions(e.target.value);
        }
        function ingredientsChangeHandler(e){
            setIngredients(e.target.value);
        }

        function submitHandler(e){
            e.preventDefault();
            const recipeData = {
                name: name,
                description: description,
                instructions: instructions,
                ingredients: ingredients,
                userId: auth?.currentUser?.uid,
            };
            onAddRecipe(recipeData);
            onSent();
        }


}



export default NewRecipe;