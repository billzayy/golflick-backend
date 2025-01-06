import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import UsaLogo from "../../assets/usa-logo.png"

const Language: React.FC<{}> = ({ }) => { 
    return (
        <div className="flex items-center hover:cursor-pointer mx-5 hover:bg-gray-400 p-3">
            <img src={UsaLogo} alt="flag" className="mr-2 size-8"/> 
            <p className="mr-2">English</p>
            <FontAwesomeIcon icon={faChevronDown} className="size-2.5"/>
        </div>
    )
}

export default Language