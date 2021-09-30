import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function Item({ item }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);

  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);

  const clickAddCart = () => {
    dispatch(addCart(item));
  };

  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
  };

  return (
    <>
      <div class="item-img">
        <img src={item.image} alt="" />
      </div>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">{item.name}</p>
          <p class="item-description">{item.description}</p>
        </div>
        <div class="info2">
          <p class="price">{item.price}</p>
          {particularCart && particularCart.quantity > 0 ? (
            <div class="add-btn">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{particularCart.quantity} </span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          ) : (
            <button class="add-btn" onClick={clickAddCart}>
              Add +
            </button>
          )}
        </div>
      </div>
    </>
  );
}
