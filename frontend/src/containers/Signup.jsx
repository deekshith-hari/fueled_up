import React from "react";
import Home from "./Home";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "../reducks/user/operations";

export default function Signup() {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = (e) => {
    e.preventDefault();
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Home />
      <section class="sign-up">
        <div class="form-area">
          <div class="signup-form">
            <p class="close-btn">x</p>
            <p class="fuled">
              FUELED <span class="up"> UP </span>
            </p>
            <p class="text-signup">SIGN UP</p>
            <form action="/">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User Name"
                onChange={inputUserName}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={inputEmail}
              />
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                onChange={inputPassword}
              />
              <input
                class="submit-btn"
                type="submit"
                name="signup"
                value="SIGN UP"
                onClick={signUpButton}
              />
            </form>
            <p class="signin-link">
              Already a Member? <a href="/signin">Sign In.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
