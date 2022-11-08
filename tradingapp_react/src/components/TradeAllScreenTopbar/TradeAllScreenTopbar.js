import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TradeAllScreenTopbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai"; 

function TradeAllScreenTopbar(props) {
	return (
		<div className="TradeAllScreenTopbarContainer">
			<ul className="TradeAllScreenTopStatusbar">
			    <li><MdKeyboardArrowDown className="topBarIcon toTopLeft" /></li>
				<li  className="toTopLeft TradeAllScreenTopStatusbarText"> 0 </li>
				
				<li className="topBarIcon toTopRight"><CiSliderHorizontal />  </li>
				<li className="topBarIcon toTopRight"><AiOutlineMail /></li>
			</ul>
			<div className="topStatusHorizonBar" />
			<div className="TradeAllScreenTopNavbar">
				<ul className="topNavBarRow ">
					<li className="TradeAllScreenTopStatusbarText">Favorite</li>
					<li className="TradeAllScreenTopStatusbarText">Popular</li>
					<li className="TradeAllScreenTopStatusbarText">New</li>
					<li className="TradeAllScreenTopStatusbarText">WeekendTrading</li>
					<li className="TradeAllScreenTopStatusbarText">ETF</li>
					<li className="TradeAllScreenTopStatusbarText">Commodities</li>
					<li className="TradeAllScreenTopStatusbarText">OilMarkets</li>
					<li className="TradeAllScreenTopStatusbarText">Indices</li>
					<li className="TradeAllScreenTopStatusbarText">Forex</li>
					<li className="TradeAllScreenTopStatusbarText">Cryptos</li>
					<li className="TradeAllScreenTopStatusbarText">Shares</li>
					<li className="TradeAllScreenTopStatusbarText">Futures</li>
				</ul>
			</div>
		</div>
	);
}
export default TradeAllScreenTopbar;
