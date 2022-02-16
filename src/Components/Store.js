import { useEffect } from "react";
import "../Styles/Store.css";
import ProductCard from "./ProductCard.js";
import fantaStraw from "../img/fantaStraw.jpg";


function Store() {
	useEffect(() => {
		function navDropFunction() {
			if (!document.getElementById("storeNav").classList.contains("active")) {
				if (document.getElementById("storeNav").classList.contains("active2")) {
					document.getElementById("storeNav").classList.remove("active2");
				}

				document.getElementById("storeNav").className += " active";
			} else {
				document.getElementById("storeNav").classList.remove("active");
				document.getElementById("storeNav").className += " active2";
			}
		}

		document.getElementById("navButton").addEventListener("click", navDropFunction);

		
	});

	const height = {
		height: "20px",
	};

	return (
		<div id="storeMainMain">
			<div id="storeMain">
				<button id="navButton">Categories</button>
				<div id="storeNav">
					<div id="search">
						<div>
							<input id="loc-input" type="text" placeholder="Search..." />
							<button id="search-button">
								<i className="fas fa-search" style={height}></i>
							</button>
						</div>
						<p id="not-found"></p>
					</div>
					<p className="catHeader">
						<b>Category</b>
					</p>
					<ul className="catList">
						<li>
							<span>Soda</span>
						</li>
						<li>
							<span>Pop Tarts</span>
						</li>
						<li>
							<span>Candy</span>
						</li>
						<li className="lastInList">
							<span>Chocolate Bars</span>
						</li>
					</ul>

					<p className="catHeader">
						<b>Brand</b>
					</p>
					<ul id="secondUl" className="catList">
						<li>
							<span>Fanta</span>
						</li>
						<li>
							<span>Hershey's</span>
						</li>
						<li>
							<span>Reese's</span>
						</li>
						<li className="lastInList">
							<span>Peace Tea</span>
						</li>
					</ul>
				</div>
				<div id="storeProducts">
					<div id="productsHeader">
						<p>Products</p>
						<div id="selectDiv">
							<span>Sort By:</span>
							<select defaultValue="Price, low to high">
								<option value="Price, low to high">Price, low to high</option>
								<option value="Price, high to low">Price, high to low</option>
								<option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
								<option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
							</select>
						</div>
					</div>
                    <div id="productList">
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>
                        <ProductCard price="£1.70" name="Fanta Strawberry" img={fantaStraw}></ProductCard>

                    </div>
				</div>
			</div>
		</div>
	);
}

export default Store;
