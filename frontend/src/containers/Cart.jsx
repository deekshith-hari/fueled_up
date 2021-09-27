import React, { useEffect, useState } from "react";
import MainImage from "../components/common/MainImage";
import CartItem from "../components/common/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/user/selectors";

export default function Cart() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = getCarts(selector);
  const user = getUser(selector);

  useEffect(() => {
    if (user.token != "") {
      dispatch(fetchCarts(user.token));
    }
  }, [user]);

  return (
    <>
      <MainImage />
      <section class="main">
        <p class="items-text">Your items</p>
        <ul>
          <li>
            <CartItem cart={cart} key={cart.id} />
          </li>
        </ul>
      </section>
    </>
  );
}
