import Container from "react-bootstrap/Container";

import TradeOnePanel from "../../components/TradeOnePanel/TradeOnePanel";
import PriceRange from "../../components/PriceRange/PriceRange";
import SellerBuyerColorBar from "../../components/SellerBuyerColorBar/SellerBuyerColorBar";
import MiddleChartControlPanel from "../../components/MiddleChartControlPanel/MiddleChartControlPanel"
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
// import { TVChartContainer } from "../../components/TVChartContainer/TVChartContainer";

import {IoIosArrowUp} from  "react-icons/io";

import './TradeOneScreen.css';
import middlechart from '../../assets/middlechart.jpg'; 

function TradeOneScreen() {
	return (
        <Container className='tradeOneScreenContainer'>

            <img src={middlechart} alt="Logo" className="middleChart"/>
            {/* <div className="middleChartContainer">
                <TVChartContainer />
            </div> */}
            <MiddleChartControlPanel />
            <TradeOnePanel ask='0.99756' bid='0.98656' price='1,000' />
            <div className="priceRangeDiv">
                <span className="priceRangeText">Price Range</span>
                <span className="pricePercentText">+2.10% (+0.408)</span>
            </div>

            <PriceRange ask='0.99756' bid='0.98656' price='19,878' />
            <SellerBuyerColorBar seller='18%' buyer='82%' />
            <div className="priceRangeDiv">
                <span className="priceRangeText">Trades</span>
                <span className="pricePercentText"><IoIosArrowUp className="arrowUpIcon"/></span>
            </div>
            <div className="priceRangeDiv">
                <span className="priceRangeText">MarketInfo</span>
                <span className="pricePercentText"><IoIosArrowUp className="arrowUpIcon"/></span>
            </div>
            <BottomNavbar />
        </Container>
	);
}

export default TradeOneScreen;