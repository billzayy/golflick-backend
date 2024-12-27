import { useNavigate } from "react-router-dom"
import { TabAdmins } from "../../../types/components/TabAdmins"
import { faX, faTruck, faMessage, faBell, faGear,faGrip, faCartShopping, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

const tabAdmins: TabAdmins[] = [
    { name: "Dashboard", url: "/admin", logo: faGrip },
    { name: "Product", url: "", logo: faCartShopping },
    { name: "Delivery", url: "", logo: faTruck},
    { name: "Calendar", url:"", logo: faCalendar},
    { name: "Messages", url:"", logo: faMessage},
    { name: "Notification", url:"", logo: faBell},
    { name: "Settings", url:"", logo: faGear},
] 

const SideBar: React.FC<{}> = ({ }) => {
    let testPicture = `https://avatar.iran.liara.run/public/boy?username=${"null"}`
    return (
        <div className="grid bg-white w-48 content-between border border-sky-500 h-screen p-1 ">
            <div className="tabs h-max">
                <div className="flex justify-center items-center h-20">Logo</div>
                <ul className="list-none">
                    {tabAdmins.map((item, index) => (
                        <TabItems key={index} name={item.name} url={item.url} logo={item.logo} />
                    ))}
                </ul> 
            </div>
            <div className="h-max flex items-center justify-between pb-2">
                <div className="profile flex">
                    <div className="avatar w-11">
                        <img src={testPicture} alt={testPicture} />
                    </div>
                    <div className="name grid items-center text-xs pl-2">
                        <p className="py-0">PHAN LE TUAN</p>
                        <p className="text-xs text-green-600">Online status</p>
                    </div>
                </div>
                <div className="logout pr-2">
                    <FontAwesomeIcon icon={faSignOut} className="hover:cursor-pointer active:"/>
                </div>
            </div>
        </div>
    )
}

const TabItems: React.FC<TabAdmins> = ({name, url, logo}) => { 
    const navigate = useNavigate()

    return (
        <li className="text-gray-500 hover:cursor-pointer hover:bg-slate-600 hover:text-white py-3.5 px-5"
            onClick={() => {navigate(url != "" ? url : "/admin")}}>
            <FontAwesomeIcon icon={logo != undefined ? logo : faX} className="w-4 px-1 pr-4" />
            {name}
        </li>
    )
}

export default SideBar