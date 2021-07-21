import React from "react";
import reactDom from "react-dom";
import VisualisedData from "./VisualisedData";
async function fetchDataFromAPI(year, month, day) {
  const API_KEY = "u9Im98KEMb0cteBr833XLfHgTMfBqfdUV38HV3hM";
  try {
    const todayspicture = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${year}-${month}-${day}`
    );
    if (todayspicture.ok === false) {
      throw new Error(
        "We couldnt find picture of the day from your specific date"
      );
    }
    try {
      const jsonparsed = await todayspicture.json();
      reactDom.render(
        <VisualisedData ApiResponse={jsonparsed} />,
        document.querySelector("#root")
      );
    } catch (err) {
      alert(err);
    }
  } catch (err) {
    alert(err);
  }
}

export { fetchDataFromAPI };
