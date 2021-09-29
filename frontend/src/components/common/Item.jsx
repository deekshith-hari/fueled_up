import React from "react";
import { useDispatch } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";

export default function Item({ item, selected_count }) {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item.id, selected_count));
  };

  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
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
          {selected_count == 0 ? (
            <button class="add-btn" onClick={clickAddCart}>
              Add +
            </button>
          ) : (
            <div class="add-btn">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{selected_count} </span>
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
