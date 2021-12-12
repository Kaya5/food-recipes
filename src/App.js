import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";
// import uuid from "uuid/v4";

import { v4 as uuidv4 } from "uuid";

const App = () => {
  const APP_ID = "aa2b90bb";
  const APP_KEY = "85c65e9d285e9a1dfce74f3cfbcddf7d";

  //all the data returned is saved in this 'recipes' array.
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("The world's number One Food Recipes App");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); //returns a format that is easy to work with.
    const hits = data.hits;
    //setting the state of recipes to the returned data under 'hits'
    setRecipes(hits);
    console.log(data);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const searchResult = (e) => {
    e.preventDefault();
    //search ONLY the finished input.
    setQuery(input);
    setInput("");
    setTitle("");
  };

  return (
    // <div className='App'>
    <div className={!title ? "no-bg" : "App"}>
      <form className="form" onSubmit={searchResult}>
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Enter ingredient... (e.g. bread)"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {/* mapping over all the individual recipes contained in the array */}
        {recipes.map((recipe) => (
          <Recipe
            key={uuidv4()}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <div className={title ? "title" : "no-title"}>{title}</div>
    </div>
  );
};

export default App;
