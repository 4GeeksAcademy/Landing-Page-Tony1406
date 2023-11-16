import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
			<Navbar />
			<Jumbotron />
			<br/>
			<div className="row">
				<div className="col">
					<Card imagen="https://static.guiainfantil.com/media/40268/c/sudamina-granitos-en-los-bebes-por-el-calor-md.jpg" titulo="bebe"/>
				</div>
				<div className="col">
					<Card imagen="https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg" titulo="perro"/>
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;
