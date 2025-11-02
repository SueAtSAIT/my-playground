"use client";

import React, { useState } from "react";

export default function EmailCheckComponent() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const validateEmail = async () => {
    try {
      const response = await fetch(`https://www.disify.com/api/email/${email}`);
      const data = await response.json();

      if (data.format) {
        if (data.disposable) {
          setResult("This email is valid and disposable.");
        } else {
          setResult("This email is valid and not disposable.");
        }
      } else {
        setResult("This email is not valid.");
      }

      // setResult(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        className="text-black border-2"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={validateEmail} className="bg-blue-200 ml-2">
        Check
      </button>
      <p>{result}</p>
    </div>
  );
}
