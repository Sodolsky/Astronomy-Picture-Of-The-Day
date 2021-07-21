import React from "react";
import BackArrow from "./BackArrow";
import Footer from "./Footer";
import Title from "./Title";
function VisualisedData(props) {
  console.log(props.ApiResponse);
  return (
    <div>
      <main className="Content">
        <div className="UpperRowFirstColumn">
          <Title response={props.ApiResponse} />
        </div>
        <div className="UpperRowSecondColumn">
          <BackArrow />
        </div>
        <div className="LowerRowFirstColumn">
          <img
            src={props.ApiResponse.url}
            alt="Todays Astronomy Pictore of the Day"
          ></img>
        </div>
        <div className="LowerRowSecondColumn">
          <span>Date: {props.ApiResponse.date}</span>
          <p>{props.ApiResponse.explanation}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default VisualisedData;
