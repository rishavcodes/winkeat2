import React from "react";
import "./Ordercard.css";

const OrderCard = (props) => {
  return (
    <>
      <div className="order-card-body">
        <div className="card-img">
        <img className="card-img-img" src="/images/chicken-pizza.png" alt='not available' />
        </div>
        <div className="card-info">
          <h2>{props.name}</h2>
          <p>{props.canteenName}</p>
        </div>
        <div className="card-status">
          <h3>Status</h3>
          <p>{props.orderStatus}</p>
        </div>
        <div className="post-order-activity">
          <button>{props.postOrderActivity}</button>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
