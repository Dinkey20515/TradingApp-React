import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./TradeOnePanel.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import {BsSliders} from "react-icons/bs";
import {TbMinusVertical} from "react-icons/tb";

function TradeOnePanel(props) {
    return (
            <div className='panelContainer'>
                <Row className='buttonRow'>
                    <Col>
                        <button className="sellBuyButton sellButton">
                            <div className="buttonText"> SELL </div>
                            <div className="priceText"> {props.ask} </div>
                        </button>
                    </Col>
                    <Col>
                        <button className="sellBuyButton buyButton">
                            <div className="buttonText"> BUY </div>
                            <div className="priceText"> {props.bid} </div>
                        </button>
                    </Col>
                </Row>
                <Row className='buttonRow'>
                    <Col xs={10}>
                        <button className="priceButton">
                            <MdKeyboardArrowDown className="arrowIcon" />
                            <div>
                                <div className="symbolText"> EUR </div>
                                <div className="priceText"> {props.price} </div>
                            </div>
                        </button>
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
                    <div>
                        <span className="priceAsk toLeft"> ${props.price} </span>
                        {/* <span className="priceVs toLeft"> </span> */}
                        <TbMinusVertical className="priceVs toLeft"/>
                        <span className="priceBid toLeft"> ${props.price} </span>
                        <span className="priceAmount toRight"> ${props.price} </span>
                    </div>
                    
                    
                </div>
            </div>
    );
}

export default TradeOnePanel;
