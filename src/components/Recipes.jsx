import styles from "./Recipes.module.css";
/*import Recipe from "./Recipe";*/
import NewRecipe from "./NewRecipe";
import BackdropModal from "./BackdropModal";

import {db, auth} from "../config/firebase";
import {getDocs, collection, addDoc, deleteDoc, doc} from "firebase/firestore";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  //je uživatel přihlášen?
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
        auth.onAuthStateChanged(async function(user) {
        if (user) {
          // zkusit vymazat, všichni uživatelé mají vytvořený účet v dokumentech a měli by všichni mít username a tohle by teda nebylo třeba
          setLoggedUser(user);
          //console.log("a user is logged in");
        }
        else{
          setLoggedUser(null);
          //console.log("a user is not logged in");
        }
      });
      }, [auth]);
//database recipes
const [recipeList, setRecipeList] = useState([]);

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
      </div>
      
  </div>
  </Link>
</div>
      
      ))}
</div>
<br />
    <div>
      <hr />
      {elementIsVisible ? (
        <BackdropModal onClose={hideElementHandler}>
          <NewRecipe
            onSent={hideElementHandler}
            onAddRecipe={addRecipeHandler}
          />
        </BackdropModal>
      ) : null}
      {loggedUser ?
      
      <div className={styles.addRecipeSmall}>
        <button onClick={showElementHandler}>Přidej vlastní recept!</button>
      </div>
    : null}
    </div>
</div>
);


}

export default Recipes;
