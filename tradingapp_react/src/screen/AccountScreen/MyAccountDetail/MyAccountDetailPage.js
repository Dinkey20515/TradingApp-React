import React ,{ Component } from "react";
import MyAccountScreenTopbar from "../../../components/AccountScreenComponents/myAccountScreenDetailPage/MyAccountScreenTopbar/MyAccountScreenTopbar";
import './MyAccountDetailPage.css';
import BottomNavbar from "../../../components/BottomNavbar/BottomNavbar";

function MyAccountDetailPage() {
	return (
        <div className='MyAccountDetailPageContainer' >
            <MyAccountScreenTopbar />
            <BottomNavbar />
        </div>
	);
}

export default MyAccountDetailPage;