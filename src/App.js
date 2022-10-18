import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import VendorLogin from './Pages/VendorLogin';
import Contact from './Pages/Contact';
import HomePage from './Pages/HomePage';
import User from './Pages/User';
import Order from './Pages/Order';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
