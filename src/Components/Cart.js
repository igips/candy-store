import "../Styles/Cart.css";

function Cart() {
	return (
		<div id="shoppingCart" className="active">
			<span id="cartText">Your Cart</span>
            <div id="cartItems"></div>
			<div id="buttonDivCart">
                <span id="total">Total: £0.00</span>
				<button id="checkoutBut" className="cartButtons">Checkout</button>
				<button id="closeCartBut" className="cartButtons">Close</button>
			</div>
		</div>
	);
}

export default Cart;
