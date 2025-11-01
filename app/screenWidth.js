// from WDS "Learn useEffect in 13 Minutes" - window width listener at end of video https://youtu.be/0ZJgIjIuY7U?si=26Z4rWMKx6oRIFGf"

"use client";

import React, { useState, useEffect } from "react";

export default function AdaptWindowWidth() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // show the window width as the screen size changes
    window.addEventListener("resize", handleResize);
    //clean up in case component is unmounted so it will stop listening, return is called first
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // no props passed in [] so it activates upon mount / reload of page and starts listening
  }, []);

  return (
    <>
      <div>Current Window Size: {windowWidth} px.</div>
    </>
  );
}
