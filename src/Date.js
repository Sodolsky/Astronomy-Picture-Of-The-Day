import React from "react";
import DateInput from "./DateInput";
import { SubmitButton } from "./SubmitButton";
let APIDate;
function Data() {
  return (
    <div className="PickDate">
      <DateInput />
      <SubmitButton />
    </div>
  );
}
function Checkinputvalue(event) {
  let DateFromInput = event.target.value.split("-");
  const FromDate = new Date();
  const ToDate = new Date(
    DateFromInput[0],
    DateFromInput[1] - 1,
    DateFromInput[2]
  );
  const Diffrence = Math.ceil((ToDate - FromDate) / 1000 / 60 / 60 / 24);
  if (Diffrence > 0) {
    APIDate = undefined;
  } else {
    APIDate = DateFromInput;
  }
}
export { Data, Checkinputvalue, APIDate };
