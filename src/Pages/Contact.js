import React from "react";
import "../../src/styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-contact">
        <div className="form-box-contact">
          <div className="form-and-logo-contact">
            <div className="left-side-contact">
              <img src="/images/winkeat-logo.png" alt="not available" />
            </div>
            <div className="right-side-contact">
              <h2>Contact Us</h2>
              <input placeholder="Name" />
              <hr className="input-hr" />
              <input placeholder="Email" />
              <hr className="input-hr"/>
              <input placeholder="Contact No" />
              <hr className="input-hr"/>
              <input placeholder="Message" />
              <hr className="input-hr"/>
              <button className="submit-btn-contact">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
