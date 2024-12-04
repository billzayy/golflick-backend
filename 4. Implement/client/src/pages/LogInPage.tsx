import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/Img.png";
import SignUp from "../components/Authorization/SignUp";
import LoginComponent from "../components/Authorization/Login";

const LogIn: React.FC<{}> = ({ }) => { // Create a state to store the input value
    const navigateFunc = useNavigate();
    const [isActive, setIsActiveFunc] = useState(false);

    return (
        <div>
            <div className="login flex justify-center items-center h-screen bg-login z-20">
                <div className="flex login w-login h-4/5 bg-white relative rounded-3xl">
                    <LoginComponent navigate={navigateFunc} setIsActive={setIsActiveFunc}/>
                    <div className={`img transition-all duration-400 ease-in-out ${isActive ? 'left-0 rounded-s-3xl':'left-1/2 rounded-e-3xl'} w-1/2 h-full bg-imgLogin flex justify-center items-center absolute z-30`}>
                        <img src={Icon} alt="img" className="w-9/12"/>
                    </div>
                    <SignUp navigator={navigateFunc} setIsActive={setIsActiveFunc}/>
                </div>
            </div>
        </div>
    )
}

export default LogIn