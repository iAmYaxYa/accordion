import { useState } from "react";
import Questions from "./Components/Questions";
import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
