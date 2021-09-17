import React from "react";
import ImgBackgroundRun from "../assets/img/background-running.png";
import ImgItem1 from "../assets/img/item1.png";
import ImgItem2 from "../assets/img/item2.png";

export default function Cart() {
  return (
    <>
      <section class="background-section">
        <div class="inner-div">
          <p class="high">
            {" "}
            HIGH <span>PERFORMANCE</span> SPORTS{" "}
          </p>
          <p class="herbal">HERBAL PROTINE</p>
        </div>
        <div class="bg-img">
          <img src={ImgBackgroundRun} alt="" />
        </div>
      </section>
      <section class="main">
        <p class="items-text">Your items</p>
        <ul>
          <li>
            <div class="item-img">
              <img src={ImgItem1} alt="" />
            </div>
            <div class="item-info">
              <div class="info1">
                <p class="item-name">Yellow Sea moss</p>
                <p class="item-description">
                  Rare wildcrafted yellow sea mosss
                </p>
              </div>
              <div class="info2">
                <p class="price">$380</p>
                <button class="add-btn">Add +</button>
              </div>
            </div>
          </li>
          <li>
            <div class="item-img">
              <img src={ImgItem2} alt="" />
            </div>
            <div class="item-info">
              <div class="info1">
                <p class="item-name">Purple Sea moss</p>
                <p class="item-description">
                  Rare wildcrafted yellow sea mosss
                </p>
              </div>
              <div class="info2">
                <p class="price">$380</p>
                <button class="add-btn">Add +</button>
              </div>
            </div>
          </li>
          <li>
            <div class="item-img">
              <img src={ImgItem2} alt="" />
            </div>
            <div class="item-info">
              <div class="info1">
                <p class="item-name">Purple Sea moss</p>
                <p class="item-description">
                  Rare wildcrafted yellow sea mosss
                </p>
              </div>
              <div class="info2">
                <p class="price">$380</p>
                <button class="add-btn">Add +</button>
              </div>
            </div>
          </li>
          <li>
            <div class="item-img">
              <img src={ImgItem2} alt="" />
            </div>
            <div class="item-info">
              <div class="info1">
                <p class="item-name">Purple Sea moss</p>
                <p class="item-description">
                  Rare wildcrafted yellow sea mosss
                </p>
              </div>
              <div class="info2">
                <p class="price">$380</p>
                <button class="add-btn">Add +</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
