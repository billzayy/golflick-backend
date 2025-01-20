import axios from "axios"
import { api } from "../../utils/constraints"
import { notification } from "antd"

const deleteProduct = async (id: string) => { 
    try {
        const response = await axios.delete(`${api}/admin/product/delete?productId=${id}`)

        if (response.status == 200) {
            window.location.reload()
        } else {
            notification.error({
                message: "Error",
                description: response.data.message || "Error Delete product",
                showProgress: true,
                pauseOnHover: true
            })
        }
    } catch (error) {
        console.error(error)
    }
}

export default deleteProduct