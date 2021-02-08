import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div className="default__layout-header d-flex justify-content-center justify-content-md-start">
      <h1 onClick={() => history.push("/")}>Netflix clone</h1>
    </div>
  );
};

export default Header;
