import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PortfolioScreenTopbar.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai"; 

function PortfolioScreenTopbar(props) {
	return (
		<div className="PortfolioScreenTopbarContainer">
			<ul className="PortfolioScreenTopStatusbar">
			    <li><MdKeyboardArrowDown className="topBarIcon toTopLeft" /></li>
				<li  className="toTopLeft PortfolioScreenTopStatusbarText"> 0 </li>
				
				<li><CiSliderHorizontal  className="topBarIcon toTopRight"/>  </li>
				<li><AiOutlineMail className="topBarIcon toTopRight"/></li>
			</ul>
			<div className="topStatusHorizonBar" />
			<div>
                <button className={"PortfolioScreenToptablink tab-active"}  onClick={(e)=>this.openIndicators('indicator', e, 2)}
                    id={"defaultOpen"}>
                    Trades
                </button>
                <button className={"PortfolioScreenToptablink"}  onClick={(e)=>this.openIndicators('drawings', e, 2)}>
                    Orders
                </button>
                <button className={"PortfolioScreenToptablink"}  onClick={(e)=>this.openIndicators('drawings', e, 2)}>
                    Alerts
                </button>
			</div>
		</div>
	);
}
export default PortfolioScreenTopbar;
