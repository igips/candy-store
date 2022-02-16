import "../Styles/ProductPage.css";
import fantaStraw from "../img/fantaStraw.jpg";


function ProductPage() {



    return (
        <div id="productPageMain">
            <div id="productPageInnerMain">
                <div id="productPageLeft">
                    <img src={fantaStraw} alt="" />
                </div>

                <div id="productPageRight">
                    <h1 id="productPageTitle">FANTA STRAWBERRY</h1>
                    <p id="productPagePrice">£1.70</p>
                    <div className="number-input">
                        <button ></button>
                        <input className="quantity" min="0" name="quantity" defaultValue="1" type="number" />
                        <button  className="plus"></button>
                    </div>
                    <button className="addToCartButtonProductPage">ADD TO CART</button>
                    <article> ‘Fanta Strawberry’ is a refreshing fruity soda, a sweet strawberry flavoured variation of the classic carbonated soft drink – Fanta.</article>

                </div>

            </div>
        </div>
    );
}

export default ProductPage;
