import React from "react";
import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <>
      <p>404</p>
      <p>NOt found</p>
      <Link to="/">HOME</Link>
    </>
  );
};

export default NotFound;
