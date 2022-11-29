import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

import ModalPlusIcon from "./../../Modals/ModalPlusIcon/PlusIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TradeOneScreenTopbar.css";

function TradeOneScreenTopbar(props) {
	const [showPlus, setShowPlus] = useState(false);
	return (
		<div className="TradeOneScreenTopbarContainer">
			<AiOutlineArrowLeft className="arrowBackIcon" onClick={props.onClick} />
			<div>
				<div className="symbolSketText">{props.title}</div>
				{/* <div className="symboldetailText"> Bitcoin to US Dollar </div> */}
			</div>
			<AiOutlinePlusCircle
				className="plusIcon"
				onClick={() => setShowPlus(true)}
			/>
			<ModalPlusIcon show={showPlus} onClose={() => setShowPlus(false)} />
		</div>
	);
}
export default TradeOneScreenTopbar;
