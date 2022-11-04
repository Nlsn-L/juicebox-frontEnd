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
        // navigate("/login")
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
          <label className="userData">Username: </label>
          <input className="userInput" type="text" required />
        </div>
        <div className="passBox">
          <label className="userData">Password: </label>
          <input className="userInput" type="password" required />
        </div>
        <div className="confirmBox">
          <label className="userData">Confirm Password: </label>
          <input className="userInput" type="password" required />
        </div>
        <div className="nameBox">
          <label className="userData">Name:</label>
          <input className="userInput" type="text" required />
        </div>
        <div className="locationBox">
          <label className="userData">Location: </label>
          <input className="userInput" type="text" />
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
