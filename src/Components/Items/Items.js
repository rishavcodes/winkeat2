import React, {useContext, useState} from 'react'
import "./Items.css"
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../Pages/Cart"



const Items = ({id, img, title, price, description, amount}) => {

  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  const removeItem = useContext(CartContext);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
  <>
    <div className="cart-items">
      <div className="cart-card-body">
        <div className="cart-img">
          <img
          style={{width: "100px"}}
            className="cart-img-img"
            src={img}
            alt="not available"
          />
        </div>
        <div className="cart-tiem-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cart-increase-decrease">
          <button onClick={decrement}>
            <RemoveIcon />
          </button>
          <h2>{count}</h2>
          <button onClick={increment}>
            <AddIcon />
          </button>
        </div>
        <div className="item-amount">
          <h3>₹ {price}</h3>
        </div>
        <div className="remove-to-trash">
          <button>
            <DeleteIcon onClick={() => removeItem(id)} />
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Items