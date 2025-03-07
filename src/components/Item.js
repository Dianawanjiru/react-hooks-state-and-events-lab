import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState()

  const addItemToCart = ()=>{
    setCart(true);
    
  }

  
  return (
    <li className={inCart? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick ={addItemToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
