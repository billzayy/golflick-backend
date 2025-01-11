import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IProduct } from "../../types/IProduct"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"

const ProductTable: React.FC<{ data: IProduct[] }> = ({ data }) => { 
    const header = ["Image", "Name", "Price", "Button"]

    return (
        <div className="m-5">
            <div className="text-white">
                <table className="w-full">
                    <tr className="">
                        {header.map((item, index) => (
                            <th key={index} className="border border-gray-400 last:w-1">{item}</th>
                        ))}
                    </tr>
                    {data.map((item, index) => (
                        <tr className="odd:bg-statisticBg even:bg-gray-600" key={index}>
                            <td className="border border-gray-400 p-2">{item.picture.url}</td>
                            <td className="border border-gray-400 p-2">{item.name}</td>
                            <td className="border border-gray-400 p-2">{item.price}</td>
                            <td className="border border-gray-400 p-2 flex justify-between">
                                <button className="bg-gray-800 border border-gray-600 text-white mx-1 px-4 py-1 rounded-lg hover:bg-gray-500">
                                    <FontAwesomeIcon icon={faPenToSquare}/>
                                </button>
                                <button className="bg-gray-800 border border-gray-600 text-red-500 mx-1 px-4 py-1 rounded-lg hover:bg-gray-500">
                                    <FontAwesomeIcon icon={faTrashCan}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default ProductTable