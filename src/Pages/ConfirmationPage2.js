import React from 'react'
import "../styles/Confirmationpage2.css"

const ConfirmationPage2 = () => {
  return (
    <>
      <div className="confirmation-page-main-content">
            <div className="qr-instruction-box">
              <div className="qr-box">
                <div className="qr-img">
                  <img
                    className="qr-code-img"
                    src="/images/qr-code-img.png"
                    alt="qr-code"
                  />
                </div>
                <hr className="qr-amount-seperator-hr" />
                <div className="amount-details">
                  <h3 className="paid-title">Paid</h3>
                  <h2 className="confirm-amount-paid">₹ 1150</h2>
                </div>
              </div>
              <div className="instruction-box">
                <h2 className="instruction-heading-text">instructions:-</h2>
                <p className="instruction-para-text1">
                  
                  1. Get This QR scanned while receiving the order to get your
                  order.
                </p>
                <p className="instruction-para-text2">
                  2. Do not Share this QR with anyone other than canteen staff.
                </p>
              </div>
            </div>
            <div className="back-to-home">
              <button>Return to HomePage</button>
            </div>
          </div>
    </>
  )
}

export default ConfirmationPage2