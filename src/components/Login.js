import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { login, register } from "../actions/AuthAction";
import { AuthContext } from "../context/authContext";
import "../styles/Login.css"



const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(""));
    navigate("/home");
  };

  const handleRegistro = () => {
    dispatch(register(""));
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="login-info-container">
        <h1 className="title">Inicio de Sesion</h1>
        <form className="inputs-container">
          <input className="input" type="email" placeholder="Correo" required />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            required
          />
          <button className="btn" onClick={handleLogin}>
            Iniciar Sesion
          </button>
          
          <p>
            ¿No tienes Cuenta?
            <span className="span" onClick={handleRegistro}>
              {" "}
              Registrate
            </span>
          </p>

        </form>
      </div>
      <img
        className="image-container"
        src="https://res.cloudinary.com/vrilli/image/upload/v1647741338/580b57fcd9996e24bc43c319_rmg1be.png"
        alt=""
      />
    </div>
  );
};

export default Login;
