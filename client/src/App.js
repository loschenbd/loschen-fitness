import './App.css';
import Airtable from 'airtable';
import axios from 'axios';
import cors from 'cors';
import {useEffect, useState} from "react";
import Exercise from "./components/Exercise";
import LoginButton from './components/LoginButton.jsx';
import LogoutButton from './components/LogoutButton.jsx';
import Profile from "./components/Profile.jsx";

const api = axios.create ({
    method: 'get',
    baseURL: 'https://cloud.ouraring.com/',
    headers: { Authorization: `Bearer BOTJCBCTPEP5J6BTXPWZHDAEQJWAUQ2V` }

});
api.defaults.headers.common['Authorization'] = process.env.REACT_APP_OURA_PERSONAL_ACCESS_TOKEN;

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY }).base(process.env.REACT_APP_AIRTABLE_BASE
);

function App() {
    const [exercises, setExcerises] = useState([])
    const [personalInfo, setPersonalInfo] = useState([]);


    useEffect(() => {
    api.get(`/v1/userinfo HTTP/1.1`)
        .then(res => {
            console.log('test' + res.data)
            setPersonalInfo(res.data)
        })
    }, [])

    useEffect(() => {
        base('Exercises')
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setExcerises(records)
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
