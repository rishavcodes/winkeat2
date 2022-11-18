import React, { useState } from 'react'
import "./Pizzamenu.css"

const PizzaMenu = (props) => {

  const [blank, setblank] = useState("blank")
  const [number1, setnumber1] = useState(1)
  const [blockBlock2, setblockBlock2] = useState("block2")
  const [cart, setcart] = useState("cart2")
  const [number, setnumber] = useState("number2")
  const addNumber = () => {
    setnumber1(number1+1)
  }

  const subNumber=()=>{
    if(number1<=1){
      setnumber(1)
      setblank("blank")
      setblockBlock2("block2")
      setnumber("number2")
      setcart("cart2")
    }
    else{
      setnumber1(number1-1)
    }
  }

  const unblock=()=>{
    setblank("");
    setblockBlock2("block")
    setnumber("number")
    setcart("cart")
  }


  return (
    <>
        <div>
        <div className="Pizzabox">
              <div className="foodbox">
                <div className="foodimg">
                <img src={props.img} alt='not available' />
                </div>
                <div className="food-info">
                  <h3>{props.title}</h3>
                  <h4>₹ {props.price}</h4>
                  <p>{props.description}</p>
                  <div className="counter">
                    <button id='negative' onClick={subNumber} className={blank} >-</button>
                    <span className={blockBlock2} ><span className={number}>{number1}</span><span className={cart} onClick={unblock}>Add to Cart</span></span>
                    <button id="positive" className={blank} onclick={addNumber} >+</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default PizzaMenu