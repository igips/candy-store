import "../Styles/Nav.css";
import { useEffect } from "react";
import {Link} from "react-router-dom";

function Nav(props) {

	

	useEffect(() => {
		const back = document.getElementById("divForCartBackground");
		const cart = document.getElementById("shoppingCart");
		const cartButton = document.getElementById("cart");

		const showCart = () => {
			back.classList.add("activeBack");
			cart.classList.add("active");
		};

		cartButton.addEventListener("click", (e) => {
			e.preventDefault();
			showCart();
		});
	});

	return (
		<nav>
			<div id="navContainer">
				<div id="navDivLeft" className="navDiv">
					<Link  to="/" >Home</Link>
					<Link to="/store" >Store</Link>
				</div>
				<div id="headerDiv">
					<header>
						<h1>Candy Store</h1>
					</header>
				</div>
				<div className="navDiv" id="navDivRight">
					<Link to="/contact">Contact</Link>
					<a id="cart" href="">
						<i className="fa-solid fa-cart-shopping"></i>
						<span className="badge badge-warning" id="lblCartCount">
							{props.cart > 0 ? props.cart : ""}
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
