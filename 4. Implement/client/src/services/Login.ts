import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { api } from "../utils/constraints";

interface ApiResponse { 
    statusCode: number,
    data: string,
    message: string
}

const handleLogin = async (email: string, password: string, useNavigate: NavigateFunction) => { 
    try {
        if (email == "") { alert("Email must not empty"); return }
        if (password == "") { alert("Password must not empty"); return}

        const response = await axios.post<ApiResponse>(`${api}/auth/login`, {
            email, password, 
        }, { withCredentials: true });
        
        console.log(document.cookie)

        if (response.status == 200) {
            // alert("Login Successful")
            useNavigate("/")
        } else {
            alert(response.data.data)
        }
    } catch (error) {
        alert(error)
    }
}

export default handleLogin