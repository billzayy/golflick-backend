import { useState } from "react"
import handleSignUp from "../../services/Signup"
import Logo from "../../assets/Logo.png"
import { NavigateFunction } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"

interface input {
    navigator: NavigateFunction,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUp: React.FC<input> = ({navigator, setIsActive}) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="signUp w-1/2 p-8">
            <div className="logo flex items-center mb-8">
                <img src={Logo} alt="logo" className="size-8"/>
                <p className="text-green ml-2 text-3xl font-bold">Sign Up</p>
            </div>
            <div className="title mb-5">
                <p className="text-gray-500">Sign up to enjoy features of Golflick</p>
            </div>
            <div className="inputBoxes">
                <div className="firstName mb-2">
                    <p>Fist Name</p>
                    <input
                        type="text"
                        className="border border-inputBox w-full p-2 mt-1 rounded-lg font-light"
                        value={firstName}
                        onChange={(event) => {setFirstName(event.target.value)}}
                        placeholder="Type here..."
                    /> 
                </div>
                <div className="lastName mb-2">
                    <p>Last Name</p>
                    <input
                        type="text"
                        className="border border-inputBox w-full p-2 mt-1 rounded-lg font-light"
                        value={lastName}
                        onChange={(event) => {setLastName(event.target.value)}}
                        placeholder="Type here..."
                    /> 
                </div>
                <div className="email mb-2">
                    <p>Email</p>
                    <input
                        type="text"
                        className="border border-inputBox w-full p-2 mt-1 rounded-lg font-light"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        placeholder="Type here..."
                    /> 
                </div>
                <div className="password mb-2 relative z-10">
                    <p>Password</p>
                    <input
                        type={showPassword? 'text':'password'}
                        className="border border-inputBox w-full p-2 mt-1 rounded-lg font-light"
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                        placeholder="Type here..."
                    /> 
                    <button type="button" onClick={() => {setShowPassword(!showPassword);}} className="absolute right-3 top-9">
                        { !showPassword? <FontAwesomeIcon icon={faEyeSlash} className="opacity-20"/> : <FontAwesomeIcon icon={faEye} className="opacity-100"/>}
                    </button>
                </div>
            </div>
            <button onClick={() => {handleSignUp(firstName, lastName, email, password, navigator)}} className="w-full mt-5 mb-3 border border-white rounded-lg text-white bg-green p-2 hover:cursor-pointer hover:opacity-60 hover:border-green">Sign Up</button>
            <div className="already flex mt-1 justify-center">
                <p className="mr-2">Already have account?</p>
                <p onClick={() => { setIsActive(false)} } className="text-blue-500 hover:cursor-pointer">LogIn</p>
            </div>
        </div>
    )
}

export default SignUp