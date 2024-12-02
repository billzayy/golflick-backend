import { NavigateFunction } from 'react-router-dom';
import axios from "axios";
import { api } from "../utils/constraints";
import handleLogin from './Login';

const handleSignUp = async (firstName: string, lastName: string, email: string, password: string, useNavigate: NavigateFunction) => {
    try {
        if (firstName == "") { alert("First Name must not empty"); return}
        if (lastName == "") { alert("Last Name must not empty"); return}
        if (email == "") { alert("Email must not empty"); return}
        if (password == "") { alert("Password must not empty"); return}

        const response = await axios.post(`${api}/auth/sign-up`, {
            firstName, lastName, email, password
        }, {withCredentials: true});

        if (response.status == 201) {
            alert("Sign In Successful")
            handleLogin(email, password, useNavigate)
        } else { 
            alert(response.data.data)
        }
    } catch (error) {
        alert(error)
    }
}

export default handleSignUp