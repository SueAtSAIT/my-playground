// from WDS "Learn useEffect in 13 Minutes - fetch call at start of video https://youtu.be/0ZJgIjIuY7U?si=26Z4rWMKx6oRIFGf"

"use client";

import React, { useState, useEffect } from "react";

export default function ContentArea() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button
          onClick={() => setResourceType("posts")}
          className="m-4 p-4 border-2 rounded-2xl">
          Posts
        </button>
        <button
          onClick={() => setResourceType("users")}
          className="m-4 p-4 border-2 rounded-2xl">
          Users
        </button>
        <button
          onClick={() => setResourceType("comments")}
          className="m-4 p-4 border-2 rounded-2xl">
          Comments
        </button>
      </div>
      <h1 className="text-4xl uppercase">{resourceType}</h1>
      {items.map((item) => {
        return <pre key="id">{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
