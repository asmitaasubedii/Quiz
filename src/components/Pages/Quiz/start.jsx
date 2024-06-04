import React, { useContext } from "react";
import { QuizContex } from "../../../Context/QuizHolder";

export const Start = () => {
  const { setStart } = useContext(QuizContex);
  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <div className=" w-[60%] min-h-[280px] border shadow-lg rounded flex flex-col justify-center items-center">
        <h1 className="pb-4 text-lg font-semibold">
          Click on Start to play Quiz .
        </h1>
        <button
          onClick={() => setStart(true)}
          className="border bg-red-600 text-white font-semibold text-xl px-8 py-3 rounded shadow-lg hover:opacity-95"
        >
          Start
        </button>
      </div>
    </div>
  );
};
