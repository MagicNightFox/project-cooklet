/*import styles from "./layout.module.css";

import NewRecipe from "./NewRecipe";
import BackdropModal from "./BackdropModal";

import {db} from "../config/firebase";
import {getDocs, collection, addDoc, deleteDoc, doc} from "firebase/firestore";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
*/
function MyFavorites(){/*
//database recipes
const [favoriteRecipeList, setFavoriteRecipeList] = useState([]);

const recipesCollectionRef = collection(db, "recipes");
//getting recipes from database and showing them
 
const getRecipeList = async () => {
  try {
    const data = await getDocs(recipesCollectionRef);
    const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}))
    setRecipeList(filteredData);
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }
};
//Vyrendruje recepty po načtení stránky
useEffect(() => {
  getRecipeList();
}, []);

//  Adding recipes to the database
async function addRecipeHandler(recipeData){
  try {
    await addDoc(recipesCollectionRef, recipeData);
    getRecipeList();
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }

  
};

//  Hiding/showing New Recipe Form
const [elementIsVisible, setElementIsVisible] = useState(false);
  function hideElementHandler() {
    setElementIsVisible(false);
  }
  function showElementHandler() {
    setElementIsVisible(true);
  }


return( <div className={styles.body}>
<div className={styles.recipesGrid}>
{recipeList.map((recipe) => (
      
<div key={recipe.id}>
  <Link to={`/Recipe/${recipe.id}`}>
  <div className={styles.recipeSmall}>
    <div className={styles.recipeNameSmall}>
      <h2>{recipe.name}</h2>
      </div>
      
    <div className={styles.recipeInfoSmall}>
      <p>{recipe.description}</p>
      
      <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
      <p className={styles.recipeAuthorSmall}>{recipe.author}</p>
      </div>
      
  </div>
  </Link>
</div>
      
      ))}
</div>
<br />

      <hr />
      {elementIsVisible ? (
        <BackdropModal onClose={hideElementHandler}>
          <NewRecipe
            onSent={hideElementHandler}
            onAddRecipe={addRecipeHandler}
          />
        </BackdropModal>
      ) : null}
      <div className={styles.addRecipeSmall}>
        <button onClick={showElementHandler}>Přidej vlastní recept!</button>
      </div>
</div>
);
*/

}

export default MyFavorites;