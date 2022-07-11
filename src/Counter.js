import React, { useState } from "react";

export default function Counter({ logo }) {
  const [scores] = useState([...Array(300).keys()]);

  const [goals, setGoals] = useState(0);
  const [behinds, setBehinds] = useState(0);
  const [score, setScore] = useState(0);

  function addGoal() {
    setGoals(goals + 1);
    setScore(score + 6);
  }

  function removeGoal(e) {
    e.preventDefault();
    if (goals > 0) {
      setGoals(goals - 1);
      setScore(score - 6);
    }
  }

  function addBehind() {
    setBehinds(behinds + 1);
    setScore(score + 1);
  }

  function removeBehind(e) {
    e.preventDefault();
    if (behinds > 0) {
      setBehinds(behinds - 1);
      setScore(score - 1);
    }
  }

  function resetScore(e) {
    e.preventDefault();
    setGoals(0);
    setBehinds(0);
    setScore(0);
  }

  return (
    <div className="scoreboard">
      <div className="team-logo">
        <img src={logo} alt="" />
      </div>
      <div
        className="goals"
        style={{ top: `-${goals}00%` }}
        onClick={addGoal}
        onContextMenu={removeGoal}
      >
        {scores.map((score) => {
          return <div key={score}>{score}</div>;
        })}
      </div>
      <div
        className="behinds"
        style={{ top: `-${behinds}00%` }}
        onClick={addBehind}
        onContextMenu={removeBehind}
      >
        {scores.map((score) => {
          return <div key={score}>{score}</div>;
        })}
      </div>
      <div className="score" style={{ top: `-${score}00%` }} onContextMenu={resetScore}>
        {scores.map((score) => {
          return <div key={score}>{score}</div>;
        })}
      </div>
    </div>
  );
}
