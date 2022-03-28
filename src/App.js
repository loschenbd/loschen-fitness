import './App.css';
import Airtable from 'airtable';
import {useEffect} from "react";
import {useState} from "react";
import Exercise from "./components/Exercise";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE
);


function App() {
  return (
    <div className="App">
          <h1>Exercises</h1>
          <Exercise />
    </div>
  );
}

export default App;
