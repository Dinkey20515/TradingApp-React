import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import {login, singup} from "../../../API/api";

const SignUp = (props)=> {
	if (!props.show) {
		return null;
	}

    //let {userid, passwd} = useState('');
    let [loginData, setLoginData] = useState({
            "ret_code": 0,
    })

    const loginHandler = async()=> {
        let userid = document.getElementById("uid").value;
        let passwd = document.getElementById('password').value;
        await login(userid, passwd).then(data => {
            console.log({data})
            if (data.state && data.state === 0) {
                console.log('mt5 API error:',data.data)
                return ;
            }
            if (data.data) {
                //loginData = data.data;
                setLoginData(data.data)
            } else {
                return ;
            }
        });
        // axios.get(`http://10.10.13.238:5000/api/mt5/login?uid=${userid}&pass=${passwd}`)
        // .then(response => setLoginData(response));
    }

    
	return (undefined !== loginData.answer)?(
        <div className="signUpModal">
            <div className="login-form signUpModal-content">
                <div className="SignUpTopbar">
                <AiOutlineArrowLeft className="arrowBackIcon" onClick={props.onClose}/>
                    {/* <div >
                        <div className="fullChartSymbolSketText"> Bitcoin / USD </div>
                        <div className="fullChartSymboldetailText"> Bitcoin to US Dollar </div>
                    </div> */}
                </div>
                <div className="formTitle">Your account!</div>
                <div className="formSubTitle">Welcome to here! </div>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>Balance : </label><span className="account-span">{loginData.answer.Balance}</span>
                        </div>
                        <div className="input-container">
                            <label>Group : </label><span className="account-span">{loginData.answer.Group}</span>
                        </div>
                        <div className="input-container">
                            <label>Country : </label><span className="account-span">{loginData.answer.Country}</span>
                        </div>
                        <div className="input-container">
                            <label>Email : </label><span className="account-span">{loginData.answer.Email}</span>
                        </div>
                        <div className="input-container">
                            <label>Equity : </label><span className="account-span">{loginData.answer.EquityPrevDay}</span>
                        </div>
                        <div className="input-container">
                            <label>Leverage : </label><span className="account-span">{loginData.answer.Leverage}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
    :(
		<div className="signUpModal">
            <div className="login-form signUpModal-content">
                <div className="SignUpTopbar">
                <AiOutlineArrowLeft className="arrowBackIcon" onClick={props.onClose}/>
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
                            <input className="inputForm" type="text" name="uname" id="uid" required />
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input className="inputForm" type="password" name="pass" id="password" required />
                        </div>
                        <div className="button-container" onClick={loginHandler} >
                            <span className="logInButtonText" style={{color: 'white'}} onClick={loginHandler}>Continue</span>
                        </div>
                    </form>
                </div>
			</div>
		</div>
	);
}



export default SignUp;
