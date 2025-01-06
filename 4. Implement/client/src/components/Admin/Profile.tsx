import { faArrowRightFromBracket, faCircleChevronDown, faUser, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITabAdmins } from "../../types/components/TabAdmins"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const tabProfile: ITabAdmins[] = [
    { name: "Profile", url: "/admin", logo: faUser },
    { name: "Logout", url: "/login", logo: faArrowRightFromBracket },
]

const Profile: React.FC<{ imageLink: string }> = ({ imageLink }) => { 
    const [isOpened, setIsOpened] = useState(false)
    const profileRef = useRef<HTMLDivElement>(null)

    // Close dropdown if clicking outside the profile component
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsOpened(false)
            }
        }

        document.addEventListener("click", handleClickOutside)

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={profileRef} // Attach ref to the profile container
            onClick={() => { setIsOpened(!isOpened) }}
            className="flex items-center my-2 relative pr-3 hover:cursor-pointer h-full">
            <img src={imageLink} alt="Profile Image" className="size-10"/>
            <div className="info text-sm mx-3">
                <div className="">Name</div>
                <div className="">Admin</div>
            </div>
            <FontAwesomeIcon icon={faCircleChevronDown}/>
            <div className="drop-down absolute top-12 bg-white text-black w-11/12">
                <ul className="profile">
                    {tabProfile.map((item, index) => (
                        <ProfileComponents key={index} item={item} status={isOpened} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const ProfileComponents: React.FC<{ item: ITabAdmins, status: boolean }> = ({item, status}) => { 
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {setIsHover(true)}
    const handleMouseLeave = () => {setIsHover(false)}

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${status? "grid" : "hidden"} ${isHover? "bg-gray-400 cursor-pointer" : ""}`}>
            <li
                onClick={() => {navigate(item.url != "" ? item.url : "/admin")}}
                className="px-1 py-1.5 text-sm">
                <FontAwesomeIcon icon={item.logo != undefined ? item.logo : faX} className="w-4 px-1 pr-3" />
                {item.name}
            </li>
        </div>
    )
}

export default Profile