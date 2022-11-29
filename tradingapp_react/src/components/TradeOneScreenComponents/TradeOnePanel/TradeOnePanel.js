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
import { useStore } from "usestore-react";
import axios from 'axios';
import {sendOrderRequest} from "../../../API/api";

function TradeOnePanel(props) {
    const [show, setShow] = useState(false);
    const [showMargin, setShowMargin] = useState(false);
    const [ask] = useStore("askprice");
    const [bid] = useStore("bidprice");
    //console.log(props)
    const orderAction = (type)=> {
        let volume = document.getElementById('volume').innerText;
        let PriceOrder = props.userInfo.Leverage * (type?bid:ask)
        let option = { 
            "Login" : props.userInfo.Login,     // client id
            "Symbol" : props.symbol,            // symbol name
            "Volume" : 1,//volume*1,            // volume
            "TypeFill" : 0,                     // fill or kill
            "Type" : type,                      // sell or buy type   0:buy, 1:sell
            "PriceOrder" : PriceOrder,          // price
            "Digits" : 3                        // 0.545
          }
          axios.post(`http://localhost:5000/api/mt5/sendRequest`, option)
            .then(res => {
                console.log(res);
                alert("successful")
            })

    }

    return (
            <div className='panelContainer'>
                <Row className='buttonRow'>
                    <Col className="buttonCol">
                        <button className="sellBuyButton sellButton" onClick={()=>orderAction(1)}>
                            <div className="buttonText"> SELL </div>
                            <div className="priceText"> {ask} </div>
                        </button>
                    </Col>
                    <Col className="buttonCol">
                        <button className="sellBuyButton buyButton" onClick={()=>orderAction(0)}>
                            <div className="buttonText"> BUY </div>
                            <div className="priceText"> {bid} </div>
                        </button>
                    </Col>
                </Row>
                <Row className='buttonRow'>
                    <Col xs={10} className="amountCol">
                        <button className="priceButton" onClick={()=>setShow(true)}>
                            <MdKeyboardArrowDown className="arrowIcon" />
                            <div>
                                <div className="symbolText"> volume </div>
                                <div className="priceText" id="volume">{1}</div>
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
                    <span className="symbolText toRight"> AVAILABLE </span>
                </div>
                <div className="symbolRow">
                    <div onClick={()=>setShowMargin(true)}>
                        <span className="priceAsk toLeft"> ${(ask/props.userInfo.Leverage).toFixed(3)} </span>
                        {/* <span className="priceVs toLeft"> </span> */}
                        <TbMinusVertical className="priceVs toLeft"/>
                        <span className="priceBid toLeft"> ${(bid/props.userInfo.Leverage).toFixed(3)} </span>
                        <span className="priceAmount toRight"> ${props.userInfo.Balance} </span>
                    </div>
                    <ModalMarginRequired show={showMargin} onClose={()=>setShowMargin(false)}/>
                </div>
            </div>
    );
}

export default TradeOnePanel;
