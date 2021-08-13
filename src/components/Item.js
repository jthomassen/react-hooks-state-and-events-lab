import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false)
  
  const cartClass = isInCart? "in-cart" : ""

  function handleCart() {
    setInCart(!isInCart)
  }
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{isInCart? "Added to Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
