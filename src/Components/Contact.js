import "../Styles/Contact.css";

function Contact() {
	const height = { height: "30px" };

	return (
		<div id="contactMain">
			<div className="contactText">
				<i style={height} className="fa-solid fa-phone"></i>
				<span>717-814-9555</span>
			</div>
            <div className="contactText">
				<i style={height} className="fa-solid fa-at"></i>
				<span>orders@candystore.com</span>
			</div>
            <div className="contactText">
				<i style={height} className="fa-solid fa-location-dot"></i>
				<span>14W Philadelphia St • York PA 17401</span>
			</div>
		</div>
	);
}

export default Contact;
