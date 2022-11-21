import React from "react";
import { useState, useEffect } from "react";
import './NewsScreen.css';
import NewsCard from "../../components/NewsScreenComponents/NewsCard/NewsCard";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import NewsScreenTopBar from "../../components/NewsScreenComponents/NewsScreenTopBar/NewsScreenTopBar"
import {newslist} from "../../API/api";
import {news} from "../../API/api";

import LoadingComponent from "../../components/LoadingComponents/LoadingComponent"

function NewsScreen() {
    const isactiveBottomNav = 4;
    const total = 50;
    const [arr_news, setArr_news] = useState([])
    useEffect(() => {
        // Update the document title using the browser API
        newslist(total).then(data => {
            if (data.state && data.state === 0) {
                console.log('mt5 API error:',data.data)
                return ;
            }
            if (data.data) {
                //loginData = data.data;
                setArr_news(data.data)
            } else {
                return ;
            }
        });

    });

    return (
        <div className="newsScreenContainer">
            <NewsScreenTopBar />
            <NavList list={arr_news} />
            <BottomNavbar index={isactiveBottomNav}/>
        </div>
        );
}

const NavList = ({list})=> {
    if (list.answer && list.answer.length) {
        return list.answer.map ( (item, i)=> {
            return (<NewsCard key={i} category={item.Category} title={item.Subject}  index={item.ID}/>);
        })
    }else {
        return (<LoadingComponent show={'true'}/>);
    }
}
export default NewsScreen;