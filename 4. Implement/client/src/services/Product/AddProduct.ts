import axios from "axios"
import { api } from "../../utils/constraints"
import { IDetailProduct } from "../../types/IProduct"
import { notification } from "antd"

const addProduct = async (input: IDetailProduct) => { 
    try {
        console.log(input)
        const response = await axios.post(`${api}/admin/product/add`, input)

        if (response.status == 201) { 
            window.location.reload()
            return response.status
        } else {
            notification.error({
                message: "Error",
                description: response.data.message || "Add Product Failed.",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
        console.error(error)
    }
}

export default addProduct