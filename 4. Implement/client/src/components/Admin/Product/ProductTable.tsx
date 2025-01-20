import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IProduct } from "../../../types/IProduct"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import deleteProduct from "../../../services/Product/DeleteProduct"

const ProductTable: React.FC<{ data: IProduct[] }> = ({ data }) => { 
    const header = ["No.","Image", "Name", "Price", "Button"]

    return (
        <div className="m-5">
            <div className="text-white">
                <table className="w-full">
                    <thead>
                        <tr className="">
                            {header.map((item, index) => (
                                <th key={index} className="border border-gray-400 last:w-1">{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr className="odd:bg-statisticBg even:bg-gray-600" key={index}>
                                <td className="border border-gray-400 p-2 text-center w-1/12">{index+1}</td>
                                <td className="border border-gray-400 p-2 text-center">{item.picture.url == "" ? "null" : item.picture.url}</td>
                                <td className="border border-gray-400 p-2">{item.name}</td>
                                <td className="border border-gray-400 p-2 text-center w-1/12">${item.price}</td>
                                <td className="border border-gray-400 p-2 flex justify-between">
                                    <button className="bg-gray-800 border border-gray-600 text-white mx-1 px-4 py-1 rounded-lg hover:bg-gray-500">
                                        <FontAwesomeIcon icon={faPenToSquare}/>
                                    </button>
                                    <button
                                        onClick={() =>{deleteProduct(item.id)}}
                                        className="bg-gray-800 border border-gray-600 text-red-500 mx-1 px-4 py-1 rounded-lg hover:bg-gray-500">
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductTable