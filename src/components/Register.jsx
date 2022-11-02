import React from "react";
import { RegisterUser } from "../api";
import { useNavigate } from "react-router-dom";

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
          const token = await RegisterUser(
            username,
            password,
            name,
            location
          );
          console.log(token, "this is token")
          localStorage.removeItem("token");
          localStorage.setItem("token", token);
        } else {
          alert("Passwords do not match");
        }
        
    } catch (error) {
        
    }
    

  }

  return (
    <div className="box">
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" required />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" required />
        <label htmlFor="Confirm password">Confirm Password: </label>
        <input id="Confirm password" type="password" required />
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required />
        <label htmlFor="location">Location: </label>
        <input id="location" type="text" />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Register;
