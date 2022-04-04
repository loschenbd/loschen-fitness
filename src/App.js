import './App.css';

import Airtable from 'airtable';
import {useEffect} from "react";
import {useState} from "react";
import Exercise from "./components/Exercise";
import LoginButton from './components/LoginButton.jsx';
import LogoutButton from './components/LogoutButton.jsx';
import Profile from "./components/Profile.jsx";



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
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
          <h1>Here are your Exercises</h1>
        {exercises.map(exercise => (
            <Exercise
                exercise={exercise}
            />
        ))}
    </div>
  );
}

export default App;
