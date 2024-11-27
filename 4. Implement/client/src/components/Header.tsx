import "../styles/Header.css"
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Header() { 
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="header-title">Golflick</div>

            <div className="header-sections middle">
                <div className="header-items btn" onClick={() => {navigate("/")}}>Home</div>
                <div className="header-items btn">Products</div>
                <div className="header-items btn">Blog</div>
                <div className="header-items btn">Contact Us</div>
            </div>

            <div className="header-sections">
                <div className="header-options">
                    <FontAwesomeIcon icon={faSearch} className="search-icon btn"/>
                </div>
                <div className="header-options">
                    <FontAwesomeIcon icon={faUserCircle} onClick={() => { navigate("/login")}} className="user-icon btn"/> 
                </div>
                <div className="header-options cart">
                    <FontAwesomeIcon icon={faBasketShopping} className="cart-icon btn" />
                    <div className="cart-count">2</div>
                </div>
            </div>
        </div>
    )
}

export default Header;