import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Reservation from './components/Reservation';
import CustomerDetails from './components/CustomerDetails';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage/>}/>
          <Route path="/reservations" element={<Reservation/>}/>
          <Route path="/reservations/customer-details" element={<CustomerDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
