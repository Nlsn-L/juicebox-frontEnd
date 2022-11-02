import React from "react";
import { RegisterUser } from "../api";

const Register = (props) => {
    

    async function handleRegister(e){
     e.preventDefault()

    const username = e.target[0].value
    const password = e.target[1].value
    const confirmPassword = e.target[2].value
    const name = e.target[3].value
    const location = e.target[4].value

    if (password === confirmPassword){
        const registeredUser = await RegisterUser(username,password,name,location)
        const token = registeredUser.token
        console.log(token)
        localStorage.removeItem(token)
        localStorage.setItem('token',token)
    }else{
        alert('Passwords do not match')
    }
    }

return (
    <div className="box">
    <form onSubmit={handleRegister}>
        <label htmlFor="username">Username: </label>
        <input id="username" type='text' required />
        <label htmlFor="password">Password: </label>
        <input id="password" type='password' required />
        <label htmlFor="Confirm password">Confirm Password: </label>
        <input id="Confirm password" type='password' required />
        <label htmlFor="name">Name:</label>
        <input id="name" type='text' required />
        <label htmlFor="location">Location: </label>
        <input id="location" type="text" />
        <button type="submit"> Submit </button>
    </form>
</div>
)


}


export default Register