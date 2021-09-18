import React from "react";
import ImgBackgroundRun from "../assets/img/background-running.png";
import Item from "../components/common/Item";

export default function Home() {
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
        <ul>
          <li>
            <Item />
          </li>
        </ul>
      </section>
    </>
  );
}
