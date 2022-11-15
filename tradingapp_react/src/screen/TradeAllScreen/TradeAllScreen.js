import React ,{ Component } from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ImPencil} from "react-icons/im";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import { useState } from "react";
import './TradeAllScreen.css';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import TradeAllScreenTopbar from "../../components/TradeAllScreenComponents/TradeAllScreenTopbar/TradeAllScreenTopbar";
import SummaryCard from "../../components/TradeAllScreenComponents/SummaryCard/SummaryCard";


function TradeAllScreen(props) {
    //=======page navigation=======
    const navigate = useNavigate();
    const symbolCardOnclickHandler = () => {
      let path = '/detailpage'
      navigate(path)
    }
	const [isactiveBottomNav, setisactiveBottomNav] = useState('Trade');
	return (
        <div className='tradeAllScreenContainer' >
            <TradeAllScreenTopbar />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='Bitcoin / USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <Row className='tradeAllScreenButtonRow'>
                <Col className="tradeAllScreenButtonCol">
                    <button onClick={symbolCardOnclickHandler} className="tradeAllScreenButton">
                        <ImPencil className="tradeAllScreenIcon"/>
                    </button>
                    <div className="tradeAllScreenButtonText"> Edit watchlist </div>
                </Col>
                <Col className="tradeAllScreenButtonCol">
                    <button className="tradeAllScreenButton">
                        <AiOutlineAppstoreAdd className="tradeAllScreenIcon" />
                    </button>
                    <div className="tradeAllScreenButtonText"> Add markets </div>
                </Col>
            </Row>
            <BottomNavbar index={isactiveBottomNav}/>
        </div>
	);
}

export default TradeAllScreen;