import React from "react";
import reactDom from "react-dom";
import "./BackArrowStyles.scss";
import Main from "./Main";
function BackArrow() {
  return (
    <div onClick={RenderDatePicker}>
      <button className="arrow -long -huge -red"></button>
    </div>
  );
}
function RenderDatePicker() {
  reactDom.render(<Main />, document.querySelector("#root"));
}
export default BackArrow;
