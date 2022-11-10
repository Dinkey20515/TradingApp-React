import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TradeOnePanel.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import {BsSliders} from "react-icons/bs";
import {TbMinusVertical} from "react-icons/tb";
import {useState} from "react";
import ModalNumberType from "./../../Modals/ModalNumberType/NumberType";
import ModalMarginRequired from "./../../Modals/ModalMarginRequired/MarginRequired";

function TradeOnePanel(props) {
    const [show, setShow] = useState(false);
    const [showMargin, setShowMargin] = useState(false);

    return (
            <div className='panelContainer'>
                <Row className='buttonRow'>
                    <Col className="buttonCol">
                        <button className="sellBuyButton sellButton">
                            <div className="buttonText"> SELL </div>
                            <div className="priceText"> {props.ask} </div>
                        </button>
                    </Col>
                    <Col className="buttonCol">
                        <button className="sellBuyButton buyButton">
                            <div className="buttonText"> BUY </div>
                            <div className="priceText"> {props.bid} </div>
                        </button>
                    </Col>
                </Row>
                <Row className='buttonRow'>
                    <Col xs={10} className="amountCol">
                        <button className="priceButton" onClick={()=>setShow(true)}>
                            <MdKeyboardArrowDown className="arrowIcon" />
                            <div>
                                <div className="symbolText"> EUR </div>
                                <div className="priceText"> {props.price} </div>
                            </div>
                        </button>
                        <ModalNumberType show={show} onClose={()=>setShow(false)}/>
                    </Col>
                    <Col xs={2}>
                        <BsSliders className="sliderIcon" />
                    </Col>
                </Row>
                <div className="horizonLine" />
                <div className="symbolRow">
                    <span className="symbolText toLeft"> MARGIN REQUIRED </span>
                    <span className="symbolText toRight"> EUR </span>
                </div>
                <div className="symbolRow">
                    <div onClick={()=>setShowMargin(true)}>
                        <span className="priceAsk toLeft"> ${props.price} </span>
                        {/* <span className="priceVs toLeft"> </span> */}
                        <TbMinusVertical className="priceVs toLeft"/>
                        <span className="priceBid toLeft"> ${props.price} </span>
                        <span className="priceAmount toRight"> ${props.price} </span>
                    </div>
                    <ModalMarginRequired show={showMargin} onClose={()=>setShowMargin(false)}/>
                </div>
            </div>
    );
}

export default TradeOnePanel;
