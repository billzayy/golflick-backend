import React from "react";
// import { useNavigate } from "react-router-dom";
import SignUp from "../components/Authorization/SignUp";
// import LoginComponent from "../components/Authorization/Login";

const LogIn: React.FC<{}> = ({ }) => { // Create a state to store the input value
    // const navigateFunc = useNavigate();
    
    return (
        <div className="login flex justify-center items-center h-screen bg-login">
            <div className="flex login w-login h-4/5 bg-white">
                {/* <LoginComponent navigate={navigateFunc}/> */}
                <div className="img w-1/2 bg-imgLogin flex justify-center items-center">
                    <img src="" alt="img" />
                </div>
                <SignUp/>
            </div>
        </div>
    )
}

export default LogIn