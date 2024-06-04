import React, { useState } from "react";
import { Accordion } from "./accordion";

export const FAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b border-gray-300 py-2">
      <button
        onClick={() => setShow(!show)}
        className="flex justify-between w-full"
      >
        <span> {question}</span>
        <span className="text-slate-600 text-lg font-bold">
          {show ? "➖" : "➕"}
        </span>
      </button>
      {show && <div className="text-sm font-medium px-2 py-2">{answer}</div>}
    </div>
  );
};
