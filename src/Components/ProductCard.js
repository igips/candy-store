import "../Styles/ProductCard.css";


function ProductCard(props) {



    return (
        <div className="productCardContainer">
            <img className="cardImgDiv" src={props.img} alt="" />
            <p className="prodName">{props.name}</p>
            <p>{props.price}</p>
            <div className="addToCartDiv">
                <button>ADD TO CART</button>
            </div>            
        </div>

    );

}

export default ProductCard;