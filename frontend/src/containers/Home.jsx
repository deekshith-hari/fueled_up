import React, { useEffect, useState } from "react";
import Item from "../components/common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/common/MainImage";
import { fetchCarts } from "../reducks/carts/operations";

const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
    }
  }, []);

  return (
    <>
      <MainImage />
      <section class="main">
        <ul class="items">
          {items &&
            items.map((item) => (
              <li>
                <Item key={item.id} item={item} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
