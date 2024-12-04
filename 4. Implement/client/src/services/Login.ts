import Cookies  from 'js-cookie';
import axios from "axios"
import { NavigateFunction } from "react-router-dom";
import { api } from "../utils/constraints";
import { notification } from "antd";

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
        if (email == "") {alert("Email must not empty"); return }
        if (password == "") { alert("Password must not empty"); return}

        const response = await axios.post<LoginResponse>(`${api}/auth/login`, {
            email, password, 
        }, { withCredentials: true });

        if (response.status == 200) {
            const token = Cookies.get('jwt')

            if (response.data.data.role == 2) {
                setToken(token, '/admin', useNavigate) 
            } else { 
                setToken(token, "/", useNavigate)
            }
        } else {
            notification.error({
                message: 'Error',
                description: response.data.message || 'Login failed.',
            });
        }
    } catch (error) {
        notification.error({
            message: 'Error',
            description:"An error occurred during login"
        })
    }
}

const setToken = (token:string | undefined, path:string,useNavigate: NavigateFunction) => { 
    if (token) {
        localStorage.setItem('token', token)
        useNavigate(path)
    }
    else { 
        alert("Token not found")
    }
}

export default handleLogin