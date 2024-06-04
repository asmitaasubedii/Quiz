import "./App.css";
import { Accordion } from "./components/Pages/accordian/accordion";
import { Quiz } from "./components/Pages/Quiz/quix";
import { Result } from "./components/Pages/Quiz/result";
import { Start } from "./components/Pages/Quiz/start";
import { QuizHolder } from "./Context/QuizHolder";
import { QuizContex } from "./Context/QuizHolder";
import { useContext } from "react";
function App() {
  const { start, exit } = useContext(QuizContex);
  return (
    <>
      {exit === false ? (
        <> {start ? <Quiz /> : <Start />}</>
      ) : (
        <>
          <Result />
        </>
      )}
    </>
  );
}

export default App;

{
  /* <Accordion /> */
}
