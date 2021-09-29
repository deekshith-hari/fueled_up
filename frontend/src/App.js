import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import "./assets/style.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { getUser } from "./reducks/user/selectors";
import { fetchUserFromLocalStorage } from "./reducks/user/operations";
import { getSubtotal } from "./reducks/carts/selectors";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const subtotal = getSubtotal(selector);
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
    console.log(user);
    console.log(subtotal);
  }, []);
  return (
    <>
      <Header />
      <Router />
      <Footer price={subtotal} />
    </>
  );
}

export default App;
