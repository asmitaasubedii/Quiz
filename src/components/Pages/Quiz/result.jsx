import React, { useContext } from "react";
import { QuizContex } from "../../../Context/QuizHolder";

export const Result = () => {
  const { correct, QA, setExit, setStart } = useContext(QuizContex);
  const playAgain = () => {
    setExit(false);
    setStart(false);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <div className=" w-[60%] min-h-[280px] border shadow-lg rounded flex flex-col justify-center items-center">
        <h1 className="pb-4">
          {correct} correct out of {QA.length}
        </h1>
        <button
          onClick={playAgain}
          className="bg-green-600 rounded-2xl text-white px-5 py-2 hover:opacity-95 shadow-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
