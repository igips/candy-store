import "../Styles/Home.css";
import smallImg1 from "../img/smallImg.jpg";
import smallImg2 from "../img/smallImg2.jpg";
import smallImg3 from "../img/smallImg3.jpg";
import smallImg4 from "../img/smallImg4.jpg";
import Carousel from "./Carousel.js";

function Home() {
	

	return (
		<main>
			<div id="mainContainer">
				
            <Carousel></Carousel>
                <div id="mainLeft">
					<div id="grid">
						<div className="imgDiv">
							<img src={smallImg1} alt="" />
                            <span>THEATER BOXES</span>
						</div>
						<div className="imgDiv">
							<img src={smallImg2} alt="" />
                            <span>POP TARTS</span>
						</div>
						<div className="imgDiv">
							<img src={smallImg4} alt="" />
                            <span>FANTA</span>
						</div>
						<div className="imgDiv">
							<img src={smallImg3} alt="" />
                            <span>UNDER $1!</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
