import { useNavigate } from "react-router-dom"
import { ITabAdmins, tabAdmins } from "../../types/components/TabAdmins"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Logo from "../../assets/Logo.png"

const SideBar: React.FC<{ closed: boolean, tabIndex: number }> = ({ closed, tabIndex}) => {
    return (
        <div className={`${closed? "hidden" : "grid"} bg-adminTabs text-white w-full max-w-[25vh] content-between p-1`}>
            <div className="tabs h-max">
                <div className="flex justify-center items-center h-20">
                    <img src={Logo} alt="" className="size-16" />
                </div>
                <ul className="list-none mt-2">
                    {tabAdmins.map((item, index) => (
                        <TabItems key={index} item={item} index={index} selectedTab={tabIndex}/>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

const TabItems: React.FC<{ item: ITabAdmins, index: number, selectedTab: number }> = ({item, index, selectedTab}) => { 
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {setIsHover(true)}
    const handleMouseLeave = () => { setIsHover(false) }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex justify-between text-gray-500 py-1.5 
            ${isHover ? "cursor-pointer" : ""}`}>
            <span className={`w-1 
                ${isHover || selectedTab == index ? "bg-menuBg" : ""}
                `}></span>
            <li
                className={`ml-4 mr-1 px-3 py-2.5 w-full rounded-lg
                    ${isHover || selectedTab == index ? "bg-menuBg  text-white" : ""}`}
                onClick={() => {navigate(item.url != "" ? item.url : "/admin")}}>
                <FontAwesomeIcon
                    icon={item.logo != undefined ? item.logo : faX}
                    className="w-4 px-1 pr-4" />
                {item.name}
            </li>
        </div>
    )
}

export default SideBar