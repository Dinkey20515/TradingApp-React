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
	
	
	//===============PageNavigate==========
	const navigate = useNavigate('');

	const onNavClick = (url) => {
		navigate(url);
	}

	return (
		<div className={`BottomNavBarContainer ${visibleBottombar?'showbar':'hidebar'} `} >
			<button className={"BottomNavBarTradeButton BottomNavBar-item "+(props.index==1?'Active':'')} onClick={()=> onNavClick('/trade')}>
                <RiLineChartLine className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Trade</span>
			</button>

			<button className={"BottomNavBarPortfolioButton BottomNavBar-item "+(props.index==2?'Active':'')} onClick={()=>onNavClick('/portfolio')}>
				<SlHandbag className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Portfolio</span>
			</button>

			<button className={"BottomNavBarSearchButton BottomNavBar-item "+(props.index==3?'Active':'')} onClick={()=>onNavClick('/search')}>
				<BsSearch className="BottomNavBarIcon" />
                <span className="BottomNavBar-Text">Search</span>
			</button>
			<button className={"BottomNavBarNewsButton BottomNavBar-item "+(props.index==4?'Active':'') } onClick={()=>onNavClick('/news')}>
				<IoNewspaperOutline className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">News</span>
			</button>

			<button className={"BottomNavBarAccountButton BottomNavBar-item "+(props.index==5?'Active':'')} onClick={()=>onNavClick('/account')}>
				<VscAccount className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Account</span>
			</button>
		</div>
	);
}
export default BottomNavbar;
