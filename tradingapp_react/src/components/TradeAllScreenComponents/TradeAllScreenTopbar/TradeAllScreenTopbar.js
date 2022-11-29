import React ,{ Component } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TradeAllScreenTopbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai"; 

function TradeAllScreenTopbar() {
	const topNavbarOnclick=(str)=>{
		$(".navActive").removeClass("navActive");
		console.log(str);
		$(str).addClass("navActive");
		var myDiv = $(str);
		console.log(myDiv);
		var scrollto = 300;
		console.log(scrollto);
		myDiv.animate({ scrollLeft:  scrollto});
		// document.getElementsByClassName("list7")[0].focus();
		// console.log(document.getElementsByClassName("list7")[0]);
	}
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
				<ul className="topNavBarRow">
					{/* <li className="list1 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list1")}>Favorite</li>
					<li className="list2 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list2")}>Popular</li> */}
					<li className="list3 TradeAllScreenTopNavbarText navActive" onClick={(string)=>topNavbarOnclick(".list3")}>Shares</li>
					{/* <li className="list4 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list4")}>WeekendTrading</li>
					<li className="list5 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list5")}>ETF</li>
					<li className="list6 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list6")}>Commodities</li>
					<li className="list7 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list7")}>OilMarkets</li>
					<li className="list8 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list8")}>Indices</li>
					<li className="list9 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list9")}>Forex</li>
					<li className="list10 TradeAllScreenTopNavbarText" onClick={(string)=>topNavbarOnclick(".list10")}>Cryptos</li> */}
				</ul>
			</div>
		</div>
	);
}
export default TradeAllScreenTopbar;
