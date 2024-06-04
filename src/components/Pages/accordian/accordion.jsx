import React from "react";
import { FAQ } from "./faq";

export const Accordion = () => {
  const question = [
    {
      id: 1,
      question: "Question 1",
      answer: "Answer 1 ",
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Answer 2",
    },
    { id: 3, question: "Question 3", answer: "Answer 3" },
    {
      id: 4,
      question: "Question 4",
      answer: "Answer 4",
    },
    {
      id: 5,
      question: "Question 5",
      answer: "Answer 5",
    },
    {
      id: 6,
      question: "Question 6",
      answer: "Answer 6",
    },
    {
      id: 7,
      question: "Question 7",
      answer: "Answer 7",
    },
    {
      id: 8,
      question: "Question 8",
      answer: "Answer 8",
    },
  ];

  return (
    <div className="bg-gray-200 rounded-md p-6">
      {question.map((data) => {
        return (
          <div className="">
            <FAQ question={data.question} answer={data.answer} />
          </div>
        );
      })}
    </div>
  );
};
