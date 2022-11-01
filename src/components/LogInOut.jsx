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
            const registeredUser = await loginUser(username,password)
            const token = registeredUser.token;
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
      </form>
    </div>
  );
};

export default LogInOut;
