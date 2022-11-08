import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInScreen.css";
import { useNavigate } from "react-router-dom";
import React from "react";
// import "react-slideshow-image/dist/styles.css";
import SimpleImageSlider from "react-simple-image-slider";

import Slide1 from "./img/carousell/intro-pic1.jpg";
import Slide2 from "./img/carousell/intro-pic2.jpg";
import Slide3 from "./img/carousell/intro-pic3.jpg";
import Slide4 from "./img/carousell/intro-pic4.jpg";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

const images = [
	{
		url: Slide1,
		// caption: 'Slide 1'
	},
	{
		url: Slide2,
		// caption: 'Slide 2'
	},
	{
		url: Slide3,
		// caption: 'Slide 3'
	},
	{
		url: Slide4,
		// caption: 'Slide 4'
	},
];

function LogInScreen() {

  const navigate = useNavigate();
  const loginHandler = () => {
    console.log("nav");
    let path = '/chart'
    navigate(path)
  }

	return (
			<div className="screenContainer">
				<SimpleImageSlider
					className="rise"
					width={"100%"}
					height={"100%"}
					images={images}
					showBullets={true}
					showNavs={false}
					autoPlay={true}
					slideDuration={4}
					autoPlayDelay={2}
				/>
				<div className="titleSection">
					<p>capital com</p>
          <br/>
					<span>Study trends with powerful charts</span>
				</div>
				<div className="loginButtons">
					<button  className="google" onClick={loginHandler}>
						<FcGoogle className="buttonIcon" />
						Continue with Google
					</button>
					<button  className="google">
						<BsFacebook className="buttonIcon" />
						Contnue with Facebook
					</button>
					<button  className="google">
						<BsApple className="buttonIcon" />
						Continue with Apple
					</button>
					<button  className="email">
						Continue with Email
					</button>
					<div className="LogIn">
						<span>Already have an account?</span>
						<span className="LogIn-p"> Log in</span>
					</div>
					<div className="descriptionText">
						<span>By creating an account,I accept the Privacy Policy,</span>
						<span>Trading is risky and you may lose your invested capital</span>
					</div>
				</div>
			</div>
		
	);
}

export default LogInScreen;
