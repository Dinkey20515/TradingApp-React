import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import TradeAllScreenTopbar from "../../components/TradeAllScreenTopbar/TradeAllScreenTopbar";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import './TradeAllScreen.css';
import {FaEdit} from "react-icons/fa";
import {AiOutlineAppstoreAdd} from "react-icons/ai";

function TradeAllScreen() {
    //=======page navigation=======
    const navigate = useNavigate();
    const symbolCardOnclickHandler = () => {
      let path = '/detailpage'
      navigate(path)
    }
	return (
        <Container className='tradeAllScreenContainer' onClick={symbolCardOnclickHandler}>
            <TradeAllScreenTopbar />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <SummaryCard symbol='BSC/USD' ask='0.98656' bid='1,000' rate='+1.01% ' />
            <Row className='tradeOneScreenEditButtonRow'>
                <Col className="tradeOneScreenEditButtonCol">
                    <button className="tradeOneScreenEditButton">
                        <FaEdit className="tradeOneScreenEditIcon"/>
                    </button>
                    <div className="tradeOneScreenEditButtonText"> Edit watchlist </div>
                </Col>
                <Col className="tradeOneScreenEditButtonCol">
                    <button className="tradeOneScreenEditButton">
                        <AiOutlineAppstoreAdd className="tradeOneScreenEditIcon" />
                    </button>
                    <div className="tradeOneScreenEditButtonText"> Add markets </div>
                </Col>
            </Row>
            <BottomNavbar />
        </Container>
	);
}

export default TradeAllScreen;