import React from "react";

export default function CartItem({ cart }) {
  // console.log(cart.name);
  return (
    <div>
      <div class="item-img">
        <img src={cart.image} alt="" />
      </div>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">{cart.name}</p>
          <p class="item-description">{cart.description}</p>
        </div>
        <div class="info2">
          <p class="price">${cart.price}</p>
          <button class="add-btn">Add +</button>
        </div>
      </div>
    </div>
  );
}
