
import styles from './Recipe.module.css';

import { useParams, useNavigate } from 'react-router-dom';

import {db, auth} from "../config/firebase";
import { useEffect, useState } from 'react';
import {getDoc, doc, deleteDoc} from "firebase/firestore";

function Recipe(){

    const navigate = useNavigate();
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isAuthor, setIsAuthor] = useState();
    const [recID, setRecID] = useState("nothing");

    const recipeRef= doc(db, "recipes", recipeId); //vytáhne z databáze "recipes" recept s patřičnou Id kterou převzal od funkce na parametry (Prakticky bere to co je v adresovém řádku)
    async function findRecipe(){
      try {
        const recipeSnap = await getDoc(recipeRef);
        if (recipeSnap.exists()) {
          setRecipe(recipeSnap.data());
          if (auth.currentUser != null && recipeSnap.data().userId == auth.currentUser.uid){
            setIsAuthor(true);
            setRecID(recipeSnap.id);
          }
          else{
            setIsAuthor(false);
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
    
async function deleteRecipe() { // smazání dokumentu
  try {
    await deleteDoc(recipeRef);
    navigate(`/`, {replace:true});
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }
};

// v kodu se pomocí .map projede array ingrediencí
    return(
<div className={styles.body}>
<div className={styles.recipe}>
<h2 className={styles.recipeName}>{recipe!= null && recipe.name}</h2>
<p className={styles.recipeDesc}>{recipe!= null && recipe.description}</p>
<div className={styles.recipeIngredients}>
<h3>Ingredience: </h3>
<div>
<ul>{ recipe!= null && recipe.ingredients.map((arrayItem, index) =>(<div key={index}><li>{arrayItem}</li></div>))}</ul> 
</div>
</div>
<div className={styles.recipeInstructions}>
<h3>Postup:</h3>
<p>{recipe!= null && recipe.instructions}</p>
</div>

</div>

<hr></hr>
{isAuthor 
? <div className={styles.recipeConfig}>
<button onClick={() => {navigate(`/Recipe/edit/${recID}`, {replace:true});}}>Edit</button>
<button onClick={deleteRecipe}>Delete</button>
</div> 
: null}
</div>

);

}

export default Recipe;
