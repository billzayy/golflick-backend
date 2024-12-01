import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { api } from "../../utils/constraints";

const handleLogin = async (email: string, password: string, useNavigate: NavigateFunction) => { 
    try {
        const response = await axios.post(`${api}/auth/login`, {
            email, password, 
        }, {withCredentials: true});

        if (response.status == 200) {
            alert("Login Successful")
            useNavigate("/")
        } else { 
            alert(response.data)
        }
    } catch (error) {
        alert(error)
    }
}

export default handleLogin