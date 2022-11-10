import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import React from 'react';


function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
            <div className="modal">
                <div className="modal-back" onClick={props.onClose}>
                </div>
                <div className="modal-content">
                    <div className="modal-header-1">
                        <h4 className="modal-title">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        This is modal content
                    </div>
                    <div className="modal-footer-1">
                        <button className="button" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
