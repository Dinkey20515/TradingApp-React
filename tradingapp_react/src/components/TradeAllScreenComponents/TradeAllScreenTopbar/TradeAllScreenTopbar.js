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
				
				<li><CiSliderHorizontal  className="topBarIcon toTopRight"/>  </li>
				<li><AiOutlineMail className="topBarIcon toTopRight"/></li>
			</ul>
			<div className="topStatusHorizonBar" />
			<div className="TradeAllScreenTopNavbar">
				<ul className="topNavBarRow ">
					<li className="TradeAllScreenTopNavbarText">Favorite</li>
					<li className="TradeAllScreenTopNavbarText">Popular</li>
					<li className="TradeAllScreenTopNavbarText">New</li>
					<li className="TradeAllScreenTopNavbarText">WeekendTrading</li>
					<li className="TradeAllScreenTopNavbarText">ETF</li>
					<li className="TradeAllScreenTopNavbarText">Commodities</li>
					<li className="TradeAllScreenTopNavbarText">OilMarkets</li>
					<li className="TradeAllScreenTopNavbarText">Indices</li>
					<li className="TradeAllScreenTopNavbarText">Forex</li>
					<li className="TradeAllScreenTopNavbarText navActive">Cryptos</li>
					<li className="TradeAllScreenTopNavbarText">Shares</li>
					<li className="TradeAllScreenTopNavbarText">Futures</li>
				</ul>
			</div>
		</div>
	);
}
export default TradeAllScreenTopbar;
