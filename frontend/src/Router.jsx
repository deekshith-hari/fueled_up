import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Checkout from "./containers/Checkout";
import Cart from "./containers/Cart";
import Orderconfirm from "./containers/Orderconfirm";
import { getUser } from "./reducks/user/selectors";
import { fetchUserFromLocalStorage } from "./reducks/user/operations";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signin"} component={Signin} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/checkout"} component={Checkout} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/orderconfirmation"} component={Orderconfirm} />
      </Switch>
    </>
  );
};
export default Router;
