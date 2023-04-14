
import styles from "./EditRecipe.module.css";
import {db, auth} from "../config/firebase";
import { useEffect, useState } from 'react';
import {getDoc, doc, updateDoc} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe(){

    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [newName, setNewName] = useState();
    const [newDescription, setNewDescription] = useState();
    const [longDescription, setLongDescription] = useState();
    const [newInstructions, setNewInstructions] = useState();
    const [newIngredients, setNewIngredients] = useState([]);
    //check if the user is logged AND if the logged user is the author
    const [isAuthor, setIsAuthor] = useState(false);
    
    const navigate = useNavigate();

    const recipeRef= doc(db, "recipes", recipeId);
    async function findRecipe(){
      try {
        const recipeSnap = await getDoc(recipeRef);
        if (recipeSnap.exists()) {
          
          if (auth.currentUser != null && recipeSnap.data().userId == auth.currentUser.uid){
            setIsAuthor(true);
            setRecipe(recipeSnap.data());
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
          //console.log("No such document!");
          navigate(`/`, {replace:true});
        }
        } catch (error) {
            console.error("Error retrieving Docs from database: ", error);
        }
    
      
    };
    useEffect(() => {
      findRecipe();
    }, []);

    const ingredientChangeHandler = (event, index) => {
      const values = [...newIngredients];
      values[index] = event;
      setNewIngredients(values);
    };
    const addIngredientHandler = () => {
      const values = [...newIngredients];
      values.push('');
      setNewIngredients(values);
    };
    function submitHandler(e){
      const validIngredients = newIngredients.filter(ingredient => ingredient.trim() !== '');
      if(newName.trim().length === 0 || newDescription.trim().length === 0 || newInstructions.trim().length === 0 || validIngredients.length === 0){
        alert("políčka musejí být vyplněna, mezera se nepočítá");
    }else{
        e.preventDefault();
        updateDoc(recipeRef, {
            name: newName,
            description: newDescription,
            instructions: newInstructions,
            ingredients: validIngredients
        });
        navigate(`/Recipe/${recipeId}`, {replace:true});
      }
    }


    return(<div className={styles.body}>
    { isAuthor 
    ? <form onSubmit={submitHandler}>
      <div className={styles.title_container}>
                <p className={styles.title}>Edditing recipe</p>
                <div className={styles.subtitle}>Add your very own unique recipe, you will be able to add more information to the recipe when editting</div>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeName_field">Recipe Name</label>
                <input placeholder="Recipe Name" title="Input title" name="input-name" type="text" className={styles.input_field} id="recipeName_field" required maxLength="50" onChange={(e) => {setNewName(e.target.value);}} value={newName}/>
            </div>
                <br/>
                <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeDescription_field">Short Description</label>
                <input placeholder="Short Description (max 75 characters)" title="Input title" name="input-description" type="text" className={styles.input_field} id="recipeDescription_field" required maxLength="75" onChange={(e) => {setNewDescription(e.target.value);}} value={newDescription}/>
            </div>
                <br/>

                
                <br/>
                <label className={styles.input_label} htmlFor="ingredients">Ingredients:</label>
                <div className={styles.ingredients}>
                {recipe!= null && newIngredients.map((ingredient, index) => (<div key={index} className={styles.input_container}>
                  <input className={styles.input_field} id="ingredients" type= "text" required onChange={(e) => {ingredientChangeHandler(e.target.value, index);}} value={ingredient}></input>
                  </div>))}
                  <div className={styles.title_container}>
    <div className={styles.subtitle}>*input empty space to discard ingredient</div>
  </div>
                  <button className={styles.addIngredient_btn} type="button" onClick={addIngredientHandler}>Add Ingredient</button>
                </div>
                <br/>
                <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeInstructions_field">Instructions</label>
                <textarea className={styles.input_field} id="instructions" cols={30} rows={10} required onChange={(e) => {setNewInstructions(e.target.value);}} value={newInstructions}></textarea>
                <input className={styles.newRecipe_btn} id="submitButton" type="submit" value="Post Recipe"></input>
                </div>
            </form>
    : null
    }
        
        </div>
    )
}

export default EditRecipe;