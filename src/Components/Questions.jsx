import { useState } from "react";
import Question from "./Question";

const Questions = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleInfo = (id) => {
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  };
  return (
    <div className="container">
      <h1>Questions</h1>
      {questions?.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleInfo={toggleInfo}
          />
        );
      })}
    </div>
  );
};

export default Questions;
