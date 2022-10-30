import React from "react";
import "./Maincanteenheader.css";

const MainCanteenBodyHeader = (props) => {
  return (
    <>
      <div className="header-full-body">
          <div className="canteen-body-header">
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src={props.img}
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>{props.title}</h2>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default MainCanteenBodyHeader;
