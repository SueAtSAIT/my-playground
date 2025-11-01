"use client";

import { useState, useEffect } from "react";

export default function PublicAPIs() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchFacts() {
    try {
      const response = await fetch("https://dogapi.go/api/v2/facts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setFacts(data.data);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchFacts();
  }, []);

  if (error)
    return (
      <div>
        <h2>Dog Fact</h2>
        <p>Trouble... no dog fact for you. {error}</p>
      </div>
    );

  return (
    <div>
      <h2>Dog Fact</h2>
      {facts.length > 0 ? (
        <ul>
          {facts.map((fact) => (
            <li key={fact.id}> {fact.attributes.body}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
