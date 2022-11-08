import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MiddleChartControlPanel.css";
import { AiOutlineExpand } from "react-icons/ai";

function MiddleChartControlPanel(props) {
	return (
		<div className="middleChartPanelContainer">
			<button className="middleChartControlPanelButton middleChartButtonActive">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 28 28"
					width="28"
					height="28"
					fill="none"
					stroke="#bb8761"
                    strokeWidth={1.5}
				>
					<path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"></path>
				</svg>
			</button>
			<button className="middleChartControlPanelButton">1D</button>
			<button className="middleChartControlPanelButton">5D</button>
			<button className="middleChartControlPanelButton">2W</button>
			<button className="middleChartControlPanelButton">3M</button>
			<button className="middleChartControlPanelButton">6M</button>
			<button className="middleChartControlPanelButton">
				<AiOutlineExpand className="midChartExpandIcon"/>
			</button>
		</div>
	);
}

export default MiddleChartControlPanel;
