import React from "react";
import { fetchDataFromAPI } from "./API";
import { APIDate } from "./Date";
function SubmitButton() {
  return (
    <div className="FlexContainerCenter">
      <button className="SubmitButton" onClick={FetchOnClick}>
        Check Foto
      </button>
    </div>
  );
}
function FetchOnClick() {
  if (APIDate === undefined) {
    alert("Podaj Prawidłową Date!");
  } else {
    fetchDataFromAPI(APIDate[0], APIDate[1], APIDate[2]);
  }
}
export { SubmitButton };
