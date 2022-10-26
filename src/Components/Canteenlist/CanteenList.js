import React from "react";
import "./Canteenlist.css";
import { Link } from "react-router-dom";

const CanteenList = () => {
  return (
    <>
      <div className="canteen-card-body">
        <div className="canteen-card-list">
          <div className="card">
            <img
              className="canteen-card-img"
              src="/images/canteen-a.png"
              alt="not available"
            />
            <img
              className="canteen-card-img-mobile"
              src="/images/main-canteen-mobile-img1.png"
              alt="not available"
            />
            <h2 className="canteen-card-title">A Block Canteen</h2>
          </div>
          <Link style={{textDecoration: 'none'}} to="/maincanteen">
          <div className="card">
            <img
              className="canteen-card-img"
              src="/images/canteen-a.png"
              alt="not available"
            />
            <img
              className="canteen-card-img-mobile"
              src="/images/main-canteen-mobile-img2.png"
              alt="not available"
            />
            <h2 className="canteen-card-title">Main Canteen</h2>
          </div>
          </Link>
          <div className="card">
            <img
              className="canteen-card-img"
              src="/images/canteen-a.png"
              alt="not available"
            />
            <img
              className="canteen-card-img-mobile"
              src="/images/main-canteen-mobile-img2.png"
              alt="not available"
            />
            <h2 className="canteen-card-title">Cafe Coffee Day</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanteenList;
