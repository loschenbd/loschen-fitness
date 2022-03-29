import './App.css';
import Airtable from 'airtable';
import {useEffect} from "react";
import {useState} from "react";
import Exercise from "./components/Exercise";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE
);

function App() {
    useEffect(() => {
        base('Exercises').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function(record) {
                console.log('Retrieved', record.get('Name'));
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, []);
  return (
    <div className="App">
          <h1>Exercises</h1>
          <Exercise name={record.name}/>
    </div>
  );
}

export default App;
