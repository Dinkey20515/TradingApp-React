import React from "react";
import { useState, useEffect } from "react";
import './NewsScreen.css';
import NewsCard from "../../components/NewsScreenComponents/NewsCard/NewsCard";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import NewsScreenTopBar from "../../components/NewsScreenComponents/NewsScreenTopBar/NewsScreenTopBar"
import {news} from "../../API/api";

function NewsScreen() {
    const isactiveBottomNav = 4;
    const total = 10;
    const [arr_news, setArr_news] = useState([])
    useEffect(() => {
        // Update the document title using the browser API
         news(total).then(data => {
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
            return (<NewsCard key={i} category={item.Category} title={item.Subject} />);
        })
    }else {
        return (<div className="connect-error">Failed Connection to Server.</div>);
    }
}

export default NewsScreen;