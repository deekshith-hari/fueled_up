import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./Router";
import "./assets/style.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { getUser } from "./reducks/user/selectors";
import { fetchUserFromLocalStorage } from "./reducks/user/operations";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
    console.log(user);
  }, []);
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
