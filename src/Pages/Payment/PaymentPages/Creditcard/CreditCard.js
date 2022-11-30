import React, { useState } from "react";
import "../Creditcard/Creditcard.css";
import PaymentNavbar from "../../Paymentnavbar/PaymentNavbar";
import PaymentSidebar from "../../Paymentsidebar/PaymentSidebar";
import MakePayment from "../../MakePayment/MakePayment";
import ToPay from "../../Amountbox/ToPay";
import CardForm from "../Cardform/CardForm";
import { AcceptedCard } from "../AcceptedCard/AcceptedCard";

const CreditCard = () => {
  return (
    <>
      <div className="container-payment">
        <PaymentNavbar />
        <div className="payment-body">
          <PaymentSidebar />
          <div className="payment-body-content">
            <div className="creditcard-card">
              <AcceptedCard/>
              <CardForm />
              <MakePayment />
            </div>
          </div>
          <div className="payment-rightbar">
            <ToPay />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
