import "bootstrap/dist/css/bootstrap.min.css";
import "./../Modal/Modal.css";
import "./MarginRequired.css";
import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { IoMdInformationCircleOutline } from "react-icons/io";
function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
      
            <div className="modal">
                <div className="modal-back" onClick={props.onClose}>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="header-section">
                        Margin<AiFillPlayCircle className="playIcon"/>
                        <p>Money required to open a trade</p>
                        </div>
                        <p className="marginRight">Leverage(2:1)</p>
                        <p className="marginRight colorBlue">$876.77</p>
                        <div className="panel">
                                <p className="marginHalfRight">Amount from leverage</p>
                                <p className="marginHalf">Margin</p>
                        </div>
                        <div className="panel">
                            <p className="marginHalfRightbar colorGrey">|</p>
                            <p className="marginHalf colorBlue">|</p>
                        </div>
                        <div className="circleProgressBar">
                            <CircularProgressbarWithChildren
                                value={66}
                                styles={buildStyles({
                                    // rotation: 0.25,               
                                    strokeLinecap: 'butt',              
                                    pathTransitionDuration: 0.5,                             
                                    pathColor: '#2ab644',
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                    
                                })}
                            >   
                                <div className="dealStyle">
                                    <strong>DEAL SIZE</strong>  
                                        <IoMdInformationCircleOutline className='infoIcon'/>
                                </div>
                                <div className="priceStyle">
                                    <strong>$17,231,12</strong> 
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                        <button className="okButton">OK</button>     
                    </div>     
                </div>
            </div>
        );
}

export default Modal;
