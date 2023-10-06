import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let login = () => {
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Link
        onClick={login}
        to="/portal"
        className="btn btn-primary"
      >
        Login
      </Link>
    </div>
  );
}

export default Login;
