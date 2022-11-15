import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsImg from '../../assets/News.jpg'; 
import "./NewsCard.css";

function NewsCard(props) {
    return (
            <div className='NewsCardContainer'>
                <img src={NewsImg} alt="News" className="NewsImage"/>       
                <div className="NewsCardTitleText"> {props.title} </div>
                <div className="NewsCardCategoryText">{props.category}</div>
                
            </div>
    );
}

export default NewsCard;
