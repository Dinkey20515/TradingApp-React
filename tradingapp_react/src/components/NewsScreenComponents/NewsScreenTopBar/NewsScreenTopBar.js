import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsScreenTopBar.css";

import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSliderHorizontal } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai"; 

function NewsScreenTopBar(props) {
	return (
		<div className="NewsScreenTopbarContainer">
			<ul className="NewsScreenTopStatusbar">
			    <li><MdKeyboardArrowDown className="topBarIcon toTopLeft" /></li>
				<li  className="toTopLeft NewsScreenTopStatusbarText"> 0 </li>
				
				<li><CiSliderHorizontal  className="topBarIcon toTopRight"/>  </li>
				<li><AiOutlineMail className="topBarIcon toTopRight"/></li>
			</ul>
			<div className="topStatusHorizonBar" />
		</div>
	);
}
export default NewsScreenTopBar;
