import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler for toggling cart state
  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;