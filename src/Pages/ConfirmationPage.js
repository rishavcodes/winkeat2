import React, { useState, useEffect } from "react";
import "../styles/Confirmationpage.css";

const ConfirmationPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
      <div className="confirmation-container">
        {loading ? (
          <div className="loader-container">
            <div className="wiating">
              <h2>
                <span className="waiting-typo1">
                  Waiting for <br /> Confirmation
                </span>
                <br />
                <span className="waiting-typo2">
                  wait till your order <br /> get confirmed by <br /> vendor
                </span>
              </h2>
              <img
                className="waiting-gif"
                src="/animations/waitinggif.gif"
                alt="waiting-gif"
              />
            </div>
          </div>
        ) : (
          <div className="confirmation-animation2">
          <div className="loader-container">
            <div className="confirmation">
              <img
                className="confirmation-gif"
                src="/animations/confirmationgif.gif"
                alt="waiting-gif"
              />
              <p className="order-confirmed-text">Order Confirmed!</p>
            </div>
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmationPage;
