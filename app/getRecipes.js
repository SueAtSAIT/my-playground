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
      if (!response.ok) {
        throw new Error(
          `HTTP error, couldn't fetch data. Status: ${response.status}`
        );
      }
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

      {(result || []).map((meal) => (
        <div key={meal.idMeal}>
          <ul>
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} width="50px" />
              {meal.strMeal}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
