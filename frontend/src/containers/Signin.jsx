import React from "react";
import Home from "./Home";

function Signin() {
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
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input
                class="submit-btn"
                type="submit"
                name="signup"
                value="SIGN UP"
              />
            </form>
            <p class="signin-link">
              Already a Member? <a href="/">Sign In.</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
