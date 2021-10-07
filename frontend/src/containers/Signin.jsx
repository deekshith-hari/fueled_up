import React from "react";
import Home from "./Home";
import { signIn } from "../reducks/user/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { push } from "connected-react-router";

function Signin() {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const submitButton = (event) => {
    event.preventDefault();
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Home />
      <section class="sign-up">
        <div class="form-area">
          <div class="signup-form">
            <span onClick={closeButton}>
              <p class="close-btn">x</p>
            </span>
            <p class="fuled">
              FUELED <span class="up"> UP </span>
            </p>
            <p class="text-signup">SIGN IN</p>
            <form onSubmit={submitButton}>
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
                name="signin"
                value="SIGN IN"
              />
            </form>
            <p class="signin-link">
              Not a Member? <a href="/signup">Sign Up.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
