import React from "react";
import Form from "react-bootstrap/Form";
import renderHTML from "react-render-html";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Modal/Modal.css";
import "./ModalMiddleChartPanelButton.css";


function ModalMiddleChartPanelButton(props) {
	if (!props.show) {
		return null;
	}
	let g_chartUnit = ["1m", "5m", "15m", "30m", "1H", "5H"];
	let g_chartType = [
		"Bars",
		"Candles",
		"Line",
		"Area",
		"BaseLine",
		"Kagi",
		"PointAndFigure",
		"LineBreak",
		"HeikenAshi",
		"HollowCandles",
		"BaseLine",
	];
	let g_chartType_svg = [
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40" fill="currentColor"><path d="M18 6h1v16h-1z"></path><path d="M18.5 18H22v1h-3.5zM15 13h3.5v1H15zm-5-6h1v16h-1z"></path><path d="M10.5 9H14v1h-3.5zM7 20h3.5v1H7z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"></path><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"></path><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"></path></svg>`,
		``,
		``,
		``,
		``,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"></path><path d="M10 4h1v3.5h-1z"></path><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"></path><path d="M18 2h1v3.5h-1z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"></path><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"></path></svg>`,
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="40" height="40"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"></path><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"></path><path stroke-linecap="round" d="M5.5 16.5l-1 2"></path><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"></path></g></svg>`,
	];

	let str2 = g_chartType.map((item, i) => {
		if (i < 4 || i > 8) {
			return (
				<li key={i} onClick={(e) => this.drawByChartType(i, e)}>
					{renderHTML(g_chartType_svg[i])}
				</li>
			);
		}
	});
	let str4 = g_chartUnit.map((item, i) => {
		return (
			<li key={i} onClick={(e) => this.drawByChartUnit(i, e)}>
				{item}{" "}
			</li>
		);
	});
	return (
		<div className="modal">
			<div className="modal-back" onClick={props.onClose}></div>
			<div className="modal-content">
				<div className="modal-header-1">
					<div className="done-button">Done</div>
				</div>
				<div className="modal-body">
					<div className="switchButtonPanel">
						<div className="switchButtonLabel">Show positions</div>
						<div className="switchButton">
							<Form>
								<Form.Check type="switch" id="custom-switch1" />
							</Form>
						</div>
					</div>
					<div className="switchButtonPanel">
						<div className="switchButtonLabel">Show orders</div>
						<div className="switchButton">
							<Form>
								<Form.Check type="switch" id="custom-switch2" />
							</Form>
						</div>
					</div>
					<div className="switchButtonPanel">
						<div className="switchButtonLabel">Show price</div>
						<div className="switchButton">
							<p>Bid&nbsp;:&nbsp;</p>
							<p className="colorBrown">Ask</p>
						</div>
					</div>
					<div className={"scroll-none"}>
						<ul className={"inline-list"} id={"chart-list"}>
							{str2}
						</ul>
					</div>
					<div className={"scroll-none"}>
						<ul className={"inline-list-2"}>{str4}</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalMiddleChartPanelButton;
