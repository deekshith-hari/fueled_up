import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({ cart, presentcarts }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickPlusCart = () => {
    dispatch(increaseCart(presentcarts.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(presentcarts.id));
  };

  return (
    <>
      <div class="item-img">
        <img
          src={"https://res.cloudinary.com/dop22f4ta/" + cart.image}
          alt=""
        />
      </div>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">{cart.name}</p>
          <p class="item-description">{cart.description}</p>
        </div>
        <div class="info2">
          <p class="price">${cart.price}</p>
          <div class="add-btn">
            <span class="minus" onClick={clickMinusCart}>
              －
            </span>
            <span class="count">{presentcarts.quantity} </span>
            <span class="plus" onClick={clickPlusCart}>
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
