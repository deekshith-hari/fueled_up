import React, { useEffect, useState } from "react";
import Item from "../components/common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/common/MainImage";
import { getCarts } from "../reducks/carts/selectors";

export default function Home() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);
  const carts = getCarts(selector);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
      // return selected_count;
    }
    console.log("test");

    return (
      <li>
        <Item key={item.id} item={item} selected_count={selected_count} />
      </li>
    );
  };

  return (
    <>
      <MainImage />
      <section class="main">
        <ul class="items">{items && items.map((item) => showItem(item))}</ul>
      </section>
    </>
  );
}
