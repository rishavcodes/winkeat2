import React from 'react'
import "./Pizzamenu.css"

const PizzaMenu = (props) => {
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
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default PizzaMenu