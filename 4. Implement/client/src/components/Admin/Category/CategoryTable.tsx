import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { ICategory } from "../../../types/ICategory"
import { useEffect, useState } from "react"
import { getBrandById } from "../../../services/Brand/GetBrands"
import { getTypeById } from "../../../services/Type/GetType"

const CategoryTable: React.FC<{ data: ICategory[] }> = ({ data }) => { 
    const header = ["No.", "Image", "Name", "Brand", "Type", "Buttons"]

    const [brandNames, setBrandNames] = useState<Record<string, string>>({});
    const [typeNames, setTypeNames] = useState<Record<string, string>>({});

    useEffect(() => {
        const fetchBrandNames = async () => {
            const brandMap: Record<string, string> = {};

            for (const category of data) {
                const brand = await getBrandById(category.brandId);
                if (brand.brandId == 0) { 
                    brandMap[category.brandId] = "null";
                } else {
                    brandMap[category.brandId] = brand.brandName;
                }
            }

            setBrandNames(brandMap);
        };

        const fetchTypeNames = async () => {
            const typeMap: Record<string, string> = {};

            for (const category of data) {
                const type = await getTypeById(category.typeId);
                if (type.typeId == 0) { 
                    typeMap[category.brandId] = "null";
                } else {
                    typeMap[category.brandId] = type.typeName;
                }
            }

            setTypeNames(typeMap);
        };

        fetchBrandNames();
        fetchTypeNames();
    }, [data]); // Trigger this effect whenever 'data' changes 

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
                                <td className="border border-gray-400 p-2 text-center w-10">{index+1}</td>
                                <td className="border border-gray-400 p-2 text-center">{item.categoryPicture}</td>
                                <td className="border border-gray-400 p-2 max-w-[100%]">{item.categoryName}</td>
                                <td className="border border-gray-400 p-2 text-center w-[14%]">{brandNames[item.brandId]}</td>
                                <td className="border border-gray-400 p-2 text-center w-[14%]">{typeNames[item.typeId]}</td>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryTable