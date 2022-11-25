import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoadingComponent.css";
import {RiLoader2Line} from "react-icons/ri"
import $ from 'jquery';

function LoadingComponent(props) {

	return props.show === 'true'?(
		<div className="fullOverlay">
            <RiLoader2Line className='fullOverlayImage'/>
        </div>
	):(<div></div>);
}
export default LoadingComponent;
