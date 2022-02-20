import "../Styles/Home.css";
import smallImg1 from "../img/smallImg.jpg";
import smallImg2 from "../img/smallImg2.jpg";
import smallImg3 from "../img/smallImg3.jpg";
import smallImg4 from "../img/smallImg4.jpg";
import Carousel from "./Carousel.js";
import { Link } from "react-router-dom";

function Home() {
	const a = "A"
	return (
		<main>
			<div id="mainContainer">
				<Carousel></Carousel>
				<div id="mainLeft">
					<div id="grid">
						<div className="imgDiv">
							<Link to={`/store/candy`}>
								<img src={smallImg1} alt="" />
							</Link>
							<Link className="homeLink" to={`/store/candy`}>
								<span>CANDY</span>
							</Link>
						</div>
						<div className="imgDiv">
							<Link to={`/store/poptarts`}>
								<img src={smallImg2} alt="" />
							</Link>
							<Link className="homeLink" to={`/store/poptarts`}>
								<span>POP TARTS</span>
							</Link>
						</div>
						<div className="imgDiv">
							<Link to={`/store/fanta`}>
								<img src={smallImg4} alt="" />
							</Link>
							<Link className="homeLink"  to={`/store/fanta`}>
								<span>FANTA</span>
							</Link>
						</div>
						<div className="imgDiv">
							<Link to={`/store/under`}>
								<img src={smallImg3} alt="" />
							</Link>
							<Link className="homeLink" to={`/store/under`}>
								<span>UNDER £1!</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
