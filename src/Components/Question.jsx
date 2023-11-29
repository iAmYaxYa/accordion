import { useState } from "react";

const Question = ({ id, title, info, activeId, toggleInfo }) => {
  const isActive = id === activeId;
  return (
    <div className="question">
      <header onClick={() => toggleInfo(id)}>
        <h5>{title}</h5>
        <button className="question-btn">{!isActive ? "+" : "-"}</button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
};

export default Question;
