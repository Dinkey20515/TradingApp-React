import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TradeOneScreenTopbar.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai"; 

function TradeOneScreenTopbar(props) {
	return (
		<div className="TradeOneScreenTopbarContainer">

                <AiOutlineLeft className="arrowBackIcon" />
                <div>
                    <div className="symbolSketText"> BITCOIN/USD </div>
                    <div className="symboldetailText"> Bitcoin to US Dollar </div>
                </div>
                <AiOutlinePlusCircle className="plusIcon"/>
			<button className="addAlertButton">
                <AiOutlineBell className="addAlertBellIcon"/>
                <span className="addAlertText">Add Alert</span>
            </button>
		</div>
	);
}
export default TradeOneScreenTopbar;
