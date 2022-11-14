import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BottomNavbar.css";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";
import { RiLineChartLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

function BottomNavbar(props) {
    //=========Show and Hide Bottombar when scrolling=======
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visibleBottombar, setVisibleBottombar] = useState(true); 
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos < prevScrollPos ) {
            if( prevScrollPos - currentScrollPos > 5 )
            setVisibleBottombar(true);
        } else {
            if( currentScrollPos - prevScrollPos > 5 )
            setVisibleBottombar(false);
        }
		if(currentScrollPos < 300) 
		{ 
			setVisibleBottombar(true); 
		}
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    //================End=================
    const [isactiveBottomNav, setisactiveBottomNav] = useState('Trade');
	//===============PageNavigate==========
	const navigate = useNavigate();
	const navBarTradeButtonOnClickHandler = () => {
		console.log('tradebef',isactiveBottomNav);
		setisactiveBottomNav('Trade');
		console.log('tradeaft',isactiveBottomNav);
		if(isactiveBottomNav == 'Trade')
		{
		$(".Active").removeClass("Active");
		$(".BottomNavBarTradeButton").addClass("Active");
		console.log('tradeif',isactiveBottomNav);
		}
		let path = '/trade';
		navigate(path);
	}
	const navBarPortfolioButtonOnClickHandler = () => {
		console.log('portbef',isactiveBottomNav);
		setisactiveBottomNav('Portfolio');
		console.log('portaft',isactiveBottomNav);
		if(isactiveBottomNav == 'Portfolio')
		{
		$(".Active").removeClass("Active");
		$(".BottomNavBarPortfolioButton").addClass("Active");
		console.log('portif',isactiveBottomNav);
		}
		let path = '/Portfolio';
		navigate(path);
		
	}
	const navBarSearchButtonOnClickHandler = () => {
		setisactiveBottomNav('Search');
		$(".Active").removeClass("Active");
		$(".BottomNavBarSearchButton").addClass("Active");
		let path = '/Search';
		navigate(path);
	}
	const navBarNewsButtonOnClickHandler = () => {
		setisactiveBottomNav('News');
		$(".Active").removeClass("Active");
		$(".BottomNavBarNewsButton").addClass("Active");
	}
	const navBarAccountButtonOnClickHandler = () => {
		setisactiveBottomNav('Account');
		$(".Active").removeClass("Active");
		$(".BottomNavBarAccountButton").addClass("Active");
		let path = '/Account';
		navigate(path);
	}
	return (
		<div className={`BottomNavBarContainer ${visibleBottombar ? "showbar" : "hidebar"} `} >
			<button className="BottomNavBarTradeButton BottomNavBar-item" onClick={navBarTradeButtonOnClickHandler}>
                <RiLineChartLine className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Trade</span>
			</button>

			<button className="BottomNavBarPortfolioButton BottomNavBar-item" onClick={navBarPortfolioButtonOnClickHandler}>
				<SlHandbag className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Portfolio</span>
			</button>

			<button className="BottomNavBarSearchButton BottomNavBar-item" onClick={navBarSearchButtonOnClickHandler}>
				<BsSearch className="BottomNavBarIcon" />
                <span className="BottomNavBar-Text">Search</span>
			</button>
			<button className="BottomNavBarNewsButton BottomNavBar-item" onClick={navBarNewsButtonOnClickHandler}>
				<IoNewspaperOutline className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">News</span>
			</button>

			<button className="BottomNavBarAccountButton BottomNavBar-item" onClick={navBarAccountButtonOnClickHandler}>
				<VscAccount className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Account</span>
			</button>
		</div>
	);
}
export default BottomNavbar;
