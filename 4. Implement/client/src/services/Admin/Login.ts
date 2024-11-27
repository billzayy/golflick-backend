import axios from "axios"
import { NavigateFunction } from "react-router-dom";

const api = `http://localhost:3000/api/v1`

const handleLogin = async (email: string, password: string, useNavigate: NavigateFunction) => { 

    try {
        const response = await axios.post(`${api}/auth/login`, {
            email, password, 
        }, {withCredentials: true});

        if (response.status == 200) { 
            useNavigate("/")
        }

    } catch (error) {
        console.log(error)
    }
}

export default handleLogin