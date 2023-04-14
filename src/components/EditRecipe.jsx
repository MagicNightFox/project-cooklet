
import styles from "./EditRecipe.module.css";
import {db, auth} from "../config/firebase";
import { useEffect, useState } from 'react';
import {getDoc, doc, updateDoc} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe(){
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState();
    const [newName, setNewName] = useState();
    const [newDescription, setNewDescription] = useState();
    const [longDescription, setLongDescription] = useState();
    const [newInstructions, setNewInstructions] = useState();
    const [NewIngredients, setNewIngredients] = useState();

    //check if the user is logged AND if the logged user is the author
    const [isAuthor, setIsAuthor] = useState(false);
    
    const navigate = useNavigate();

    const recipeRef= doc(db, "recipes", recipeId);
    async function findRecipe(){
      try {
        const recipeSnap = await getDoc(recipeRef);
        if (recipeSnap.exists()) {
          if (auth.currentUser != null && recipeSnap.data().userEmail == auth.currentUser.email){
            setIsAuthor(true);
            setNewName(recipeSnap.data().name);
            setNewDescription(recipeSnap.data().description);
            setNewInstructions(recipeSnap.data().instructions);
            setNewIngredients(recipeSnap.data().ingredients);
          }
          else{
            setIsAuthor(false);
            navigate(`/Recipe/${recipeId}`, {replace:true});
          }
        } else {
          console.log("No such document!");
          navigate(`/`, {replace:true});
        }
        } catch (error) {
            console.error("Error retrieving Docs from database: ", error);
        }
    
      
    };
    useEffect(() => {
      findRecipe();
    }, []);

    function submitHandler(e){
        e.preventDefault();
        updateDoc(recipeRef, {
            name: newName,
            description: newDescription,
            instructions: newInstructions,
            ingredients: NewIngredients
        });
        navigate(`/Recipe/${recipeId}`, {replace:true});
    }
    function nameChangeHandler(e){
        setNewName(e.target.value);
    }
    function descriptionChangeHandler(e){
        setNewDescription(e.target.value);
    }
    function instructionsChangeHandler(e){
        setNewInstructions(e.target.value);
    }
    function ingredientsChangeHandler(e){
        setNewIngredients(e.target.value);
    }


    return(<div className={styles.body}>
    { isAuthor 
    ? <form onSubmit={submitHandler}>
                <label htmlFor="name">Název </label>
                <input id="name" className={styles.name} type="text" required onChange={nameChangeHandler} value={newName}></input>
                <br/>
                <label htmlFor="description">Popis </label>
                <input type="text" id="description" required onChange={descriptionChangeHandler} value={newDescription}></input>
                <br/>
                <label htmlFor="instructions">Postup</label>
                <div className={styles.textAreaWrapper}>
                <textarea id="instructions" cols={30} rows={10} required onChange={instructionsChangeHandler} value={newInstructions}></textarea>
                </div>
                <br/>
                <label htmlFor="ingredients">Ingredience</label>
                <div className={styles.textAreaWrapper}>
                <textarea id="ingredients" cols={30} rows={5} required onChange={ingredientsChangeHandler} value={NewIngredients}></textarea>
                </div>
                <br/>
                <input id="submitButton" type="submit" value="Post Recipe"></input>
            </form>
    : null
    }
        
        </div>
    )
}

export default EditRecipe;