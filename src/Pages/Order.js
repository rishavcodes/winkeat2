import React from 'react';
import "../../src/styles/Order.css";
import Sidebar from "../../src/Components/Sidebar/Sidebar";
import orderData from '../OrderData';
import OrderCard from '../Ordercard/OrderCard';

const Order = () => {

  function OrderCardInfo (orderData){
    return (
      <OrderCard 
      name={orderData.ItemName}
      canteenName={orderData.CanteenName}
      orderStatus={orderData.Status}
      postOrderActivity={orderData.PostOrderWork}
    />
    )
  }
  return (
    <>
      <Sidebar />
      <h1 className="order-page-h1">Previous Orders</h1>
      {orderData.map(OrderCardInfo)}
    </>
  )
}

export default Order