import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./../Modal/Modal.css";
import "./PlusIcon.css";


function Modal(props) {
	if (!props.show) {
		return null;
	}
	return (
		<div className="modal">
			<div className="modal-back" onClick={props.onClose}></div>
			<div className="modal-content">
				<div className="modal-body">
					<div className="header-section">
						Choose watchlist
						<p>
							<AiFillPlusCircle className="plusIconButton" />
							Add a new watch list
						</p>
					</div>
					<div className="body-section">
						<div className="pSection">Favourites</div>
						<div className="checkSection">
							<Form.Check name="group1" />
						</div>
					</div>
					<div className="buttonGroup">
						<div className="buttonStyle">Cancel</div>
						<div className="buttonStyle addStyle">Add</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
