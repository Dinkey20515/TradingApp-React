import "bootstrap/dist/css/bootstrap.min.css";
import "./LogInScreen.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import SignUp from "../../components/Modals/ModalSignUp/SignUp";

// import Slide1 from "../../assets/intro-pic1.jpg";
// import Slide2 from "../../assets/intro-pic2.jpg";
// import Slide3 from "../../assets/intro-pic3.jpg";
// import Slide4 from "../../assets/intro-pic4.jpg";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

function LogInScreen() {
	const navigate = useNavigate();
	const loginHandler = () => {
		console.log("nav");
		let path = "/trade";
		navigate(path);
	};
	const [show, setShow] = useState(false);
	
	return (
		<div className="logInScreenContainer">
			<div className="titleSection">
				<p>capital com</p>
				<br />
				<span>Study trends with powerful charts</span>
			</div>
			<div className="loginButtons">
				
				<button className="google" onClick={loginHandler}>
					<FcGoogle className="googleIcon" />
					Continue with Google
				</button>
				<button className="Facebook">
					<BsFacebook className="FacebookIcon" />
					Contnue with Facebook
				</button>
				<button className="Apple">
					<BsApple className="AppleIcon" />
					Continue with Apple
				</button>
				
				<button className="email" onClick={()=>setShow(true)}>Continue with Email</button>
				
				<div className="LogInText">
					<span>Already have an account?</span>
					<span className="LogIn-p"> Log in</span>
				</div>
				<div className="descriptionText">
					<span>By creating an account,I accept the Privacy Policy,</span>
					<span>Trading is risky and you may lose your invested capital</span>
				</div>
			</div>
		<SignUp show={show} onClose={()=>setShow(false)}/> 
		</div>
	);
}

export default LogInScreen;
