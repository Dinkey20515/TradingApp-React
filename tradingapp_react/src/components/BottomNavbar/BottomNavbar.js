import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BottomNavbar.css";
import { RiLineChartLine } from "react-icons/ri";
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

function BottomNavbar(props) {
    //=========Show and Hide Bottombar when scrolling=======
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visibleBottombar, setVisibleBottombar] = useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos < prevScrollPos ) {
            if( prevScrollPos - currentScrollPos > 5 )
            setVisibleBottombar(true);
        } else {
            if( currentScrollPos - prevScrollPos > 5 )
            setVisibleBottombar(false);
        }
        setPrevScrollPos(currentScrollPos);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    //================End=================

	return (
		<div className={`BottomNavBarContainer ${visibleBottombar ? "showbar" : "hidebar"} `} >
			<button className="BottomNavBarButton BottomNavBar-item ">
                <RiLineChartLine className="BottomNavBarIcon " />
				<span className="BottomNavBar-Text">Trade</span>
			</button>

			<button className="BottomNavBarButton BottomNavBar-item">
				<SlHandbag className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Portfolio</span>
			</button>

			<button className="BottomNavBarButton BottomNavBar-item">
				<BsSearch className="BottomNavBarIcon" />
                <span className="BottomNavBar-Text">Search</span>
			</button>
			<button className="BottomNavBarButton BottomNavBar-item">
				<IoNewspaperOutline className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">News</span>
			</button>

			<button className="BottomNavBarButton BottomNavBar-item">
				<VscAccount className="BottomNavBarIcon" />
				<span className="BottomNavBar-Text">Account</span>
			</button>
		</div>
	);
}
export default BottomNavbar;
