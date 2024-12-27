import { faBell, faHamburger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Profile from "./Profile"

const MenuBar: React.FC<{}> = ({ }) => { 
    return (
        <div className="flex">
            <FontAwesomeIcon icon={faHamburger} className="" title="hamburger-icon"/>
            <div className="">Search</div>
            <div className="notification-list">
                <div className="">Number of Notification</div>
                <FontAwesomeIcon icon={faBell} className="" title="bell-icon"/>
            </div>
            <div className="flex">Language</div>
            <Profile/>            
        </div>
    )
}

export default MenuBar