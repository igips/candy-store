import "../Styles/Home.css";
import background from "../img/back.jpg";
import smallImg1 from "../img/smallImg.jpg";
import smallImg2 from "../img/smallImg2.jpg";
import smallImg3 from "../img/smallImg3.jpg";
import smallImg4 from "../img/smallImg4.jpg";

function Home() {
	const styles = {
		container: {
			backgroundImage: `url(${background})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			color: "black",
		},
	};

	return (
		<main>
			<div id="mainContainer">
				
				<div style={styles.container} id="mainRight"></div>
                <div id="mainLeft">
					<div id="grid">
						<div className="imgDiv">
							<img src={smallImg1} alt="" />
							THEATER BOXES
						</div>
						<div className="imgDiv">
							<img src={smallImg2} alt="" />
							POP TARTS
						</div>
						<div className="imgDiv">
							<img src={smallImg4} alt="" />
							FANTA
						</div>
						<div className="imgDiv">
							<img src={smallImg3} alt="" />
							UNDER $1!
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
