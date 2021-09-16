import React from "react";
import ImageCartLogo from "../../assets/img/cart-icon.svg";

export default function Header() {
  return (
    <header>
      <div class="icon-text">
        <p class="fuled">FUELED</p>
        <p class="up">UP</p>
      </div>
      <div class="header-links">
        <p class="sign-in-link">Sign In</p>
        <p class="img">
          <img src={ImageCartLogo} alt="" />
        </p>
      </div>
    </header>
  );
}
