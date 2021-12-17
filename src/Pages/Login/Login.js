import React from "react";
import "./Login.css";
import image from "../../image/login.png";
import useFirebase from "../../hook/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSingIn } = useFirebase();
  return (
    <>
      <div className="login-from text-center">
        <div className="login-from-child">
          <div>
            <img src={image} alt="avtor" />
          </div>
          <button
            onClick={() => googleSingIn(location, navigate)}
            className="btn btn-outline-warning"
          >
            <i className="fab fa-google mx-1"></i> Google SingIn
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
