import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import background from "../img/back.jpg";
import back2 from "../img/back2.jpg";
import back3 from "../img/back3.jpg";
import back4 from "../img/back4.jpg";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
	

	return (
		<div id="mainRight">
			<Carousel>
				<Link to={`/store/candy`} className="carousel-item" >
						<img className="d-block w-100" src={background} alt="First slide" /> 
				</Link >
				<Link to={`/store/chocolate`} className="carousel-item" >
					<img className="d-block w-100" src={back2} alt="Second slide" /> 
				</Link>
				<Link to={`/store/peacetea`} className="carousel-item" >
					<img className="d-block w-100" src={back3} alt="Third slide" />
				</Link>
				<Link to={`/store/hershey's`} className="carousel-item" >
					<img className="d-block w-100" src={back4} alt="Fourth slide" /> 
				</Link>
			</Carousel>
		</div>
	);
}

export default MyCarousel;
