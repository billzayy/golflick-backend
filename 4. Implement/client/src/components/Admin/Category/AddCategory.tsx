import { useEffect, useState } from "react"
import { IBrand } from "../../../types/IBrand"
import { IType } from "../../../types/IType"
import {getType} from "../../../services/Type/GetType"
import {getBrands} from "../../../services/Brand/GetBrands"

const AddCategory: React.FC = () => {
    const [brandData, setBrandData] = useState<IBrand[]>([])
    const [typeData, setTypeData] = useState<IType[]>([])

    useEffect(() => { 
        const fetchType = async () => { 
            try {
                const result = await getType()

                if (result != undefined) { 
                    setTypeData(result)
                }
            } catch (error) {
                console.log(error)
            }
        }

        const fetchBrand = async() => {
           try {
                const result = await getBrands()

                if (result != undefined) { 
                    setBrandData(result)
                }
            } catch (error) {
                console.log(error)
            } 
        }

        fetchType();
        fetchBrand();
    },[])
    
    return (
        <div className="add-product-container bg-white p-5 rounded-lg max-w-5xl w-full text-black">
            <div className="add-product-content overflow-y-auto max-h-[80vh] px-3"> 
                <h2 className="text-xl font-bold mb-5 fixed">Add New Category</h2>
                <form>
                    <div className="mb-4 mt-10">
                        <label className="block">Category Name</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="flex">
                        <div className="mb-4 w-full mr-1">
                        <label className="block">Brand</label>
                        <select className="w-full p-2 border rounded">
                            {brandData.map((item, index) => (
                                <option key={index} value={item.brandId}>{item.brandName}</option>
                            ))}
                        </select> 
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block">Type</label>
                            <select className="w-full p-2 border rounded">
                                {typeData.map((item, index) => (
                                    <option key={index} value={item.typeId}>{item.typeName}</option>
                                ))}
                            </select> 
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block">Image</label>
                        <div className="flex items-center justify-center">
                            <input type="file" className="w-1/2 text-sm h-[6vh] p-2 border rounded mr-1"/>
                            <input type="text" placeholder="Image name" className="w-full h-1/2 p-2 border rounded"/>
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Category</button>
                </form>
            </div>
        </div>
    )
}


export default AddCategory