import React from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";

const LogInOut = () => {
  const navigate = useNavigate();

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const username = event.target[0].value;
            const password = event.target[1].value;
            const token = await loginUser(username,password)
            
            localStorage.removeItem("token");
            localStorage.setItem("token", token);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input id="username" type="text" required />
        <label>Password:</label>
        <input id="password" type="text" />
        <button className="submitBtn" type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default LogInOut;
