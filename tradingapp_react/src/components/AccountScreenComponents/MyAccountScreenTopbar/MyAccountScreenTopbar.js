import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyAccountScreenTopbar.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai"; 

function MyAccountScreenTopbar() {
	return (
		<div className="myAccountScreenTopbarContainer">
			<ul className="myAccountScreenTopStatusbar">
			    <li><MdKeyboardArrowDown className="topBarIcon toTopLeft" /></li>
				<li  className="toTopLeft myAccountScreenTopStatusbarText"> 0 </li>
				
				<li><CiSliderHorizontal  className="topBarIcon toTopRight"/>  </li>
				<li><AiOutlineMail className="topBarIcon toTopRight"/></li>
			</ul>
			<div className="topStatusHorizonBar" />
			<div>
                <button className={"myAccountScreenToptablink tab-active"}  onClick={(e)=>this.openIndicators('indicator', e, 2)}
                    id={"defaultOpen"}>
                    Live Accounts
                </button>
                <button className={"myAccountScreenToptablink"}  onClick={(e)=>this.openIndicators('drawings', e, 2)}>
                    Demo Accounts
                </button>
			</div>
		</div>
	);
}
export default MyAccountScreenTopbar;
