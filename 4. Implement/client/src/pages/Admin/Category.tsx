import { useEffect, useRef, useState } from "react"
import { ICategory } from "../../types/ICategory"
import SideBar from "../../components/Admin/SideBar"
import MenuBar from "../../components/Admin/MenuBar"
import CategoryTable from "../../components/Admin/Category/CategoryTable"
import getCategory from "../../services/Category/GetCategory"
import AddCategory from "../../components/Admin/Category/AddCategory"

const Category: React.FC = () => { 
    const [isClosedMenu, setIsClosedMenu] = useState(false)
    const [data, setData] = useState<ICategory[]>([])
    const [showAddProduct, setShowAddProduct] = useState(false); // New state for visibility
    const addProductRef = useRef<HTMLDivElement | null>(null); // Ref to detect clicks outside

    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const result = await getCategory()

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
    },[])
    return (
       <div className="dashboard-admin bg-adminBg w-full h-screen flex relative">
            <SideBar closed={isClosedMenu} tabIndex={2}/>
            <div className="w-full">
                <MenuBar state={isClosedMenu} setState={setIsClosedMenu} />
                <div className="main flex justify-between items-center">
                    <div className="text-white text-2xl mt-6 ml-5 font-bold">Category</div>
                    <div className="grid justify-center">
                        <div
                            className="text-white text-md mt-6 mr-10 bg-slate-700 shadow-md px-3.5 py-1 rounded-lg hover:cursor-pointer hover:bg-slate-400"
                            onClick={() => {setShowAddProduct(true)}}> Add Category</div>
                    </div>
                    {showAddProduct && (
                        <div className="absolute flex justify-center items-center w-full inset-0 backdrop-blur-sm">
                            <div
                                ref={addProductRef}
                                className="w-full max-w-[120vh] max-h-[100vh]">
                                <AddCategory />
                            </div> 
                        </div>
                    )}
                </div>
                <div className={`grid`}>
                    {data.length === 0 ? <EmptyComponent/> : <CategoryTable data={data}/>}
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

export default Category