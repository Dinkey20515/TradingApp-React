import React from 'react';
import { useState, useEffect } from 'react';
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
import { TVChartContainer } from '../../components/TVChartContainer/index';
import {login} from "../../API/api";

function TradeOneScreen() {
    const [TVOption, setTVOption] = useState({
        symbol: "BTCUSD",
        period: '',
        charttype: '',
        add_indicator: '',
        add_drawing: '',
        del_obj:'',
        getShapeFlg: 0,
        selectedItem: "onStart",
        height: window.innerHeight/2,
        selectedShapeIndexes: [],		//selected drawingtool indexes
        selectedIndicators: [],			//selected indicator indexes.
        flag: 0,
    })
    const [loginFlag, setLoginFlag] = useState(0)
    const [loginData, setLoginData] = useState({   
        Balance : 0,
        Group : '',
        Email : '',
        Equity : 0,
        Leverage: 1,
    })

    useEffect(() => {
        if(!loginFlag)
            getLoginInfo()
      });
    const getLoginInfo = ()=> {
        login(222499, 'Saham@123').then(data => {
            console.log({data})
            if (data.state && data.state === 0) {
                console.log('mt5 API error:',data.data)
                return ;
            }
            if (data.data) {
                //loginData = data.data;
                setLoginFlag(1)
                setLoginData(data.data.answer)
            } else {
                return ;
            }
        });
    }
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

    const chartloaded = (loaded)=> {
		// $('.fullOverlay').css('display', loaded);
	}

	return (
        <div className='tradeOneScreenContainer'>
             <TradeOneScreenTopbar onClick={backIconOnclickHandler}/>
             <MiddleChartContainer />
            <TVChartContainer option={TVOption}  chartloaded={chartloaded}/>
            <MiddleChartControlPanel onClick={midExpandOnclickHandler}/>
            <TradeOnePanel userInfo={loginData} symbol={TVOption.symbol} />
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