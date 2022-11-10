import React ,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import minichart from '../../../assets/minichart.jpg'; 
import "./SummaryCard.css";

function SummaryCard(props) {
    return (
            <div className='summaryCardContainer'>
                <div className="summaryCardSymbolText"> {props.symbol} </div>
                <Row className='summaryCardRow'>
                    <Col>
                        <div className="summaryAskText"> {props.ask} </div>
                        <button className="summaryButton">
                            <div className="summaryCardButtonText"> Sell </div>
                        </button>
                    </Col>
                    <Col>
                        <div className="summaryRateText"> {props.rate} </div>
                        <img src={minichart} alt="Logo" className="miniChart"/>
                    </Col>
                    <Col>
                        <div className="summaryBidText"> {props.bid} </div>  
                        <button className="summaryButton">
                            <div className="summaryCardButtonText"> buy </div>
                        </button>
                    </Col>
                </Row>
            </div>
    );
}

export default SummaryCard;
