import React, { createContext, useReducer} from "react";
import "../styles/Cart.css";
import ContextCart from "../Components/ContextCart";
import PizzaData from "../PizzaData";
import {reducer} from "../Components/reducer";

export const CartContext = createContext();

const initialState = {
  item: PizzaData,
  totalAmount: 0,
  totalItem: 0,
}

const Cart = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // to delet individual item from cart 
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });

  };

  return (
      <CartContext.Provider value={{...state, removeItem}}>
        <ContextCart />
      </CartContext.Provider>
  );
};

export default Cart;
