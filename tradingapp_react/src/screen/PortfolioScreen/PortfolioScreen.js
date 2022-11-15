import React ,{ Component } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './PortfolioScreen.css';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import PortfolioScreenTopbar from "../../components/PortfolioScreenComponents/PortfolioScreenTopbar/PortfolioScreenTopbar";
import PortfolioTrade from "../../components/PortfolioScreenComponents/PortfolioTrade/PortfolioTrade"

function PortfolioScreen() {
    //=======page navigation=======
    const navigate = useNavigate();
    const symbolCardOnclickHandler = () => {
      let path = '/detailpage'
      navigate(path)
    }
    const [isactiveBottomNav, setisactiveBottomNav] = useState('Portfolio');
	return (
        <div className='PortfolioScreenContainer' >
            <PortfolioScreenTopbar />
            <PortfolioTrade />
            <BottomNavbar index={isactiveBottomNav}/>
        </div>
	);
}

export default PortfolioScreen;