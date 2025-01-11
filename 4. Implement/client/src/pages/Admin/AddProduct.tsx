const AddProduct: React.FC = () => {
    return (
        <div className="add-product-container bg-white p-5 rounded-lg max-w-4xl w-full text-black">
            <div className="add-product-content overflow-y-auto max-h-[80vh]"> 
                <h2 className="text-xl font-bold mb-5">Add New Product</h2>
                <form>
                    <div className="mb-4">
                        <label className="block">Product Name</label>
                        <input type="text" className="w-full p-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block">Description</label>
                        <textarea className="w-full p-2 border rounded h-32" />
                    </div>
                    <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default AddProduct