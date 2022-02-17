import "../Styles/Cart.css";

function Cart(props) {
	return (
		<div id="shoppingCart" className="">
			<span id="cartText">Your Cart</span>
            <div id="cartItems">
                {props.cart.map((item) => {
                    return (
                        <div key={item.id + "C"} className="cartItem"> 
                            <div className="cartImgDiv"><img className="cartImg" src={item.photo} alt="" /> </div>
                            
                            <div className="cartItemData">
                                <span><b>{item.name}</b> </span>
                                <span> £{item.price}</span>
                                <div className="cartQuanDiv">
                                    <button>-</button>
                                    <input className="quantityCart" min="0" name="quantity" defaultValue="1" type="number" />
                                     <button  className="add">+</button>
                                </div>
                            </div>


                        
                        
                         </div>
                    );
                })}


            </div>
			<div id="buttonDivCart">
                <span id="total">Total: £0.00</span>
				<button id="checkoutBut" className="cartButtons">Checkout</button>
				<button id="closeCartBut" className="cartButtons">Close</button>
			</div>
		</div>
	);
}

export default Cart;
