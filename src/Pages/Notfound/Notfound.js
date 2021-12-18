import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../image/404.png";
const Notfound = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="login-from text-center login-from-child">
        <img src={img} alt="avtor" />
        <br />
        <button onClick={backPage} className="btn btn-primary">
          <i className="fas fa-arrow-circle-left"></i> Back To Home
        </button>
      </div>
    </>
  );
};

export default Notfound;
