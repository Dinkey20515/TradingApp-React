import React ,{ Component, useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chart from '../MiniChartContainer/MiddleChartContainer';

import { getData } from "./utils"

import minichart from '../../../assets/minichart.jpg'; 
import "./SummaryCard.css";

function SummaryCard(props) {

    const {ask, bid, symbol, chartdata, symbolCardOnclickHandler, rate } = props
    const prevProps = usePrevious({ask, bid});
    const [askstate, setAskstate] = useState(0);
    const [bidstate, setBidstate] = useState(0);

    const [testData, setTestData] = useState([]);

    useEffect(() => {
        if (props && prevProps) {
            if(prevProps.ask <= ask) 
                setAskstate(1);
            else
                setAskstate(0);
            if(prevProps.bid <= bid) 
                setBidstate(1);
            else
                setBidstate(0);
        }
        
    }, [ask, bid])

    const onSymbolClick = ()=> {
        // alert(123)
        symbolCardOnclickHandler(symbol);
    }

    return (
        <div className='summaryCardContainer'>
            <div className="summaryCardSymbolText"> {symbol} </div>
            <Row className='summaryCardRow'>
                <Col>
                    <div className={askstate>0? 'card-text summaryBlueText':'card-text summaryRedText'}> {ask} </div>
                    <button className="summaryButton">
                        <div className="summaryCardButtonText"> Sell </div>
                    </button>
                </Col>
                <Col onClick={onSymbolClick} style={{zIndex:0}}>
                    <div className={rate>0?'card-text rate-text-blue': 'card-text rate-text-red'}> {rate>0?'+': ''}{rate} </div>
                    <Chart type={"hybrid"} data={chartdata} color={(rate>0)?1:0} />
                </Col>
                <Col>
                    <div className={bidstate>0? 'card-text summaryBlueText':'card-text summaryRedText'}> {bid} </div>  
                    <button className="summaryButton">
                        <div className="summaryCardButtonText"> buy </div>
                    </button>
                </Col>
            </Row>
        </div>
    );
}

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}

export default SummaryCard;
