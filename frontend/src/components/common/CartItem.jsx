import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({ presentcart }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickPlusCart = () => {
    dispatch(increaseCart(presentcart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(presentcart.id));
  };

  return (
    <>
      <div class="item-img">
        <img
          src={"https://res.cloudinary.com/dop22f4ta/" + presentcart.item.image}
          alt=""
        />
      </div>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">{presentcart.item.name}</p>
          <p class="item-description">{presentcart.item.description}</p>
        </div>
        <div class="info2">
          <p class="price">${presentcart.item.price}</p>
          <div class="add-btn">
            <span class="minus" onClick={clickMinusCart}>
              －
            </span>
            <span class="count">{presentcart.quantity} </span>
            <span class="plus" onClick={clickPlusCart}>
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
