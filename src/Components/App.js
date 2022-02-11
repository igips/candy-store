import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Home from "./Home.js";

import "../Styles/App.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
      
      
    
    </>
  );
}

export default App;
