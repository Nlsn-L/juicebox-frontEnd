import React from "react";
import { RegisterUser } from "../api";

const Register = (e) => {
    e.preventDefault()

    const username = e.target[0].value
    const password = e.target[1].value
    const confirmPassword = e.target[2].value
    const name = e.target[3].value
    const location = e.target[4].value

    if (password === confirmPassword){
        const registeredUser = await RegisterUser(username,password,name,location)
        token = registeredUser.token
        localStorage.removeItem(token)
        localStorage.setItem('token',token)
    }else{
        alert('Passwords do not match')
    }


return (
    <h1>Register</h1>
)


}


export default Register