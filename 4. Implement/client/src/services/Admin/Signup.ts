import { NavigateFunction } from 'react-router-dom';
import axios from "axios";
import { api } from "../../utils/constraints";
import handleLogin from './Login';

const handleSignUp = async (firstName: string, lastName: string, email: string, password: string, useNavigate: NavigateFunction) => {
    try {
        const response = await axios.post(`${api}/auth/sign-up`, {
            firstName, lastName, email, password
        }, {withCredentials: true});

        if (response.status == 200) {
            handleLogin(email, password, useNavigate)
        } else { 
            alert(response.data)
        }
    } catch (error) {
        alert(error)
    }
}

export default handleSignUp