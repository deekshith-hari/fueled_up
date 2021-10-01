import React, { useEffect, useState } from "react";
import MainImage from "../components/common/MainImage";
import CartItem from "../components/common/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { getItems } from "../reducks/items/selectors";

export default function Cart() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);

  useEffect(() => {
    if (user.token != "") {
      dispatch(fetchCarts(user.token));
      console.log("test");
      console.log(carts);
    }
  }, [user]);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
  }, []);

  return (
    <>
      <MainImage />
      <section class="main">
        <p class="items-text">Your items</p>
        <ul>
          {
            (carts,
            items &&
              carts.map((cart) => (
                <li>
                  <CartItem cart={cart.item} key={cart.item.id} />
                </li>
              )))
          }
        </ul>
      </section>
    </>
  );
}
