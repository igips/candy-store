import { useEffect, useState } from "react";
import "../Styles/Store.css";
import ProductCard from "./ProductCard.js";
import fantaStraw from "../img/fantaStraw.jpg";


function Store(props) {

	const [sort, setSort] = useState("Alphabetically, A-Z");
	const [products, setProducts] = useState(props.products);


	useEffect(() => {
			setProducts(() => {
				let sorted;

				if(sort === "Alphabetically, A-Z") {
					sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
					
				} else if (sort === "Alphabetically, Z-A") {
					sorted = [...products].sort((a, b) => b.name.localeCompare(a.name));
					
				} else if (sort === "Price, low to high") {
					sorted = [...products].sort((a, b) => a.price - b.price);
					
				} else if (sort === "Price, high to low") {
					sorted = [...products].sort((a, b) => b.price - a.price);
				}

				return sorted;
			});

		
	}, [sort]);

	
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
							<span>Sort:</span>
							<select value={sort} onChange={(e) => setSort(e.target.value)}>
								<option value="Price, low to high">Price, low to high</option>
								<option value="Price, high to low">Price, high to low</option>
								<option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
								<option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
							</select>
						</div>
					</div>
                    <div id="productList">
						{products.map((item) => {
							return (
								<ProductCard item={item} addToCart={props.addToCart} id={item.id} key={item.id} price={item.price} name={item.name} img={item.photo}></ProductCard>
							);
						})}
                       

                    </div>
				</div>
			</div>
		</div>
	);
}

export default Store;
