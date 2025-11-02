"use client";

import React, { useState } from "react";

export default function GetRecipes() {
  const [ingredient, setIngredient] = useState("chicken");
  const [result, setResult] = useState([]);

  const apiCall = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      console.log(`API response for ${ingredient}`, data);

      if (data) {
        setResult(data.meals);
      } else {
        setResult([]);
      }
    } catch (error) {
      console.log(error);
      setResult([]);
    }
  };

  return (
    <div>
      <input
        className="text-black border-2"
        type="text"
        value={ingredient}
        onChange={(i) => setIngredient(i.target.value)}
        placeholder="Enter recipe ingredient"
      />
      <button onClick={apiCall} className="bg-blue-200 ml-2">
        Get Recipes
      </button>
      <p>Recipe Ideas: </p>
      {result.length > 0 ? (
        <ul>
          {result.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p></p>
        // <p>No recipes found.</p> ***update to use error state handling
      )}
    </div>
  );
}
