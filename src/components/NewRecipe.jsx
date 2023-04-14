import styles from './NewRecipe.module.css';
import { useState } from 'react';

import {auth} from "../config/firebase";

function NewRecipe({onSent, onAddRecipe}){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ingredients, setIngredients] = useState([""]); 
    
    const ingredientChangeHandler = (index, event) => {
        const values = [...ingredients];
        values[index] = event.target.value;
        setIngredients(values);
      }; //při změně v daném inputu ingredience se zavolá funkce, předá se jí index a změněný input. Vytvoří se nové pole identické k 
         //poli ingrediencí v usestatu. vytvořenému poli se na obdrženém indexu uloží daná hodnota a poté se pole ingrediencí nastaví 
         //na vytvořené pole, tím se úspěšně změní právě ta daná ingredience
    
      const addIngredientHandler = () => {
        const values = [...ingredients];
        values.push('');
        setIngredients(values);
      }; //Podobný způsob jako u změny ingredience, tady se při kliknutí na button na konec pole přidá prázdná hodnota, 
         //tím se obnoví usestate a níže ve formuláři se vyrenderuje další položka input

    return(
        <>
        <div className={styles.body}>
        <div className={styles.newRecipe}>
            <form styles={styles.form_container} onSubmit={submitHandler}>
            <div className={styles.title_container}>
                <p className={styles.title}>Add a recipe!</p>
                <div className={styles.subtitle}>Add your very own unique recipe, you will be able to add more information to the recipe when editting</div>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeName_field">Recipe Name</label>
                <input placeholder="Recipe Name" title="Input title" name="input-name" type="text" className={styles.input_field} id="recipeName_field" required maxLength="50" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeDescription_field">Short Description</label>
                <input placeholder="Short Description (max 75 characters)" title="Input title" name="input-description" type="text" className={styles.input_field} id="recipeDescription_field" required maxLength="75" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div>
        <label className={styles.input_label} htmlFor="ingredients">Ingredients:</label>
        {ingredients.map((ingredient, index) => ( // projede to array ingredients (defaultně s jednou položkou) a vyrenderuje tolik inputu pro ingredience, kolik je položek v ingredients. každé přidá index.
          <div key={index} className={styles.input_container}>
            <label className={styles.input_label_ingredient} htmlFor={`ingredient${index}`}></label>
            <input
              className={styles.input_field}
              placeholder={`#${index+1} ingredient`}
              type="text"
              id={`ingredient${index}`}
              name={`ingredient${index}`}
              value={ingredient}
              onChange={(event) => ingredientChangeHandler(index, event)}
              required
            />
          </div>
        ))}
        <div className={styles.title_container}>
    <div className={styles.subtitle}>*input empty space to discard ingredient</div>
  </div>
        <button className={styles.addIngredient_btn} type="button" onClick={addIngredientHandler}>Add Ingredient</button>
      </div>
            <div className={styles.input_container}>
                <label className={styles.input_label} htmlFor="recipeInstructions_field">Instructions</label>
                <textarea cols={30} rows={10} placeholder="Instructions" title="Input title" name="input-instructions" type="text" className={styles.input_field} id="recipeInstructions_field" required onChange={(e) => setInstructions(e.target.value)} value={instructions}/>
            </div>
                <input className={styles.newRecipe_btn} id="submitButton" type="submit" value="Post Recipe"></input>
            </form>
        </div>
        </div>
        </>
    )
        function submitHandler(e){
            e.preventDefault();
            const validIngredients = ingredients.filter(ingredient => ingredient.trim() !== ''); //filter nám přeskočí ingredience, které jsou po odstranění whitespacu prázdné
            if(name.trim().length === 0 || description.trim().length === 0 || instructions.trim().length === 0 || validIngredients.length === 0){
                alert("políčka musejí být vyplněna, mezera se nepočítá");
            }else{  
                const recipeData = {
                    name: name,
                    description: description,
                    instructions: instructions,
                    ingredients: validIngredients,
                    userId: auth?.currentUser?.uid,
                };
                onAddRecipe(recipeData);
                onSent();
            }
        }

        
}

export default NewRecipe;