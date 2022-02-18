import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Store from "./Store.js";
import ProductPage from "./ProductPage.js";
import Contact from "./Contact.js";
import Cart from "./Cart.js";
import "../Styles/App.css";
import { useEffect, useState } from "react";
import fantaStraw from "../img/fantaStraw.jpg";
import sourPatch from "../img/sourPatch.png";
import popTarts from "../img/popTarts.jpg";
import hersB from "../img/hersB.jpg";
import skittles from "../img/skittles.jpg";
import reeses from "../img/reeses.png";
import peace from "../img/peace.jpg";

function App() {
	const [cart, setCart] = useState([]);
  const [totalItemsInCart, addTotalItemsInCart] = useState();

  function addQuan(id) {
    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) => {
        if(cartItem.id === id) {
          return {...cartItem, quan: cartItem.quan + 1}
        } 
        return cartItem;
      });
      return newCart;
    });
    addTotalItemsInCart(totalItemsInCart > 0 ? totalItemsInCart + 1 : 1);
  }

  function subQuan(id, itemQuan) {
    setCart((prevCart) => {
      const newCart = prevCart.map((cartItem) => {
        if(cartItem.id === id) {
          return {...cartItem, quan: (cartItem.quan > 1 ? cartItem.quan - 1 : cartItem.quan)}
        } 
        return cartItem;
      });
      return newCart;
    });

    addTotalItemsInCart(totalItemsInCart - 1);

    if(itemQuan === 1) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    }  
    
  }



	function addToCart(item, quan) {

    if(cart.some(newItem => newItem.id === item.id)) {
      setCart((prevCart) => {
        const newCart = prevCart.map((cartItem) => {
          if (item.id === cartItem.id) {
            return { ...cartItem, quan: (quan ? cartItem.quan + quan : cartItem.quan + 1)};
          }
          return cartItem;
  
        });
        return newCart;
      });

    }  else {

      setCart([
        ...cart,
        {
          ...item,
          quan: (quan ? quan : 1),
        },
      ]);
    }

    
    
    addTotalItemsInCart(() => {
      if(quan) {
        if(totalItemsInCart > 0) {
          return totalItemsInCart + parseInt(quan);
  
        } else {
          return parseInt(quan);
        }

      } else {
        if(totalItemsInCart > 0) {
          return totalItemsInCart + 1;
  
        } else {
          return 1;
        }
      }
    });

	}

	const [products, setProducts] = useState([
		{
			id: "fantaS",
			name: "Fanta Strawberry",
			photo: fantaStraw,
			price: "1.70",
			desc: "‘Fanta Strawberry’ is a refreshing fruity soda, a sweet strawberry flavoured variation of the classic carbonated soft drink – Fanta.",
		},
		{
			id: "sourP",
			name: "Sour Patch Kids",
			photo: sourPatch,
			price: "1.95",
			desc: "Give your tongue a real tangy-tingling sensation with this 3.5oz theater box of Sour Patch Kids! These delightfully fruity gummies are coated in a sour sugar that will fizz on your tongue and make your mouth-pucker, before giving way to a soft and sweet chew beneath. Each one of these delicious candies is bursting super sour, tongue tingling fruity flavours! Simply mouth-watering!",
		},
		{
			id: "popTart",
			name: "Pop Tarts Frosted Cherry",
			photo: popTarts,
			price: "1.39",
			desc: "One of America's favourite snacks, loaded with flavourful fillings and usually frosted with an icing to match. They're great straight out of the box, but even better toasted to warm and gooey perfection in a toaster or microwave oven. Each pastry consists of a delicious cherry-flavoured filling, pink frosting, and sparkly red sprinkles: it's cherry heaven!",
		},
		{
			id: "hersB",
			name: "Milk Chocolate Bunny",
			photo: hersB,
			price: "0.70",
			desc: "If you’re looking to add a little hippity-hoppity happiness to your Easter baskets this spring, look no further than HERSHEY'S Milk Chocolate Bunny.",
		},
		{
			id: "skittles",
			name: "Skittles Tropical",
			photo: skittles,
			price: "2.20",
			desc: "The Skittles range of flavours gets ever bigger with the addition of Skittles Tropical! Each bag contains Kiwi Lime, Banana Berry, Strawberry Starfruit, Mango Tangelo and Pineapple Passionfruit candies and trust us when we tell you they're AMAZING! Grab a bag and taste the exotic tropical side of the rainbow! Ultimate Summer snack.",
		},
		{
			id: "reeses",
			name: "Reese's 3 Peanut Butter Cups",
			photo: reeses,
			price: "1.39",
			desc: "A wise man once said the best things in life come in threes, and he was right! That's why there's 3 of Reese's finest peanut butter cups in this pack. All that delicious creamy, crumbly Reese's PNB has been lovely encased in a milk chocolate cup to celebrate this confectionery combination.",
		},
		{
			id: "peace",
			name: "Peace Tea Green Tea",
			photo: peace,
			price: "1.69",
			desc: "Green Tea Flavour Peace Iced Tea (often labeled Peace Tea) is a brand of iced tea beverages produced by the Coca-Cola Company. There's peace, happiness, and fresh iced tea flavor in every can of Peace Tea. Take a sip of something refreshingly delicious and enjoy Peace Tea today!- 695ml",
		},
	]);

	useEffect(() => {
		const back = document.getElementById("divForCartBackground");
		const carta = document.getElementById("shoppingCart");
		const closeCartBut = document.getElementById("closeCartBut");
    const imgInCart = Array.from(document.getElementsByClassName("cartImg"));
    const spanInCart = Array.from(document.getElementsByClassName("cartSpan"));

		const hideCart = () => {
			back.classList.remove("activeBack");
			carta.classList.remove("active");
		};

		back.addEventListener("click", hideCart);
		closeCartBut.addEventListener("click", hideCart);
    imgInCart.forEach((img) => {
      img.addEventListener("click", hideCart);
    });
    spanInCart.forEach((span) => {
      span.addEventListener("click", hideCart);
    })
        
		console.log(cart);

    

	});

	return (
		<BrowserRouter>
			<Nav cart={totalItemsInCart}></Nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/store" element={<Store products={products} addToCart={addToCart} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart} />} />
			</Routes>

			<Cart sub={subQuan} add={addQuan} cart={cart}></Cart>
			<div id="divForCartBackground" className=""></div>
			<footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
		</BrowserRouter>
	);
}

export default App;
