import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import CustomerDetails from './components/CustomerDetails';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/reservations" element={<BookingPage/>}/>
          <Route path="/reservations/customer-details" element={<CustomerDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
