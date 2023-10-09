import React, { Children } from "react";
function Card(props) {
  return (
    <>
      <div
        className={`${
          props.className ? props.className : ""
        } rounded shadow-md bg-white `}
      >
        {props.children}
      </div>
    </>
  );
}
export default Card;
