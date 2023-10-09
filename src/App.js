import React, { useState } from "react";
import Card from "../src/components/card/Card";
import Input from "./components/inputFields/Input";
import CourseGoal from "./data/CourseGoal";

function App() {
  const [isValid, setIsInvalid] = useState(true);
  const [addCard, setAddCard] = useState(CourseGoal);
  const [updateInputValue, setUpdateInputValue] = useState(" ");

  const deleteHandler = (event) => {
    let goalContent = event.target.textContent;
    let updatedCards = addCard.filter(goal => goal.label !== goalContent);
    setAddCard(updatedCards);
  };
  const getValueFun = (event) => {
    setUpdateInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsInvalid(true);
    }
  };
  const getValues = (event) => {
    event.preventDefault();
    if (updateInputValue.trim().length <= 0) {
      alert("please enter the  goal name.");
      setUpdateInputValue(" ");
      setIsInvalid(false);
      event.target.focus();
    } else {
      setIsInvalid(true);
      let fullInfor = {
        id: Number(Math.floor(Math.random(3) * 1000).toFixed(0)),
        label: updateInputValue,
      };
      let allGoals = [fullInfor, ...addCard];
      setAddCard(allGoals);
      setUpdateInputValue(" ");
    }
  };
  return (
    <>
      <div className="whole-wrapper max-w-xl w-full m-auto">
        <Card className=" mt-5 px-7 py-6">
          <form onSubmit={getValues}>
            <Input
              type="text"
              placeholder="Enter Your Goal..."
              value={updateInputValue}
              id='course-goal-input'
              label="Course goal"
              labelClasses={`${isValid ? "" : "text-red-500"}`}
              className={`${isValid ? "" : "text-red-500 border border-red-600 bg-red-100"
                } border-[#bfbfbf] focus:shadow-md focus:border focus:border-[#bfbfbf]`}
              onChange={getValueFun}
              setValid={setIsInvalid}
            />
            <button
              type="submit"
              className="p-3 px-5 shadow-md bg-[#dc5790] text-white text-[14px] font-medium"
            >
              Add Goal
            </button>
          </form>
        </Card>
        <div className="goals-wrapper">
          {addCard <= 0 && <h2 className="p-3 text-center text-gray-400 font-medium">No goal founds.</h2>}
          {addCard.map((currentGoal) => (
            <Card className="mt-5" key={currentGoal.id}>
              <p
                className="p-3 shadow-md bg-[#dc5790] text-white text-[14px]"
                onClick={deleteHandler}
              >
                {currentGoal.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
