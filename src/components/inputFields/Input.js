import React from "react";
function Input(props) {
  return (<div>
    <label
      htmlFor={props.id}
      className={` ${props.labelClasses ? props.labelClasses : ""
        } block capitalize text-base font-normal `}
    >
      {props.label}
    </label>
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      id={props.id}
      className={` ${props.className ? props.className : ""} 
          ${props.onFocus ? "bg-red-100 border !border-red-800" : ""} 
          w-full h-11 rounded p-4 mx-auto my-4 border outline-0`}
      onChange={props.onChange}
    />
  </div>
  );
}
export default Input;
