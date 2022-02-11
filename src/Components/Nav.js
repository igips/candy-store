import "../Styles/Nav.css";

function Nav() {
	return (
		<nav>
			<div id="navContainer">
				<div id="navDivLeft" className="navDiv">
					<a href="">Home</a>
					<a href="">Store</a>
				</div>
				<div id="headerDiv">
					<header>
						<h1>Candy Store</h1>
					</header>
				</div>
				<div className="navDiv">
					<a href="">Contact</a>
					<a id="cart" href="">
						<i className="fa-solid fa-cart-shopping"></i>
						<span className="badge badge-warning" id="lblCartCount">
							5
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
