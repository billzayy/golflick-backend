import { ChangeEvent, useEffect, useState } from "react"
import { ICategory } from "../../../types/ICategory"
import getCategory from "../../../services/Category/GetCategory"
import { IDetailProduct } from "../../../types/IProduct"
import addProduct from "../../../services/Product/AddProduct"
import { notification } from "antd"

const AddProduct: React.FC = () => {
    const [dataCategory, setDataCategory] = useState<ICategory[]>([])

    const [productNameInput, setProductNameInput] = useState<string>('');
    const [descriptionInput, setDescriptionInput] = useState<string>('');
    const [detailInput, setDetailInput] = useState<string>('');
    const [categoryInput, setCategoryInput] = useState<string>('');
    const [statusInput, setStatusInput] = useState<number|''>('');
    const [priceInput, setPriceInput] = useState<number | ''>('');
    const [saleInput, setSaleInput] = useState<number | ''>('');
    const [fileInput, setFileInput] = useState<File | null>(null);
    const [imageNameInput, setImageNameInput] = useState<string>('');

    // Handlers
    const handleProductNameInputChange = (e: ChangeEvent<HTMLInputElement>) => setProductNameInput(e.target.value);
    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => setDescriptionInput(e.target.value);
    const handleDetailChange = (e: ChangeEvent<HTMLTextAreaElement>) => setDetailInput(e.target.value);
    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategoryInput(e.target.value);
    const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => setStatusInput(Number(e.target.value));
    const handlePriceInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPriceInput(e.target.value ? parseFloat(e.target.value) : '');
    const handleSaleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSaleInput(e.target.value ? parseFloat(e.target.value) : '');
    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setFileInput(e.target.files?.[0] || null);
    const handleImageNameInputChange = (e: ChangeEvent<HTMLInputElement>) => setImageNameInput(e.target.value);

    // Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const input: IDetailProduct = {
            name: productNameInput,
            description: descriptionInput,
            detail: detailInput,
            categoryId: categoryInput,
            status: Number(statusInput),
            price: priceInput,
            sale: saleInput,
            reviewId: null
        }

        let result = addProduct(input)

        result.then((data) => { 
            if (data == 201) { 
                notification.success({
                    message: "Successful",
                    description:"Successful",
                    showProgress: true,
                    pauseOnHover:true
                })
            }
        })
    };
    
    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const result = await getCategory()

                if (result != undefined) { 
                    setDataCategory(result)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    },[])
    
    return (
        <div className="add-product-container bg-gray-100 rounded-lg max-w-7xl w-full text-black shadow-md">
            <div className="add-product-content overflow-y-auto max-h-[80vh]"> 
                <h2 className="text-xl font-bold mb-5 fixed w-full max-w-[57.2%] py-2 px-6 rounded-t-lg bg-blue-500 text-white">Add New Product</h2>
                <form className="px-6 py-4">
                    <div className="mb-4 mt-10">
                        <label className="block">Product Name</label>
                        <input type="text" className="w-full p-2 border rounded" value={productNameInput} onChange={handleProductNameInputChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block">Description</label>
                        <textarea className="w-full p-2 border rounded h-20 max-h-20 min-h-20" value={descriptionInput} onChange={handleDescriptionChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block">Addition Detail</label>
                        <textarea className="w-full p-2 border rounded h-32 max-h-32 min-h-32" value={detailInput} onChange={handleDetailChange}/>
                    </div>
                    <div className="flex">
                        <div className="mb-4 w-full mr-1">
                        <label className="block">Category</label>
                        <select className="w-full p-2 border rounded" value={categoryInput} onChange={handleCategoryChange}>
                            <option value="">Select a category</option>
                            {dataCategory.map((item, index) => (
                                <option key={index} value={item.categoryId}>{item.categoryName}</option>
                            ))}
                        </select> 
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block">Status</label>
                            <select className="w-full p-2 border rounded" value={statusInput} onChange={handleStatusChange}>
                                <option value="">Select a status</option>
                                <option value="1">Available</option>
                                <option value="2">Unavailable</option>
                            </select> 
                        </div>
                    </div>
                    <div className="number flex">
                        <div className="mb-4 mr-1 w-full">
                            <label className="block">Price</label>
                            <input
                                type="number"
                                step={"any"}
                                min={0} placeholder="Price product"
                                className="w-full p-2 border rounded"
                                value={priceInput} onChange={handlePriceInputChange} />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block">Sale</label>
                            <input
                                type="number"
                                min={0} placeholder="Sale product"
                                className="w-full p-2 border rounded"
                                value={saleInput} onChange={handleSaleInputChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block">Image</label>
                        <div className="flex items-center justify-center">
                            <input type="file" className="w-1/2 text-sm h-[6vh] p-2 border rounded mr-1 bg-white" onChange={handleFileInputChange}/>
                            <input
                                type="text"
                                placeholder="Image name"
                                className="w-full h-1/2 p-2 border rounded"
                                value={imageNameInput} onChange={handleImageNameInputChange} />
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add Product</button>
                </form>
            </div>
        </div>
    )
}


export default AddProduct