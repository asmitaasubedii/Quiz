import React, { useContext, useState } from "react";
import { QuizContex } from "../../../Context/QuizHolder";

export const Quiz = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <Box current={current} setCurrent={setCurrent} />
    </div>
  );
};

const Box = ({ current, setCurrent }) => {
  const { QA, correct, setCorrect, exit, setExit } = useContext(QuizContex);
  const [answer, setAnswer] = useState("");
  const saveClick = () => {
    if (QA[current].correct === answer) {
      setCorrect(correct + 1);
    }
    setAnswer("");
    {
      if (current + 1 === QA.length) {
        setExit(true);
      } else {
        setCurrent(current + 1);
      }
    }
  };
  return (
    <div className=" w-[60%] min-h-[280px] border shadow-lg rounded overflow-hidden">
      <div className="px-8 py-6 text-2xl overflow-hidden">
        {current + 1}. {QA[current].question}
      </div>
      <div className="grid grid-cols-2 px-5 gap-2">
        <div
          onClick={() => setAnswer("a")}
          className={`${
            answer === "a" ? "bg-blue-400 text-gray-200" : ""
          } p-4 border hover:bg-blue-400 hover:text-gray-200 duration-300 font-medium text-base text-center cursor-pointer`}
        >
          {QA[current].a}
        </div>
        <div
          onClick={() => setAnswer("b")}
          className={`${
            answer === "b" ? "bg-blue-400 text-gray-200" : ""
          } p-4 border hover:bg-blue-400 hover:text-gray-200 duration-300 font-medium text-base text-center cursor-pointer`}
        >
          {QA[current].b}
        </div>
        <div
          onClick={() => setAnswer("c")}
          className={`${
            answer === "c" ? "bg-blue-400 text-gray-200" : ""
          } p-4 border hover:bg-blue-400 hover:text-gray-200 duration-300 font-medium text-base text-center cursor-pointer`}
        >
          {QA[current].c}
        </div>
        <div
          onClick={() => setAnswer("d")}
          className={`${
            answer === "d" ? "bg-blue-400 text-white" : ""
          } p-4 border hover:bg-blue-400 hover:text-gray-200 duration-300 font-medium text-base text-center cursor-pointer`}
        >
          {QA[current].d}
        </div>
      </div>
      <div className="flex justify-between items-center p-6">
        <div className="flex justify-evenly w-1/3">
          <button
            onClick={() => setExit(true)}
            className="border border-slate-600 rounded-2xl px-6 py-2"
          >
            Exit
          </button>
          <button
            onClick={() => setAnswer("")}
            className="border border-slate-600 rounded-2xl px-5 py-2"
          >
            Reset
          </button>
        </div>
        <button
          onClick={saveClick}
          className="bg-green-600 rounded-2xl text-white px-5 py-2 hover:opacity-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};
