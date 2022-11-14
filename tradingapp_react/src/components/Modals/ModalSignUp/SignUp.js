import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

function SignUp(props) {
	if (!props.show) {
		return null;
	}

	return (
		<div className="signUpModal">
            <div className="login-form signUpModal-content">
                <div className="SignUpTopbar">
                <AiOutlineArrowLeft className="arrowBackIcon" />
                    {/* <div >
                        <div className="fullChartSymbolSketText"> Bitcoin / USD </div>
                        <div className="fullChartSymboldetailText"> Bitcoin to US Dollar </div>
                    </div> */}
                </div>
                <div className="formTitle">Capital<BsDot className="formPointTitle" />Com</div>
                <div className="formSubTitle">Create your free account to trade global markets </div>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>User ID</label>
                            <input className="inputForm" type="text" name="uname" required />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input className="inputForm" type="password" name="pass" required />
                        </div>
                        <div className="button-container">
                            <span className="logInButtonText">Continue</span>
                        </div>
                    </form>
                </div>
			</div>
		</div>
	);
}

export default SignUp;
