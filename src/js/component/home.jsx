import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="text-center container">
				<Jumbotron />
				<br />
				<div className="row d-flex justify-content-between">
					<div className="col">
						<Card imagen="https://static.guiainfantil.com/media/40268/c/sudamina-granitos-en-los-bebes-por-el-calor-md.jpg" titulo="bebe" />
					</div>
					<div className="col">
						<Card imagen="https://estaticos-cdn.prensaiberica.es/clip/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg" titulo="perro" />
					</div>
					<div className="col">
						<Card imagen="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1422023439-64f1eaf518ace.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*" titulo="perro2"/>
					</div>
				</div>
			</div>
			
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
