// Following Kyle's button counter talk-through: https://youtu.be/O6P86uwfdR0?si=OvUj3ahbq0ejd1jy

"use client";

import React from "react";
import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(4);

  // Don't use the state variable in the counter but call it's previous value and update that
  //   else it will misbehave since it doesn't update back to state until the funciton is finished

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={decrement} className="bg-blue-500 m-4 p-4">
        -
      </button>
      <span className="bg-grey-500 m-4 p-4 text-4xl">{count}</span>
      <button onClick={increment} className="bg-yellow-500 m-4 p-4">
        +
      </button>
    </div>
  );
}
