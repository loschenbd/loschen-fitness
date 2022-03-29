import './App.css';
import Airtable from 'airtable';
import {useEffect} from "react";
import {useState} from "react";
import Exercise from "./components/Exercise";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE
);

function App() {
    const [exercises, setExcerises] = useState([])
    useEffect(() => {
        base('Exercises')
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setExcerises(records)
                console.log(records);
                fetchNextPage();
            });
    }, []);

  return (
    <div className="App">
          <h1>Exercises</h1>
        {exercises.map(exercise => (
            <Exercise
                key={exercise.id}
                exercise={exercise}
                name={exercise.name}
            />
        ))}

    </div>
  );
}

export default App;
