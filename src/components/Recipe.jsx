
import styles from './Recipe.module.css';

import { useParams } from 'react-router-dom';

import {db, auth} from "../config/firebase";
import { useEffect, useState } from 'react';
import {getDoc, doc, where, collection, getDocs} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
function Recipe(){

    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState("nic");
    const [isAuthor, setIsAuthor] = useState();

    const recipeRef= doc(db, "recipes", recipeId);
    async function findRecipe(){
      try {
        const recipeSnap = await getDoc(recipeRef);
        if (recipeSnap.exists()) {
          setRecipe(recipeSnap.data());
        } else {
          console.log("No such document!");
        }
        } catch (error) {
            console.error("Error retrieving Docs from database: ", error);
        }
    
      
    };
    useEffect(() => {
      findRecipe();
    }, []);
    
    
/*
    const recipesCollectionRef = collection(db, "recipes");
    const getRecipe = async () => {
        try {
          const data = await getDocs(recipesCollectionRef);
          const filteredData = data.docs.map((rec) => {
            if(rec.id === recipeId){               
                setRecipe(rec.data());
            }
        })

          } catch (error) {
              console.error("Error retrieving Doc from database: ", error);
          }
      };
      useEffect(() => {
        getRecipe();

      }, []);
*/

function checkAuthor(){
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
}

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
</div>
<hr></hr>

{isAuthor 
? <div className={styles.recipeConfig}>
<></>
</div> 
: null}
</div>

);

}

export default Recipe;
