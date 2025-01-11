import { useEffect, useRef, useState } from "react"
import SideBar from "../../components/Admin/SideBar"
import MenuBar from "../../components/Admin/MenuBar"
import ProductCard from "../../components/Admin/ProductCard"
import getProduct from "../../services/Admin/Product"
import { IProduct } from "../../types/IProduct"
import ProductTable from "../../components/Admin/ProductTable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons"
import AddProduct from "./AddProduct"

const Product: React.FC = () => {
    const [isClosedMenu, setIsClosedMenu] = useState(false)
    const [data, setData] = useState<IProduct[]>([])
    const [display, setDisplay] = useState("flex")
    const [showAddProduct, setShowAddProduct] = useState(false); // New state for visibility
    const addProductRef = useRef<HTMLDivElement | null>(null); // Ref to detect clicks outside

    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const result = await getProduct(0, 1)

                if (result != undefined) { 
                    setData(result)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();

        // Close AddProduct if click outside the component
        const handleClickOutside = (event: MouseEvent) => {
            if (addProductRef.current && !addProductRef.current.contains(event.target as Node)) {
                setShowAddProduct(false);
            }
        };

        // Adding the event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])
    
    return (
        <div className="dashboard-admin bg-adminBg w-full h-screen flex relative">
            <SideBar closed={isClosedMenu} tabIndex={1}/>
            <div className="w-full">
                <MenuBar state={isClosedMenu} setState={setIsClosedMenu} />
                <div className="main flex justify-between items-center">
                    <div className="text-white text-2xl mt-6 ml-5 font-bold">Product</div>
                    <div className="grid justify-center">
                        <div
                            className="text-white text-md mt-6 mr-10 bg-slate-700 shadow-md px-3.5 py-1 rounded-lg hover:cursor-pointer hover:bg-slate-400"
                            onClick={() => {setShowAddProduct(true)}}> Add Product</div>
                        <div className="view flex items-center text-gray-500 w-3/4 my-1 justify-center">
                            <FontAwesomeIcon icon={faGrip} onClick={() => { setDisplay("flex") }}
                                className={`${display === "flex"? "text-white" : "text-gray-500"} hover:cursor-pointer`} />
                            <p className="mx-2">|</p>
                            <FontAwesomeIcon icon={faList} onClick={() => { setDisplay("grid") }}
                                className={`${display === "grid"? "text-white" : "text-gray-500"} hover:cursor-pointer`} />
                        </div>
                    </div>
                    {showAddProduct && (
                        <div
                            ref={addProductRef}
                            className="absolute flex justify-center items-center w-1/2 inset-0 backdrop-blur-sm border border-red-500">
                            <AddProduct />
                        </div>
                    )}
                </div>
                <div className={`${display === "flex" ? display : "hidden"} flex-wrap`}>
                    {data.length === 0 ? <EmptyComponent/> : data.map((item, index) => (
                        <ProductCard key={index} item={item}/>
                    ))}
                </div>
                <div className={`${display === "grid" ? display : "hidden"}`}>
                    {data.length === 0 ? <EmptyComponent/> : <ProductTable data={data}/>}
                </div>
            </div>
        </div>
    )
}

const EmptyComponent: React.FC = () => {
    return (
        <div className="text-white mx-5 my-3">Value is empty</div>
    )
}

export default Product