import logo from './logo.svg';
import './App.css';
import Airtable from 'airtable';
import {useEffect} from "react";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE
);


function App() {
  useEffect(() => {
    base('Table 1')
        .select({view: "Grid view"})
        .eachPage((records, fetchNextPage) => {
          console.log(records);
          fetchNextPage();
        });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
