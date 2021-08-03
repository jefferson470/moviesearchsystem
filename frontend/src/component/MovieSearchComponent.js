import React, { useEffect, useState } from "react";
import { isAuth, signup } from "../action/authAcation";
import { withRouter } from "react-router-dom";

const MovieSearchComponent = ({ history }) => {

  const showLaoding = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  
  return (
    <div className="container">
      {showLaoding()}
      {showError()}
      {showMessage()}
      {showForm && signupForm()}
    </div>
  );
};

export default withRouter(MovieSearchComponent);
