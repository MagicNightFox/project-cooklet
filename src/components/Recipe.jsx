
import styles from './Recipe.module.css';

import { useParams, Link, useNavigate } from 'react-router-dom';

import {db, auth} from "../config/firebase";
import { useEffect, useState } from 'react';
import {getDoc, doc, deleteDoc, where, collection, getDocs} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Recipe(){
    const navigate = useNavigate();
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState("nic");
    const [isAuthor, setIsAuthor] = useState();
    const [recID, setRecID] = useState("nothing");

    const recipeRef= doc(db, "recipes", recipeId);
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
    
async function deleteRecipe() {
  try {
    await deleteDoc(recipeRef);
    navigate(`/`, {replace:true});
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }
};

    return(

        

<div className={styles.body}>
<div className={styles.recipe}>
<h2 className={styles.recipeName}>{recipe.name}</h2>
<p className={styles.recipeDesc}>{recipe.description}</p>
<div className={styles.recipeIngredients}>
<h3>Ingredience:</h3>
<p>{recipe.ingredients}</p>
</div>
<div className={styles.recipeInstructions}>
<h3>Postup:</h3>
<p>{recipe.instructions}</p>
</div>
<h3>Test arraye:</h3>
<p>{/*recipe.array.map((arrayItem) =>(<div>{arrayItem}</div>))*/}</p>
</div>
<hr></hr>

{isAuthor 
? <div className={styles.recipeConfig}>
<button><Link to={`/Recipe/edit/${recID}`}>Edit</Link></button>
<button onClick={deleteRecipe}>Delete</button>
</div> 
: null}
</div>

);

}

export default Recipe;
