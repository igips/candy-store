import "../Styles/Store.css";

function Store() {
	return (
		<div id="storeMain">
			<div id="storeNav">
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
				<ul className="catList">
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
							<option  value="Price, low to high">Price, low to high</option>
							<option value="Price, high to low">Price, high to low</option>
							<option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Store;
