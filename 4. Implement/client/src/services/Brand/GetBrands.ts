import axios from "axios"
import { api } from "../../utils/constraints"
import { notification } from "antd"

export const getBrands = async () => { 
    try {
        const response = await axios.get(`${api}/admin/brands`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Brand Errors",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
       console.error(error) 
    }
}

export const getBrandById = async (id: number) => { 
   try {
        const response = await axios.get(`${api}/admin/brand?id=${id}`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Brand Errors",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
       console.error(error) 
    } 
}