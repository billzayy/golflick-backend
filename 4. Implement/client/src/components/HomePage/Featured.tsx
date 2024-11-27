import "../../styles/HomePage/Feature.css"
import testImg from "../../assets/Paste image.png"
import { ProductList } from "../../types/products-list";
import StarRatings from 'react-star-ratings'
import { useState} from 'react'

const data: ProductList[] = [
    {productName:"Product A",price:12, rate:5 , avatar: testImg},
    {productName:"Product B",price:100, rate:3.5, avatar : testImg},
    {productName:"Product B",price:100, rate:3.5, avatar : testImg},
    {productName:"Product C",price:2, rate:1, avatar: testImg }
]

const Featured:React.FC = () =>{ 
    return (
        <div className="featured-section">
            <div className="featured-title">Featured</div>
            <ul className="horizontal-scroll-list">
                {data.map((item, index) => (
                    <li key={index} className="list-item">
                         <Product img={item.avatar} name={item.productName} star={item.rate} price={item.price} />
                    </li>
                ))}
            </ul>
        </div>
       
    )
}

const Product: React.FC<{img?:string, star: number, name:string, price: number}> = ({img, star, name, price}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div className="item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="img-product">
                <div className="hot-tag">HOT</div>
                <img src={img} alt="" className="img-item"/>
                <div className="add-cart btn"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transform: isHovered ? 'translateY(-10px)':'translateY(0)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}>Add to cart</div>
            </div>
            <div className="star-item">
                <StarRatings
                    rating={star}
                    starRatedColor="black"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="2px"
                />
            </div>
            <div className="name-item">{name}</div>
            <div className="price-item">${price}</div>
        </div>
    )
}

export default Featured;