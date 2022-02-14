import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="container text-center">
      <h1 className=" my-3">This page is not found</h1>
      <Link className="btn btn-lg btn-primary" to="/">
        Go back to home
      </Link>
    </div>
  );
}

export default Error;
