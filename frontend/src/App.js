import React from "react";
import Router from "./Router";
import "./assets/style.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
