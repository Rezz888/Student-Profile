import React from "react";
import { useState, useMemo } from "react";

function StudentProfile({ item, i }) {
  const [selected, setSelected] = useState(null);

  const gradeAverage = useMemo(() => {
    return (
      item.grades.reduce((acc, cur) => acc + Number(cur), 0) /
      item.grades.length
    );
  }, [item.grades]);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={item.pic} alt="img" />
        <div className="card-text">
          <h1>
            {item.firstName} {item.lastName}
          </h1>
          <h3>Email: {item.email}</h3>
          <h3>Company: {item.company}</h3>
          <h3>Skill: {item.skill}</h3>
          <h3>Average: {gradeAverage}%</h3>
        </div>
        <span onClick={() => toggle(i)}>{selected === i ? "-" : "+"}</span>
      </div>

      <div className={selected === i ? "grade-list-show" : "grade-list"}>
        {item.grades.map((grade, n) => {
          return (
            <ul key={n}>
              <li>
                Test {n + 1}: {grade}%
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default StudentProfile;
