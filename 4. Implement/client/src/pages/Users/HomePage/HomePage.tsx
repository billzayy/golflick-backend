import "../../../styles/HomePage/HomePage.css"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer";
import Featured from "../../../components/HomePage/Featured";
import ShopByCategory from "../../../components/HomePage/Category";
import SaleTimer from "../../../components/HomePage/Sales";
import PicTitle from "../../../components/HomePage/PicTitle";
import SuggestOffer from "../../../components/HomePage/SuggestOffer";
import { useEffect, useState } from "react";
import { isTokenExpired } from "../../../services/checkExpiredToken";
// import Notification from "../../../components/Notification";

function HomePage() {
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwt_token'); // or get token from cookies or state

        if (token && isTokenExpired(token)) {
            setIsExpired(true);
        } else {
            setIsExpired(false);
        }
    }, []);

    if (isExpired) { 
        // return <div>Your session has expired. Please log in again.</div>;
        alert('Your session has expired. Please log in again.')
    }

    return (
        <div className="relative">
            <SuggestOffer/>
            <Header/>      
            <div className="content">
                <PicTitle/> 
                <Featured/>
                <ShopByCategory/>
                <SaleTimer/>
                <div className="collection-list">Shop Collections</div>
                <div className="article-list">Article</div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;