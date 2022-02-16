import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Store from "./Store.js";
import ProductPage from "./ProductPage.js";
import Contact from "./Contact.js";
import Cart from "./Cart.js";



import "../Styles/App.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const back = document.getElementById("divForCartBackground");
    const cart = document.getElementById("shoppingCart");

    const hideCart = () => {
      back.classList.remove("activeBack");
      cart.classList.remove("active");
    }

    back.addEventListener("click", hideCart);
  }); 





  return (
    <>
      <Nav></Nav>
      <Contact></Contact>
      <Cart></Cart>
      <div id="divForCartBackground" className="activeBack"></div>
      <footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
      
      
    
    </>
  );
}

export default App;
