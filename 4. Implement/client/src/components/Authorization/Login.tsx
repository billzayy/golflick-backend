import { useState } from "react";
import handleLogin from "../../services/Login";
import Logo from "../../assets/Logo.png"
import { NavigateFunction } from "react-router-dom";

interface Input { 
    navigate: NavigateFunction,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

interface otherSocial { 
    name: string,
    link?: string
}

const socialMedia: otherSocial[] = [
    {name:"Facebook", link:""},
    {name:"LinkedIn", link:""},
    {name:"Google", link:""}
]

const LoginComponent: React.FC<Input> = ({navigate, setIsActive}) => { 
    const [emailValue, setEmailValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    return (
        <div className="content w-1/2 p-8 pl-16 pr-12">
            <div className="flex logo pb-16 items-center">
                <img src={Logo} alt="logo" className="size-8"/>
                <p className="text-green ml-2 text-3xl font-bold">Login</p>
            </div>
            <div className="welcome">
                <p className="text-login font-extrabold text-xl pr-20">Artificial Intelligence giving you travel recommendations</p>
                <p className="text-login text-sm font-light pt-3">Welcome Back, Please login to your account</p>
            </div>
            <div className="emailBox pt-4 text-login font-extrabold">
                <p>Email</p>
                <input
                    type="text"
                    className="border border-inputBox w-full p-2 mt-2 rounded-lg font-light"
                    value={emailValue}
                    onChange={(event) => {setEmailValue(event.target.value)}}
                    placeholder="Type here..."
                />
            </div>
            <div className="passwordBox pt-4 text-login font-extrabold">
            <p>Password</p>
                <input
                    type="text"
                    className="border border-inputBox w-full p-2 mt-2 rounded-lg font-light "
                    value={passValue}
                    onChange={(event) => {setPassValue(event.target.value)}}
                    placeholder="Type here..."
                /> 
            </div>
            <div className="option flex pt-4 justify-between text-sm">
                <div className="text-login flex items-center">
                    <input type="checkbox" name="" className="mr-2 hover:cursor-pointer md:accent-green" />
                    <p>Remember me</p>
                </div>
                <div className="text-login underline hover:cursor-pointer active:text-red-500">Forgot password?</div>
            </div>
            <div className="buttons flex pt-4">
                <button onClick={() => {handleLogin(emailValue, passValue, navigate)}} className={`w-screen border border-white rounded-lg text-white bg-green p-2 hover:cursor-pointer hover:bg-white hover:text-green hover:border-green transition ease-linear delay-75`}>Login</button>
                <button onClick={() => {setIsActive(true)}} className="w-screen border border-green text-green rounded-lg ml-4 p-2 hover:cursor-pointer hover:bg-green hover:text-white transition ease-linear delay-75">Sign Up</button>
            </div>
            <div className="other flex mt-12 text-sm text-green">
                <p className="pl-0 px-2">Or, login with</p>
                {socialMedia.map((item, index) => ( 
                    <OtherLogin key={index} name={item.name} />
                ))}
            </div>
        </div>
    )
}

const OtherLogin: React.FC<otherSocial> = ({name}) => { 
    return (
        <p className="px-2 text-login font-bold hover:cursor-pointer">{name}</p>
    )
}

export default LoginComponent