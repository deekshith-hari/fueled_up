import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({ cart }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);

  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      setParticularCart(carts[0]);
    } else {
      setParticularCart(null);
    }
  }, [carts, subtotal]);

  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
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
          {particularCart && particularCart.quantity > 0 && (
            <div class="add-btn">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{particularCart.quantity} </span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
