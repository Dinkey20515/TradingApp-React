import React from "react";
import "./SearchCategory.css";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";
import { GiMapleLeaf } from "react-icons/gi";
import { SlPlane } from "react-icons/sl";
import { SlEnergy } from "react-icons/sl";
import { RiCapsuleLine } from "react-icons/ri";
import { HiOutlineCpuChip } from "react-icons/hi2";

function SearchCategory() {
	return (
		<div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<AiOutlineRise className="topRiserIcon" />
					Top Risers
				</span>
			</div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<AiOutlineFall className="AiOutlineFallIcon" />
					Top Fallers
				</span>
			</div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<AiOutlineHeart className="AiOutlineHeartIcon" />
					Most Traded
				</span>
			</div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<RiBarChart2Line className="RiBarChart2LineIcon" />
					Most Volatile
				</span>
			</div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<GiMapleLeaf className="GiMapleLeafIcon" />
					Cannabis Stocks  
				</span>
			</div>
			<div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<SlPlane className="SlPlaneIcon" />
					Transportation Companies
				</span>
			</div>
            <div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<AiOutlineSecurityScan className="AiOutlineSecurityScanIcon" />
					Cybersecurity Stocks
				</span>
			</div>
            <div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<SlEnergy className="SlEnergyIcon" />
					Biggest Energy Companies
				</span>
			</div>
            <div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<RiCapsuleLine className="RiCapsuleLineIcon" />
					Largest pharmaceuticals
				</span>
			</div>
            <div className="searchCategoryContainer">
				<span className="searchCategoryText">
					<HiOutlineCpuChip className="HiOutlineCpuChipIcon" />
					Top Tech Companies
				</span>
			</div>
		</div>
	);
}

export default SearchCategory;
