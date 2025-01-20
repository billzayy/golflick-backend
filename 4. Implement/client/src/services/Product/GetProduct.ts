import axios from "axios"
import { api } from "../../utils/constraints"
import { notification } from "antd"

const getProduct = async (offset: number, limit: number) => { 
    try {
        const response = await axios.get(`${api}/products?offset=${offset}&limit=${limit}`)

        if (response.status == 200) {
            return response.data.data
        } else { 
            notification.error({
                message: "Error",
                description: response.data.message || "Get Product Failed.",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
        // alert(error)
        console.error(error)
    }
}

export default getProduct