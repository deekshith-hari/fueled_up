import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/cart-icon.svg";
import { signOut } from "../../reducks/user/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <header>
      <a href="/">
        <div class="icon-text">
          <p class="fuled">FUELED</p>
          <p class="up">UP</p>
        </div>
      </a>
      <div class="header-links">
        <p class="sign-in-link">
          {checkUser ? (
            <span onClick={signOutButton}>Logout</span>
          ) : (
            <a href="/signin">Sign In</a>
          )}
        </p>
        <p class="img">
          <a href="/cart">
            <img src={ImageCartLogo} alt="" />
          </a>
        </p>
      </div>
    </header>
  );
}
