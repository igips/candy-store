import "../Styles/Cart.css";
import {Link} from "react-router-dom";


function Cart(props) {

    let total = 0;


	return (
		<div id="shoppingCart" className="">
			<span id="cartText">Your Cart</span>
            <div id="cartItems">
                {props.cart.map((item) => {
                    total += item.price * item.quan;
                    return (
                        <div key={item.id + "C"} className="cartItem"> 
                            <div className="cartImgDiv"><Link to={`/product/${item.id}`}><img className="cartImg" src={item.photo} alt="" /></Link> </div>
			        
                            <div className="cartItemData">

                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: "#444" }} > <span className="cartSpan"><b>{item.name}</b> </span></Link>
                                <span> £{(item.price * item.quan).toFixed(2)}</span>
                                <div className="cartQuanDiv">
                                    <button onClick={() => props.sub(item.id, item.quan)}>-</button>
                                    <input className="quantityCart" min="0" name="quantity" value={item.quan} type="number" readOnly />
                                     <button onClick={() => props.add(item.id)}  className="add">+</button>
                                </div>
                            </div>


                        
                        
                         </div>
                    );
                })}


            </div>
			<div id="buttonDivCart">
                <span id="total">Total: £{total.toFixed(2)}</span>
				<button id="checkoutBut" className="cartButtons">Checkout</button>
				<button id="closeCartBut" className="cartButtons">Close</button>
			</div>
		</div>
	);
}

export default Cart;
