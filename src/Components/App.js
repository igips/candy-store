import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Store from "./Store.js";
import ProductPage from "./ProductPage.js";
import Contact from "./Contact.js";
import Cart from "./Cart.js";
import "../Styles/App.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const back = document.getElementById("divForCartBackground");
		const cart = document.getElementById("shoppingCart");
		const closeCartBut = document.getElementById("closeCartBut");

		const hideCart = () => {
			back.classList.remove("activeBack");
			cart.classList.remove("active");
		};

		back.addEventListener("click", hideCart);
		closeCartBut.addEventListener("click", hideCart);
	});

	return (
    <BrowserRouter>
			<Nav></Nav>
		
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
				</Routes>
			
			<Cart></Cart>
			<div id="divForCartBackground" className=""></div>
			<footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
    </BrowserRouter>
	);
}

export default App;
