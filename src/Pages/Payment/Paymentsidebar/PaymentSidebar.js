import React from "react";
import "../Paymentsidebar/Paymentsidebar.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { Link } from "react-router-dom";

const PaymentSidebar = () => {
  return (
    <>
      <div className="payment-sidebar">
        <h3>Choose Payment Option</h3>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/payment"
          >
            <li>
              <AccountBalanceWalletIcon /> Wallet
            </li>
          </Link>
          <Link to="/payment/credit-card" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <CreditCardIcon /> Credit Card
            </li>
          </Link>
          <Link to="/payment/debit-card" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <CreditCardIcon /> Debit Card
            </li>
          </Link>
          <Link to="/payment/upi" style={{ textDecoration: "none", color: "black" }}>
            <li>
              <QrCodeScannerIcon /> UPI Payment
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default PaymentSidebar;
