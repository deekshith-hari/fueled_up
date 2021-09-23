import React, { useEffect, useState } from "react";
import Item from "../components/common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/common/MainImage";

export default function Home() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      <MainImage />
      <section class="main">
        <ul>
          {items &&
            items.map((item) => (
              <li>
                <Item item={item} key={item.id} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
