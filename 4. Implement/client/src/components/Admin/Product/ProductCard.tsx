import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { IProduct } from "../../../types/IProduct"
import deleteProduct from "../../../services/Product/DeleteProduct"

const ProductCard: React.FC<{item: IProduct}> = ({item}) => { 
    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {setIsHover(true)}
    const handleLeave = () => { setIsHover(false) }

    return (
        <div className="text-white bg-statisticBg w-72 ml-5 mt-4 rounded-b-xl shadow-md border border-productBorder rounded-t-xl">
            <div className="img bg-white w-full h-52 rounded-t-xl text-black">{item.picture.pictureName}</div>
            <div className="info p-5">
                <div className="flex justify-between items-center mt-1">
                    <div className="left">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-blue-400 text-sm font-semibold">${item.price}</p>
                    </div>
                    <div
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                        className="bg-gray-700 rounded-3xl p-1 text-sm hover:cursor-pointer w-8 h-8 flex justify-center items-center shadow-md">
                        <FontAwesomeIcon icon={isHover ? solidHeart : faHeart} className="text-pink-500"/>
                    </div>
                </div>
                <div className="flex mt-1.5 text-sm">
                    <p>Star</p>
                    <p className="ml-1">({item.star})</p>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="bg-gray-700 px-4 py-1.5 rounded-md text-xs hover:cursor-pointer shadow-md hover:bg-gray-400">Edit Product</div>
                    <div
                        onClick={() => {deleteProduct(item.id)}}
                        className="bg-gray-700 px-4 py-1.5 rounded-md text-xs hover:cursor-pointer shadow-md hover:bg-red-500">Delete Product</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard