import React from "react";
import style from "../styles/recipe.module.css";

const Recipe = ({ name, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{name}</h2>
      <i className={style.calories}>
        <b>Calories:</b> {calories}
      </i>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
