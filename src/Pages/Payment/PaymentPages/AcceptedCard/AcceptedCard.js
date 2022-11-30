import React from 'react'
import "../AcceptedCard/Acceptedcard.css"

export const AcceptedCard = () => {
  return (
    <>
        <div className="accepted-cards">
                <div>
                  <h3 className="we-accept">We accept: </h3>
                </div>
                <div className="accepted-card-img">
                  <img
                    className="american-express-logo"
                    src="/images/american-express-logo.png"
                    alt="american-express-logo"
                  />
                  <img
                    className="mastercard-logo"
                    src="/images/mastercard-logo.png"
                    alt="american-express-logo"
                  />
                  <img
                    className="rupay-logo"
                    src="/images/rupay-logo.png"
                    alt="american-express-logo"
                  />
                  <img
                    className="visa-logo"
                    src="/images/visa-logo.png"
                    alt="american-express-logo"
                  />
                </div>
              </div>
    </>
  )
}
