import React from "react";

const Exercise = ({ exercise }) => {
  return (
    <div className="exercise">
      <h3>Name</h3>
        <p>Reps</p>
        <ul>
            <li>Tags</li>
        </ul>
    </div>
  );
};

export default Exercise;