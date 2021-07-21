import React from "react";
import { Checkinputvalue } from "./Date";
function DateInput() {
  const Today = new Date();
  const Year = Today.getFullYear();
  const Month = Today.getMonth() + 1;
  const Day = Today.getDate();
  const ActualDate = `${Year}-${Month}-${Day}`;
  console.log(ActualDate);
  return (
    <div className="DateContainer">
      <input type="Date" max={ActualDate} onChange={Checkinputvalue}></input>
    </div>
  );
}
export default DateInput;
