import logo from './logo.svg';
import './App.css';
import React,{useState,useReducer, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import CustomerDetails from './components/CustomerDetails';
// import fetchAPI from './components/Fetch'
function App() {
const [enteredDate, setEnteredDate]=useState('')
const [Times, setTimes]=useState(['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00'])

function getTime(date) {
  const times=fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
}
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/reservations" element={<BookingPage  time={Times} enter={setEnteredDate} changedate={enteredDate} />}/>
          <Route path="/reservations/customer-details" element={<CustomerDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
