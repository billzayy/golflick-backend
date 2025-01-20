import axios from "axios"
import { api } from "../../utils/constraints"
import { notification } from "antd"

export const getType = async () => { 
    try {
        const response = await axios.get(`${api}/admin/types`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Type Errors",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
       console.error(error) 
    }
}

export const getTypeById = async (id: number) => { 
    try {
        const response = await axios.get(`${api}/admin/type?id=${id}`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Type Errors",
                showProgress: true,
                pauseOnHover: true
            })
        } 
    } catch (error) {
        console.error(error)
    }
}