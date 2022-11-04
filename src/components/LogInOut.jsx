import React from "react";
import { loginUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

const LogInOut = () => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target[0].value;
      const password = event.target[1].value;
      const token = await loginUser(username, password);

      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      navigate("/posts")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="box">
      <h2>Log in</h2>
      <form className="dataInput" onSubmit={handleSubmit}>
        <div className="userBox">
          <label className="username">Username</label>
          <input className="userInput" type="text" required />
        </div>
        <div className="passBox">
          <label className="password">Password</label>
          <input className="userInput" type="password" />
        </div>
        <button className="submitBtn" type="submit">
          Login
        </button>
      </form>
      <Link className="signBtn" to={"/register"}>
        or Sign up
      </Link>
    </div>
  );
};

export default LogInOut;
