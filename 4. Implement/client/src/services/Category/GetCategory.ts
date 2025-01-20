import axios from "axios"
import { api } from "../../utils/constraints"
import { notification } from 'antd';

const getCategory = async () => { 
    try {
        const response = await axios.get(`${api}/admin/categories`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Category Error",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
       console.error(error) 
    }
}

export default getCategory