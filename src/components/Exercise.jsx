import React from "react";

const Exercise = ({ exercise }) => {
  return (
    <div className="exercise">
      <h3>{exercise.fields.name}</h3>
        <p>{exercise.fields.standard_rx}</p>
        <a href={exercise.fields.youtube_url}>{exercise.fields.name}</a>
        <ul>
            <li>{exercise.fields.program_tags}</li>
        </ul>
    </div>
  );
};

export default Exercise;