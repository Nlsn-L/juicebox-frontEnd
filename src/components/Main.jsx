import React from "react";
import {Navbar, Register} from "./";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom"
import LogInOut from "./LogInOut";


const Main = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar/>}>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<LogInOut/>}/>
            </Route>
        )
    )

    return (
        <div id='Main'>
        {/* <Navbar /> 
        <br/>
        <Register /> */}
        <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default Main