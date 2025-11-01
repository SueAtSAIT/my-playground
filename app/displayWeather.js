"use client";

import React, { useEffect } from "react";

export default function DisplayWeather() {
  async function loadWeather() {
    try {
      const data = await fetchWeatherData();
      setWeather(data);
    } catch {
      console.error(error);
    }
  }

  async function fetchWeatherData() {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=51.064&longitude=-114.08&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,cloudcover&timezone=auto`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }

  useEffect(() => {
    loadWeather();
  });

  return (
    <div>
      <p>
        Temperature:{" "}
        {temperature_2m !== null && temperature_2m !== undefined && tempUnit
          ? `${temp}${tempUnit}`
          : "unavailable"}
      </p>
      <p>
        Cloud cover:{" "}
        {cloudcover !== null && cloudover !== undefined && cloudCoverUnit
          ? `${cloudCover}${cloudCoverUnit}`
          : "unavailable"}
      </p>
    </div>
  );
}
