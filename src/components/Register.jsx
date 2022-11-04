import React from "react";
import { RegisterUser } from "../api";
import { useNavigate, Link } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();

  async function handleRegister(e) {
    try {
      e.preventDefault();

      const username = e.target[0].value;
      const password = e.target[1].value;
      const confirmPassword = e.target[2].value;
      const name = e.target[3].value;
      const location = e.target[4].value;

      if (password === confirmPassword) {
        const token = await RegisterUser(username, password, name, location);
        console.log(token, "this is token");
        localStorage.removeItem("token");
        localStorage.setItem("token", token);
      } else {
        alert("Passwords do not match");
      }
    } catch (error) {}
  }

  return (
    <div className="box">
      <h2>Register</h2>
      <form className="dataInput" onSubmit={handleRegister}>
        <div className="userBox">
          <label id="userData">Username: </label>
          <input id="userInput" type="text" required />
        </div>
        <div className="passBox">
          <label id="userData">Password: </label>
          <input id="userInput" type="password" required />
        </div>
        <div className="confirmBox">
          <label id="userData">Confirm Password: </label>
          <input id="userInput" type="password" required />
        </div>
        <div className="nameBox">
          <label id="userData">Name:</label>
          <input id="userInput" type="text" required />
        </div>
        <div className="locationBox">
          <label id="userData">Location: </label>
          <input id="userInput" type="text" />
        </div>
        <button className="submitBtn" type="submit">
          Register
        </button>
      </form>
      <Link className="signBtn" to={"/login"}>
        or Sign in
      </Link>
    </div>
  );
};

export default Register;
