import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Profile from "./Profile"
import Language from "./Language"

const styleMenu = "flex items-center w-full"

const MenuBar: React.FC<{state:boolean, setState : React.Dispatch<React.SetStateAction<boolean>>}> = ({state, setState}) => {
    let notifyNum = 4
    let testPicture = `https://avatar.iran.liara.run/public/boy?username=${"null"}`

    return (
        <div className="flex bg-adminTabs w-full justify-between items-center text-white ">
            <div className={`left-menu ${styleMenu}`}>
                <div
                    onClick={() => {setState(!state)}}
                    className="flex justify-center hover:cursor-pointer p-5 mr-3 hover:bg-gray-400 h-full w-fit">
                    <FontAwesomeIcon icon={faBars} className="size-5" title="hamburger-icon"/>
                </div>
                <div className="w-full relative flex items-center">
                    <input type="search" name="search-bar" placeholder="Search"
                        className="bg-adminSearchDark border border-gray-400 rounded-xl w-2/3 pl-8 pr-2 py-1 focus:outline-none placeholder:text-white" />
                    <FontAwesomeIcon icon={faSearch} className="absolute left-2 text-white" />
                </div>
            </div>
            <div className={`right-menu ${styleMenu} justify-end`}>
                <div className="notification-list flex relative hover:cursor-pointer">
                    <FontAwesomeIcon icon={faBell} className="z-1 size-5" title="bell-icon"/>
                    <div className={`absolute ${notifyNum === 0 || notifyNum === undefined ? "hidden" : "flex"} text-white bg-red-500 z-2 p-1.5 h-5 text-xs justify-center items-center rounded-2xl bottom-2 -right-4`}>{notifyNum}</div>
                </div>
                <Language/> 
                <Profile imageLink={testPicture} /> 
            </div>           
        </div>
    )
}

export default MenuBar