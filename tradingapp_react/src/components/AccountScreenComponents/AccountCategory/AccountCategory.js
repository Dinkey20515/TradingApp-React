import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./AccountCategory.css";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { BsInboxes } from "react-icons/bs";
import { RiChatUploadLine } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
import { RiMailStarLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { VscFeedback } from "react-icons/vsc";
import { BsQuestionOctagon } from "react-icons/bs";

function AccountCategory() {
	const navigate = useNavigate();
	const myAccountOnClickHandler = () => {
		let path = "/myaccount";
		navigate(path);
	};

	return (
		<div className="AccountCategoriesCotainer">
			<div className="categorySpace">
				<span>
					<MdOutlinePublishedWithChanges className="accountCategoryIcon" />{" "}
					Switch to Demo{" "}
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div onClick={myAccountOnClickHandler}>
				<span>
					<MdOutlineAccountBox className="accountCategoryIcon" /> My Accounts{" "}
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<TfiWallet className="accountCategoryIcon" /> Payments{" "}
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div className=" categorySpace">
				<span>
					<FiSettings className="accountCategoryIcon" /> Settings{" "}
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<BsInboxes className="accountCategoryIcon" /> Inbox
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div className=" categorySpace">
				<span>
					<RiChatUploadLine className="accountCategoryIcon" /> My Requests
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div className=" categorySpace">
				<span>
					<MdOutlineSchool className="accountCategoryIcon" /> Learn To Trade
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<RiMailStarLine className="accountCategoryIcon" /> Live Support
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<FiPhoneCall className="accountCategoryIcon" /> Call us
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<VscFeedback className="accountCategoryIcon" /> Leave Feedback
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
			<div>
				<span>
					<BsQuestionOctagon className="accountCategoryIcon" /> FAQ
				</span>
				<AiOutlineRight className="detailIntoIcon" />
			</div>
		</div>
	);
}

export default AccountCategory;
