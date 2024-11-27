import "../../../styles/HomePage/HomePage.css"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer";
import Featured from "../../../components/HomePage/Featured";
import ShopByCategory from "../../../components/HomePage/Category";
import SaleTimer from "../../../components/HomePage/Sales";
import PicTitle from "../../../components/HomePage/PicTitle";
import SuggestOffer from "../../../components/HomePage/SuggestOffer";

function HomePage() { 
    return (
        <div>
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