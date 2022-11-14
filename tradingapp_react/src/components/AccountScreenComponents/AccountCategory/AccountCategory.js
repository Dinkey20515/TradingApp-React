import React from "react";
import {AiOutlineRight} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './AccountCategory.css';
import {MdOutlinePublishedWithChanges} from "react-icons/md"
import {MdOutlineAccountBox} from "react-icons/md"
import {TfiWallet} from "react-icons/tfi"
import {FiSettings} from "react-icons/fi"
import {BsInboxes} from "react-icons/bs"
import {RiChatUploadLine} from "react-icons/ri"
import {MdOutlineSchool} from "react-icons/md"
import {RiMailStarLine} from "react-icons/ri"
import {FiPhoneCall} from "react-icons/fi"
import {VscFeedback} from "react-icons/vsc"
import {BsQuestionOctagon} from "react-icons/bs"


function AccountCategory() {
	const navigate = useNavigate();
	const myAccountOnClickHandler = () => {
        console.log('adsf');
		let path = "/myAccount";
		navigate(path);
	};

	return (
        <div className="AccountCategoriesCotainer"> 
            <div className="AccountCategoryContainer categorySpace" >
                <span className="AccountCategoryText">
                    <MdOutlinePublishedWithChanges  className="accountCategoryIcon"/>
                    Switch to Demo
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer"  onClick={myAccountOnClickHandler}>
                <span className="AccountCategoryText">
                    <MdOutlineAccountBox className="accountCategoryIcon"/>
                    My Accounts
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <TfiWallet className="accountCategoryIcon"/>
                    Payments
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer categorySpace">
                <span className="AccountCategoryText">
                    <FiSettings className="accountCategoryIcon"/>
                    Settings
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <BsInboxes className="accountCategoryIcon"/>
                    Inbox
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer categorySpace">
                <span className="AccountCategoryText">
                    <RiChatUploadLine className="accountCategoryIcon"/>
                    My Requests
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer categorySpace">
                <span className="AccountCategoryText">
                    <MdOutlineSchool className="accountCategoryIcon"/>
                    Learn To Trade
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <RiMailStarLine className="accountCategoryIcon"/>
                    Live Support
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <FiPhoneCall className="accountCategoryIcon"/>
                    Call us
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <VscFeedback className="accountCategoryIcon"/>
                    Leave Feedback
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
            <div className="AccountCategoryContainer">
                <span className="AccountCategoryText">
                    <BsQuestionOctagon className="accountCategoryIcon"/>
                    FAQ
                </span>
                <AiOutlineRight className="detailIcon"/>
            </div>
        </div>
	);
}

export default AccountCategory;


