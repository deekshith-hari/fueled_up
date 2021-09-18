import React from "react";
import ImgItem1 from "../../assets/img/item1.png";

export default function Item() {
  return (
    <>
      <div class="item-img">
        <img src={ImgItem1} alt="" />
      </div>
      <div class="item-info">
        <div class="info1">
          <p class="item-name">Yellow Sea moss</p>
          <p class="item-description">Rare wildcrafted yellow sea mosss</p>
        </div>
        <div class="info2">
          <p class="price">$380</p>
          <button class="add-btn">Add +</button>
        </div>
      </div>
    </>
  );
}
