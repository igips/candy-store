import "../Styles/ProductPage.css";
import {useParams} from "react-router";
import {useState} from "react";


function ProductPage(props) {

    const [loc, setLoc] = useState(useParams());

    const [item, setItem] = useState(props.products.filter(item => item.id === loc.id));

    const [quan, setQuan] = useState(1);

    function addQuan() {
        setQuan(quan + 1);
    }

    function subQuan() {
        if(quan > 1) {
            setQuan(quan - 1);
        }
    }
    

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
                        <button onClick={subQuan}></button>
                        <input id="" className="quantity" min="0" name="quantity" value={quan} type="number" readOnly/>
                        <button onClick={addQuan}  className="plus"></button>
                    </div>
                    <button onClick={() => props.addToCart(item[0], quan)} className="addToCartButtonProductPage">ADD TO CART</button>
                    <article>{item[0].desc}</article>

                </div>

            </div>
        </div>
    );
}

export default ProductPage;
