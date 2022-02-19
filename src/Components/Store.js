import { useEffect, useState } from "react";
import "../Styles/Store.css";
import ProductCard from "./ProductCard.js";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Store(props) {
	let { cat } = useParams();

	const [sort, setSort] = useState("Alphabetically, A-Z");
	const [products, setProducts] = useState(() => {
		if (!cat) {
			return props.products;
		} else {
			const picked = props.products.filter(
				(item) => item.brand === cat || item.category === cat || item.catB === cat
			);
			return picked;
		}
	});

	useEffect(() => {
		setProducts(() => {
			if (!cat) {
				return props.products;
			} else {
				const picked = props.products.filter(
					(item) => item.brand === cat || item.category === cat || item.catB === cat
				);
				return picked;
			}
		});
	}, [cat]);

	useEffect(() => {
		function navDropFunction() {
			if (!document.getElementById("storeNav").classList.contains("active")) {
				if (document.getElementById("storeNav").classList.contains("active2")) {
					document.getElementById("storeNav").classList.remove("active2");
				}

				document.getElementById("storeNav").classList.add("active");
			} else if (document.getElementById("storeNav").classList.contains("active")) {
				document.getElementById("storeNav").classList.remove("active");
				document.getElementById("storeNav").classList.add("active2");
			}
		}

		document.getElementById("navButton").addEventListener("click", navDropFunction);
	}, []);

	useEffect(() => {
		setProducts(() => {
			let sorted;

			if (sort === "Alphabetically, A-Z") {
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
		console.log(cat);
	}, [sort]);

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
							<Link className="storeLinks" to={`/store/soda`}>
								<span>Soda</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/poptarts`}>
								<span>Pop Tarts</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/candy`}>
								<span>Candy</span>
							</Link>
						</li>
						<li className="lastInList">
							<Link className="storeLinks" to={`/store/chocolate`}>
								<span>Chocolate</span>
							</Link>
						</li>
					</ul>

					<p className="catHeader">
						<b>Brand</b>
					</p>
					<ul id="secondUl" className="catList">
						<li>
							<Link className="storeLinks" to={`/store/fanta`}>
								<span>Fanta</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/hershey's`}>
								<span>Hershey's</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/reese's`}>
								<span>Reese's</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/skittles`}>
								<span>Skittles</span>
							</Link>
						</li>

						<li>
							<Link className="storeLinks" to={`/store/kellogg's`}>
								<span>Kellogg's</span>
							</Link>
						</li>
						<li>
							<Link className="storeLinks" to={`/store/SourPatch`}>
								<span>Sour Patch</span>
							</Link>
						</li>
						<li className="lastInList">
							<Link className="storeLinks" to={`/store/peacetea`}>
								<span>Peace Tea</span>
							</Link>
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
								<ProductCard
									item={item}
									addToCart={props.addToCart}
									id={item.id}
									key={item.id}
									price={item.price}
									name={item.name}
									img={item.photo}
								></ProductCard>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Store;
