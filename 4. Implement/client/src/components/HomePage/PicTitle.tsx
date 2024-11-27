import background from "../../assets/HomePage-background.png"

function PicTitle() { 
    return (
        <div className="pic-body">
            <div className="background-text">
                <p className="background-title">More than just a game. It’s a lifestyle.</p>
                <p className="background-lower-text">Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
                <button className="homepage-btn btn">Shopping now</button>
            </div>
            {/* <img src={background} alt="background" className="background-image"/> */}
        </div>
    )
}

export default PicTitle;