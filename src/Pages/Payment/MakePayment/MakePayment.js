import React from "react";
import "../MakePayment/Makepayment.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const MakePayment = () => {
  return (
    <>
      <div className="make-payment-button">
        <button type="submit">
          Make Payment <ShoppingCartIcon />
        </button>
      </div>
    </>
  );
};

export default MakePayment;
