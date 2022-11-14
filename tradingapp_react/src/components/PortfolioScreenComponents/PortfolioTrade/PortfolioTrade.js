import React from "react";
import {AiOutlineRight} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './PortfolioTrade.css';

function PortfolioTrade() {
	const navigate = useNavigate();
	const myAccountOnClickHandler = () => {
        console.log('adsf');
		let path = "/myAccount";
		navigate(path);
	};

	return (
        <div className="PortfolioTradeCotainer"> 
            
        </div>
	);
}

export default PortfolioTrade;


