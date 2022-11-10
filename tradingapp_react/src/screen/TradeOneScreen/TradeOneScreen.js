import React from 'react';
import { useNavigate } from "react-router-dom";
import {IoIosArrowUp} from  "react-icons/io";

import './TradeOneScreen.css';
import TradeOnePanel from "../../components/TradeOneScreenComponents/TradeOnePanel/TradeOnePanel";
import PriceRange from "../../components/TradeOneScreenComponents/PriceRange/PriceRange";
import SellerBuyerColorBar from "../../components/TradeOneScreenComponents/SellerBuyerColorBar/SellerBuyerColorBar";
import MiddleChartControlPanel from "../../components/TradeOneScreenComponents/MiddleChartControlPanel/MiddleChartControlPanel";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import MiddleChartContainer from "../../components/TradeOneScreenComponents/MiddleChartContainer/MiddleChartContainer"
import  TradeOneScreenTopbar from "../../components/TradeOneScreenComponents/TradeOneScreenTopbar/TradeOneScreenTopbar";
import middlechart from '../../assets/middlechart.jpg'; 

function TradeOneScreen() {
    //=======page navigation=======
    const navigate = useNavigate();
    const midExpandOnclickHandler = () => {
        let path = '/chart'
        navigate(path);
        window.location.reload(false);
    }
    const backIconOnclickHandler = () => {
        let path = '/trade'
        navigate(path);
    }
	return (
        <div className='tradeOneScreenContainer'>
             <TradeOneScreenTopbar onClick={backIconOnclickHandler}/>
             <MiddleChartContainer />
            <img src={middlechart} alt="Logo" className="middleChart" />
            <MiddleChartControlPanel onClick={midExpandOnclickHandler}/>
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
        </div>
	);
}

export default TradeOneScreen;