import React, {useState, useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsImg from '../../../assets/News.jpg'; 
import "./NewsCard.css";
import NewsBody from "../NewsBody/NewsBody";
import {news} from "../../../API/api";
import { Buffer } from 'buffer';
// import {decode} from 'base-64';
// import { Base64, btoa } from "js-base64";

function NewsCard(props) {
    const [newsBodyurl, setnewsBodyurl] = useState([]);
    const [newsBodyShow, setnewsBodyshow] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
    });
    
    const showNewsBody = ()=> {
        news(props.index).then(data => {
            console.log('data',data);
            if (data.state && data.state === 0) {
                console.log('mt5 API error:',data.data)
                return ;
            }
            if (data.data) {
                const Bodyurl =  Buffer.from(data.data.answer[0].Body, 'base64').toString('utf16le');
                setnewsBodyurl(Bodyurl);
                setnewsBodyshow(true);
                console.log(newsBodyShow);
            } else {
                return;
            }
        });
    }
    return (
            <div className='NewsCardContainer' onClick={showNewsBody}>
                <img src={NewsImg} alt="News" className="NewsImage"/>       
                <div className="NewsCardTitleText"> {props.title} </div>
                <div className="NewsCardCategoryText">{props.category}</div>
                <NewsBody show={newsBodyShow} url={newsBodyurl}/> 
            </div>
    );
}



export default NewsCard;



