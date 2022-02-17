import "../Styles/ProductPage.css";
import {useParams} from "react-router";
import {useState} from "react";


function ProductPage(props) {

    const [loc, setLoc] = useState(useParams());

    const [item, setItem] = useState(props.products.filter(item => item.id === loc.id));
    

    return (
        <div id="productPageMain">
            <div id="productPageInnerMain">
                <div id="productPageLeft">
                    <img src={item[0].photo} alt="" />
                </div>

                <div id="productPageRight">
                    <h1 id="productPageTitle">{item[0].name.toUpperCase()}</h1>
                    <p id="productPagePrice">£{item[0].price}</p>
                    <div className="number-input">
                        <button ></button>
                        <input className="quantity" min="0" name="quantity" defaultValue="1" type="number" />
                        <button  className="plus"></button>
                    </div>
                    <button onClick={() => props.addToCart(item[0])} className="addToCartButtonProductPage">ADD TO CART</button>
                    <article>{item[0].desc}</article>

                </div>

            </div>
        </div>
    );
}

export default ProductPage;
