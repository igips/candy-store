import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import background from "../img/back.jpg";
import back2 from "../img/back2.jpg";
import back3 from "../img/back3.jpg";
import back4 from "../img/back4.jpg";

function MyCarousel() {
	return (
		<div id="mainRight">
			<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={background} alt="First slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={back2} alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={back3} alt="Third slide" />
					</div>
                    <div className="carousel-item">
						<img className="d-block w-100" src={back4} alt="Fourth slide" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyCarousel;
