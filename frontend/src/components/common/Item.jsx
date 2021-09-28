import React from "react";
import ImgItem1 from "../../assets/img/item1.png";

export default function Item({ item }) {
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
          <button class="add-btn">Add +</button>
        </div>
      </div>
    </>
  );
}
