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
import MainCanteen from './Pages/MainCanteen';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment/Payment';
import CreditCard from './Pages/Payment/PaymentPages/Creditcard/CreditCard';
import DebitCard from './Pages/Payment/PaymentPages/Debitcard/DebitCard';
import UPI from './Pages/Payment/PaymentPages/UPI/UPI';
import ConfirmationPage from './Pages/ConfirmationPage';
import ConfirmationPage2 from './Pages/ConfirmationPage2';



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
        <Route path="/maincanteen" element={<MainCanteen />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/credit-card" element={<CreditCard />} />
        <Route path="/payment/debit-card" element={<DebitCard />} />
        <Route path="/payment/upi" element={<UPI />} />
        <Route path="/confirmationpage" element={<ConfirmationPage />} />
        <Route path="/confirmationpage2" element={<ConfirmationPage2 />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
