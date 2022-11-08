import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PriceRange.css";
import {MdArrowDropDown} from "react-icons/md";

function PriceRange(props) {
    return (
        <div className='panelContainer'>
            <div className="buttonClass">
                <button className="priceRangeButton active">
                    Daily
                </button>
                <button className="priceRangeButton">
                    Weekly
                </button>
                <button className="priceRangeButton">
                    Monthly
                </button>
                <button className="priceRangeButton">
                    Yearly
                </button>
            </div>
            <div className="lowHigh">
                <MdArrowDropDown className="arrowDownIcon" />
                <span className="lowText toLeft">LOW</span>
                <span className="lowText toRight">HIGH</span>
                <div className="horizonBar" />
                <span className="lowHighPrice toLeft">{props.price}</span>
                <span className="lowHighPrice toRight">{props.price}</span>
            </div>
            
        </div>
        
    );
}

export default PriceRange;
