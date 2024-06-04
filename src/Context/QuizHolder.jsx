import React, { createContext, useState } from "react";
const QuizContex = createContext();
const QA = [
  {
    question: "How tall is Ashmeeta?",
    a: "5'6",
    b: "5'7",
    c: "5'8",
    d: "5'9",
    correct: "b",
  },
  {
    question: "Her favorite actress from Nepal?",
    a: "Priyanka Karki",
    b: "Swastima khadka",
    c: "Barsha Rawat",
    d: "Pooja Sharma",
    correct: "a",
  },
  {
    question: "Her favorite things is to?",
    a: "Dance",
    b: "Yoga",
    c: "Sleep",
    d: "Reading",
    correct: "c",
  },

  {
    question: "What is her favorite color?",
    a: "blue",
    b: "red",
    c: "pink",
    d: "yellow",
    correct: "c",
  },
  {
    question: "She likes?",
    a: "Instagram",
    b: "Pinterest",
    c: "Facebook",
    d: "Snapchat",
    correct: "b",
  },
  {
    question: "She likes?",
    a: "Naruto",
    b: "Doraemon",
    c: "One Piece",
    d: "All of above",
    correct: "d",
  },
  {
    question: "She likes?",
    a: "Mountain",
    b: "Beach",
    c: "Desert",
    d: "None of above",
    correct: "a",
  },
  {
    question: "What is her eye color?",
    a: "blue",
    b: "brown",
    c: "black",
    d: "green",
    correct: "c",
  },
  {
    question: "Her Horoscope?",
    a: "Aries",
    b: "Taurus",
    c: "Gemini",
    d: "Leo",
    correct: "b",
  },
  {
    question: "Today she is?",
    a: "Happy",
    b: "Sad",
    c: "Busy",
    d: "Angry",
    correct: "a",
  },
];
export const QuizHolder = (props) => {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContex.Provider
      value={{ start, exit, setStart, setExit, QA, correct, setCorrect }}
    >
      {props.children}
    </QuizContex.Provider>
  );
};
export { QuizContex };
