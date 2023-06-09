import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./components/pages/Home";
import Account from "./components/pages/Account";
import MyRecipes from "./components/pages/MyRecipes";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import EditRecipe from "./components/EditRecipe";

import Footer from "./components/Footer";
import React from "react";

function App() {

  return (
  <div>
  <Navbar />
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/Account" element={<Account />}></Route>
    <Route path="/MyRecipes" element={<MyRecipes />}></Route>
    <Route path="/Recipe/:recipeId" element={<Recipe />}></Route>
    <Route path="Recipe/edit/:recipeId" element={<EditRecipe />}></Route>
    <Route path="*" element={<Navigate to="/" replace />} /> 
  </Routes>
  <Footer />
  </div>

  );
}

export default App;
