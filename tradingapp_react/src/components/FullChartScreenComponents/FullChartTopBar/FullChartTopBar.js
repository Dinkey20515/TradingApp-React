import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FullChartTopBar.css";
import { FiMinimize } from "react-icons/fi";

function FullChartTopBar(props) {
	return (
		<div className="FullChartTopbarContainer">
                <FiMinimize className="minBackIcon" onClick={props.onClick}/>
                <div>
                    <div className="fullChartSymbolSketText"> Bitcoin / USD </div>
                    <div className="fullChartSymboldetailText"> Bitcoin to US Dollar </div>
                </div>
		</div>
	);
}
export default FullChartTopBar;
