import React from 'react'
import PaymentNavbar from '../../Paymentnavbar/PaymentNavbar'
import PaymentSidebar from '../../Paymentsidebar/PaymentSidebar'
import MakePayment from '../../MakePayment/MakePayment'
import ToPay from '../../Amountbox/ToPay'
import CardForm from '../Cardform/CardForm'
import "../Debitcard/Debitcard.css"
import { AcceptedCard } from '../AcceptedCard/AcceptedCard'

const DebitCard = () => {
  return (
    <>
        <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar/>
          <div className="payment-body-content">
            {/* <Wallet/> */}
            <div className="debitcard-card">
            <AcceptedCard/>
            <CardForm/>
            <MakePayment/>
            </div>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DebitCard