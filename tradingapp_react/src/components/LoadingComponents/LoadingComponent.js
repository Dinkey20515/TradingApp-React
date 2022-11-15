import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BottomNavbar.css";

function LoadingComponent(props) {
	if(props!= 'true')
	{
		return;
	} 
	return (
		<div className='fullOverlay'>
            <RiLoader2Line className='fullOverlayImage'/>
        </div>
	);
}
export default LoadingComponent;
