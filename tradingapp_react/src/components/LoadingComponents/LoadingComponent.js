import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoadingComponent.css";
import {RiLoader2Line} from "react-icons/ri"
import $ from 'jquery';

function LoadingComponent(props) {
	if(props.show!= 'true')
	{
		return;
	} 

	return (
		<div>
            <RiLoader2Line className='fullOverlayImage'/>
        </div>
	);
}
export default LoadingComponent;
