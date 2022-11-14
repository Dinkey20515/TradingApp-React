
import React ,{ Component } from "react";

import './SearchScreen.css';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import SearchCategory from "../../components/SearchScreenComponents/SearchCategory";

function SearchScreen() {

	return (
        <div className='searchScreenContainer' >
            <div className="searchHeaderText">Search</div>
            <div className={"searchButtonContainer"}>
                <div className={"searchButtoninputContainer"}>
                    <input type={"text"} className={"searchInput"} 
                        data-role={"search"} placeholder={"Search"}  />
                </div>
                <span className={"searchButtonIcon"}>
                    <img alt="svg file" src={window.location.origin +'/svg/search.svg'}></img>
                </span>
            </div>
            <SearchCategory />
            <BottomNavbar />
        </div>
	);
}

export default SearchScreen;
