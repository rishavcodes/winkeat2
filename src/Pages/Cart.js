import React, { createContext, useReducer, useEffect} from "react";
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

  // increment of item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };


  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // to render updated item in cart
  useEffect(() => {
    dispatch({type: "GET_TOTAL"});
    // console.log("hello");
  }, [state.item]);
 
  

  return (
      <CartContext.Provider value={{...state, removeItem, increment, decrement}}>
        <ContextCart />
      </CartContext.Provider>
  );
};

export default Cart;
