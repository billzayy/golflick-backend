import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { api } from "../utils/constraints";

interface LoginResponse { 
    statusCode: number,
    data: DataResponse,
    message: string
}

interface DataResponse {
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
    avatar: string,
    role: number
}

const handleLogin = async (email: string, password: string, useNavigate: NavigateFunction) => { 
    try {
        if (email == "") { alert("Email must not empty"); return }
        if (password == "") { alert("Password must not empty"); return}

        const response = await axios.post<LoginResponse>(`${api}/auth/login`, {
            email, password, 
        }, { withCredentials: true });

        if (response.status == 200) {
            if (response.data.data.role == 2) {
                useNavigate("/admin")
            } else { 
                // alert("Login Successful")
                useNavigate("/")
            }
        } else {
            alert(response.data.data)
        }
    } catch (error) {
        alert(error)
    }
}

export default handleLogin