import React from "react";
function Title(props) {
  const ApiObject = props.response;
  return <h1>{ApiObject.title}</h1>;
}
export default Title;
