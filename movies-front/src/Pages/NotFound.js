import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <h2 className="mx-auto mb-3">404 Page not found</h2>
      <Link className="mb-4 text-uppercase" style={{ color: "grey" }} to="/">
        GO TO HOME PAGE
      </Link>
    </Fragment>
  );
};

export default NotFound;
