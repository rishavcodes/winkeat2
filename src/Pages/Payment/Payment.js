import React from "react";
import "../../styles/Payment.css"
import PaymentSidebar from "./Paymentsidebar/PaymentSidebar";
import PaymentNavbar from "./Paymentnavbar/PaymentNavbar";
import Wallet from "./Wallet/Wallet";
import MakePayment from "./MakePayment/MakePayment";
import ToPay from "./Amountbox/ToPay";

const Payment = () => {
  return (
    <>
      <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar/>
          <div className="payment-body-content">
            <Wallet/>
            <MakePayment/>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
