"use client";

import React, { useState } from "react";
import GetRecipes from "./getRecipes";

export default function ClickableCard() {
  const [name, setName] = useState("default");

  function handleClick() {
    setName("chicken");
    // <GetRecipes name={name} />;
  }

  return (
    <>
      <div onClick={handleClick} className="bg-gray-500 rounded-2xl">
        <h2 className="text-2xl text-white p-4 mt-3 ">Click Me!</h2>
        <p className="text-center text-white">{name}</p>
      </div>
    </>
  );
}
