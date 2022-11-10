import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MiddleChartContainer.css";
import { AiOutlineBell } from "react-icons/ai";
import { useState } from "react";

function MiddleChartContainer(props) {
	const [showPlus, setShowPlus] = useState(false);
	return (
		<div className="middleChartContainer">
			<button className="addAlertButton">
				<AiOutlineBell className="addAlertBellIcon" />
				<span className="addAlertText">Add Alert</span>
			</button>
		</div>
	);
}
export default MiddleChartContainer;
