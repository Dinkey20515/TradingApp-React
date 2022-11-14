
import React from "react";

import './AccountScreen.css';
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import AccountCategory from "../../components/AccountScreenComponents/AccountCategory/AccountCategory";
import AccountTopbar from "../../components/AccountScreenComponents/AccountTopbar/AccountTopbar";

function AccountScreen() {


	return (
        <div className='AccountScreenContainer'>
            <AccountTopbar />
            <AccountCategory />
            <BottomNavbar />
        </div>
	);
}

export default AccountScreen;
