import "../Styles/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {

	return (
		<div className="productCardContainer">
			<Link to={`/product/${props.id}`}>
				<img className="cardImgDiv" src={props.img} alt="" />
			</Link>

			<Link style={{ textDecoration: 'none', color: "#444" }} to={`/product/${props.id}`}>
				<p className="prodName">{props.name}</p>
			</Link>

			<p>£{props.price}</p>
			<div className="addToCartDiv">
				<button onClick={() => props.addToCart(props.item)}>ADD TO CART</button>
			</div>
		</div>
	);
}

export default ProductCard;
