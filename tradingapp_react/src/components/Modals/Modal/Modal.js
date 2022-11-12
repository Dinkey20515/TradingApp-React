import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import React from 'react';


function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
            <div className="mymodal">
                <div className="mymodal-back" onClick={props.onClose}>
                </div>
                <div className="mymodal-content">
                    <div className="mymodal-header-1">
                        <h4 className="mymodal-title">Modal title</h4>
                    </div>
                    <div className="mymodal-body">
                        This is modal content
                    </div>
                    <div className="mymodal-footer-1">
                        <button className="button" onClick={props.onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
