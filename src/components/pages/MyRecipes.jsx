import styles from "../Recipes.module.css";
import NewRecipe from "../NewRecipe";
import BackdropModal from "../BackdropModal";

import {db, auth} from "../../config/firebase";
import {getDocs, collection, addDoc, deleteDoc, doc, getDoc, where, query, QuerySnapshot} from "firebase/firestore";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function MyRecipes(){
    const [loggedUser, setLoggedUser] = useState();
    function getUser(){
            auth.onAuthStateChanged(async function(user) {
            if (user) {
              setLoggedUser(auth.currentUser);          //uživatel je přihlášen a jeho jméno je zapsáno pro vyrenderování v navbaru
            }
            else{
              setLoggedUser(null);                                  //uživatel není přihlášen
            }
          });
        }
        const [recipeList, setRecipeList] = useState([]);
        useEffect(() => {
            getUser();
            getMyRecipeList();
        }, []);
        
        //getting user's recipes from database and showing them
         
        const getMyRecipeList = async () => {
          try {
            if( auth.currentUser) {
            const specifiedRecipesCollectionRef = query(collection(db, "recipes"), where("userId", "==", auth.currentUser.uid));
            getDocs(specifiedRecipesCollectionRef).then((QuerySnapshot) => {
                const data = QuerySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id,}));
                setRecipeList(data);
            });}
            } catch (error) {
                console.error("Error retrieving Docs from database: ", error);
            }
        };

        //  Adding recipes to the database
        async function addRecipeHandler(recipeData){
          try {
            const recipesCollectionRef = collection(db, "recipes");
            await addDoc(recipesCollectionRef, recipeData);
            getMyRecipeList();
            } catch (error) {
                console.error("Error retrieving Docs from database: ", error);
            }
        };

  const [elementIsVisible, setElementIsVisible] = useState(false);
  function hideElementHandler() {
    setElementIsVisible(false);
  }
  function showElementHandler() {
    setElementIsVisible(true);
  }

    return(<div className={styles.myRecipes}>
    <div className={styles.body}>
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
      
      <p className={styles.recipeAuthorSmall}>{recipe.author}</p>
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
</div></div>);

}

export default MyRecipes;