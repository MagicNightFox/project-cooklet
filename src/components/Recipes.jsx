import styles from "./Recipes.module.css";
import Recipe from "./Recipe";
import NewRecipe from "./NewRecipe";
import BackdropModal from "./BackdropModal";

import {db} from "../config/firebase";
import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";

import { useEffect, useState } from "react";

function Recipes(props) {
//database recipes
const [recipeList, setRecipeList] = useState([]);

const recipesCollectionRef = collection(db, "recipes");
//getting recipes from database and showing them
const getRecipeList = async () => {
  try {
    const data = await getDocs(recipesCollectionRef);
    const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,}))
    setRecipeList(filteredData);
    getRecipeList();
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }
};
useEffect(() => {
  getRecipeList();
}, []);
//  Adding recipes to the database
async function addRecipeHandler(recipeData){
  try {
    await addDoc(recipesCollectionRef, recipeData);
    } catch (error) {
        console.error("Error retrieving Docs from database: ", error);
    }

  
};
//  Deleting recipes from the database
const deleteRecipe = async (id) => {
  const recipeDoc = doc(db, "recipes", id)
  try {
    await deleteDoc(recipeDoc);
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
          <Recipe
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          onDelete={() => deleteRecipe(recipe.id)}
        />
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
      <div className={styles.addRecipe}>
        <button onClick={showElementHandler}>+</button>
      </div>
</div>
);



//UNCOMMENT THIS AFTER SETTING UP DATABASE:


  
/*
  return (
    <div className={styles.body}>
      <div className={styles.recipesGrid}>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.description}
            name={recipe.name}
            description={recipe.description}
            instructions={recipe.instructions}
            ingredients={recipe.ingredients}
          />
        ))}
        ;
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
      <div className={styles.addRecipe}>
        <button onClick={showElementHandler}>+</button>
      </div>
    </div>
  );
  */
}

export default Recipes;
