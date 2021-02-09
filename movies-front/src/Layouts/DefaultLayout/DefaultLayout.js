import "./DefaultLayout.scss";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const DefaultLayout = (props) => {
  return (
    <div className="default__layout">
      <Header />
      <div className="default__layout-content fade-in">{props.children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
