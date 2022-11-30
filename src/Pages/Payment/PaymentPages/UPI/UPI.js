import React from 'react'
import PaymentNavbar from '../../Paymentnavbar/PaymentNavbar'
import PaymentSidebar from '../../Paymentsidebar/PaymentSidebar'
import MakePayment from '../../MakePayment/MakePayment'
import ToPay from '../../Amountbox/ToPay'
import "../UPI/UPI.css"

const UPI = () => {
  return (
    <>
        <div className="container-payment">
        <PaymentNavbar/>
        <div className="payment-body">
          <PaymentSidebar/>
          <div className="payment-body-content">
            {/* <Wallet/> */}
            <div className="upi">
              <input className='enterupiid-input-box' placeholder='Enter UIP ID'/>
              <button className='upi-verify-button'>Verify</button>
            </div>
            <MakePayment/>
          </div>
          <div className="payment-rightbar">
            <ToPay/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UPI