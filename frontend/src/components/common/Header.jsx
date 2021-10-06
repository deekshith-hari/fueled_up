import React from "react";
import ImageCartLogo from "../../assets/img/cart-icon.svg";
import { signOut } from "../../reducks/user/operations";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const signOutButton = () => {
    dispatch(signOut());
  };

  return (
    <header>
      <div class="icon-text">
        <p class="fuled">FUELED</p>
        <p class="up">UP</p>
      </div>
      <div class="header-links">
        <p class="sign-in-link">
          <a href="/signin">Sign In</a>
          <a href="/signin" onClick={signOutButton}>
            Logout
          </a>
        </p>
        <p class="img">
          <img src={ImageCartLogo} alt="" />
        </p>
      </div>
    </header>
  );
}
