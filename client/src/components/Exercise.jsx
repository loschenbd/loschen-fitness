import React from "react";
import ReactPlayer from 'react-player/youtube';


const Exercise = ({ exercise }) => {
  return (
    <div className="exercise">
      <h3>{exercise.fields.name}</h3>
        <p>{exercise.fields.standard_rx}</p>
      <ReactPlayer
          url={exercise.fields.youtube_url}
          light={true}
          controls={true}
      />
        <ul>
            <li>{exercise.fields.program_tags}</li>
        </ul>
    </div>
  );
};

export default Exercise;