import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";
import Store from "./Store.js";
import ProductPage from "./ProductPage.js";
import Contact from "./Contact.js";


import "../Styles/App.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Contact></Contact>
      <footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
      
      
    
    </>
  );
}

export default App;
