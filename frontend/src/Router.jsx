import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Checkout from "./containers/Checkout";
import Cart from "./containers/Cart";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/checkout"} component={Checkout} />
        <Route exact path={"/cart"} component={Cart} />
      </Switch>
    </>
  );
};
export default Router;
