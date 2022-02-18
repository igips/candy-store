import "../Styles/ProductPage.css";
import {useParams, useLocation} from "react-router";
import {useEffect, useState} from "react";


function ProductPage(props) {

    const {id} = useParams();

    const [item, setItem] = useState(props.products.filter(item => item.id === id));

    const [quan, setQuan] = useState(1);

    function addQuan() {
        setQuan(quan + 1);
    }

    function subQuan() {
        if(quan > 1) {
            setQuan(quan - 1);
        }
    }

    
    
    useEffect(() => {
        setItem(() => {
           let a = props.products.filter(item => item.id === id);
           return a;
        })
    },[id, props.products]);
    

    return (
        <div id="productPageMain">
            <div id="productPageInnerMain">
                <div id="productPageLeft">
                    <img src={item[0].photo} alt="" />
                </div>

                <div id="productPageRight">
                    <h2 id="productPageTitle">{item[0].name.toUpperCase()}</h2>
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
