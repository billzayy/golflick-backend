import saleIcon from "../../assets/Sale-icon.png";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';

function SuggestOffer() {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    const handlerClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsVisible(false), 300); // Match the timeout with your CSS transition duration
    };

    return (
        <>
            {isVisible && (
                <div className={`suggest-offer ${isAnimating ? 'fade-out' : ''}`}>
                    <div></div>
                    <div className="suggest-content">
                        <img src={saleIcon} alt="sale icon" className="suggest-icon"/> 
                        <div className="suggest-message">30% off storewide — Limited time!</div>
                        <div className="suggest-link btn">
                            <div>Shop now</div>
                            <FontAwesomeIcon icon={faArrowRight} className="close-icon btn"/> 
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faX} className="close-icon btn" onClick={handlerClick}/>
                </div>
            )}
        </>
    );
}

export default SuggestOffer;
