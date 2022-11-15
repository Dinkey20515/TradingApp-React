
import React from "react";
import { useState } from "react";
import './AccountScreen.css';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import AccountCategory from "../../components/AccountScreenComponents/AccountCategory/AccountCategory";
import AccountTopbar from "../../components/AccountScreenComponents/AccountTopbar/AccountTopbar";

function AccountScreen() {
    const [isactiveBottomNav, setisactiveBottomNav] = useState('Account');

	return (
        <div className='AccountScreenContainer'>
            <AccountTopbar />
            <AccountCategory />
            <BottomNavbar index={isactiveBottomNav}/>
        </div>
	);
}

export default AccountScreen;
