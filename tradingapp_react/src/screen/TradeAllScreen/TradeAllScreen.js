import React ,{ Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ImPencil} from "react-icons/im";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import $ from "jquery";
import axios from "axios";

import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import TradeAllScreenTopbar from "../../components/TradeAllScreenComponents/TradeAllScreenTopbar/TradeAllScreenTopbar";
import SummaryCard from "../../components/TradeAllScreenComponents/SummaryCard/SummaryCard";

import './TradeAllScreen.css';
import { GET_SYMBOLS_PRICE } from "../../API/api";
import jsonData from "./symbols"
import { BsWindowSidebar } from "react-icons/bs";


function TradeAllScreen(props) {
    //=======page navigation=======
    const navigate = useNavigate();

    //const symbolsa = ["NZDCAD", "NZDCHF", "NZDJPY", "NZDSGD", "NZDUSD", "SGDJPY", "USDCAD", "USDCHF", "USDCNH", "USDCZK",];
    const [symbols, setSymbols] = useState(jsonData.USA.slice(0, 10))
    const [message, setMessage] = useState([]); 
    const [history, setHistory] = useState([]); 
    const [realPrice, setRealPrice] = useState({});
    const [websckt, setWebsckt] = useState();
    const [isactiveBottomNav, setisactiveBottomNav] = useState(1);

    useEffect(() => {
        getHistory();
        const url = "ws://localhost:8000/ws/" + 567;
        const ws = new WebSocket(url);
    
        ws.onopen = (event) => {
            ws.send(JSON.stringify({method: 'group' , subs: symbols}) );
        };
    
        // recieve message every start page
        ws.onmessage = (e) => {
          const message = JSON.parse(e.data);
          if (message.target == 'group') {
            setRealPrice(message.obj);
          }
        };
    
        setWebsckt(ws); //clean up function when we close page
        return () => ws.close();
    }, [symbols]);
        
    const sendMessage = () => {
            websckt.send(message);
            // recieve message every send message
            websckt.onmessage = (e) => {
            const message = JSON.parse(e.data);
            setMessage([...messages, message]);
        };
        setMessage([]);
    };



    const symbolCardOnclickHandler = (symbol_name) => {
        let path = '/detailpage'
        console.log("reloaded");
        navigate(path, {state:{symbol: symbol_name}});
        window.location.reload(false);
        console.log("reloaded");
    }

    const getHistory = ()=> {
        let enddate = Math.ceil((new Date().getTime())/1000)
        let startdate = enddate-72*3600;
        axios.get(`${GET_SYMBOLS_PRICE}/${startdate}/${enddate}`, {headers: {
            'symbols': symbols
        }})
        .then(res => {
            if (res.data.status == 'Success') {
                setHistory(res.data.data)
                console.log(history)
            }
        })
    }

    const topNavbarOnclick = (e, country)=> {
        let obj = e.currentTarget;
		$(".active").removeClass("active");
		obj.className = 'active';
        setSymbols(jsonData[country].slice(0, 11))
	}
    
	
	return (
        <div className='tradeAllScreenContainer' >
            <TradeAllScreenTopbar />
            <div className="TradeAllScreenShareRegionNavbar">
				<ul className="ShareRegionNavBarRow">
					<li className="active" onClick={(e)=>topNavbarOnclick(e, 'USA')}><img src={"https://cdn-icons-png.flaticon.com/128/197/197484.png"} />
                        US</li>
					<li className="" onClick={(e)=>topNavbarOnclick(e, 'EUROPE')}><img src={"https://cdn-icons-png.flaticon.com/128/197/197615.png"} />
                        EUROPE</li>
					<li className="" onClick={(e)=>topNavbarOnclick(e, 'RUSSIA')}><img src={"https://cdn-icons-png.flaticon.com/128/323/323300.png"} />
                        RUSSIA</li>
					<li className="" onClick={(e)=>topNavbarOnclick(e, 'ARABIC')}><img src={"https://cdn-icons-png.flaticon.com/128/197/197578.png"} />
                        ARABIC</li>
					<li className="" onClick={(e)=>topNavbarOnclick(e, 'ASIA')}><img src={"https://cdn-icons-png.flaticon.com/128/6195/6195239.png"} />
                        ASIA</li>
				</ul>
			</div>
            {
                symbols.map ( (item, i)=> {
                    let ask = 0, bid = 0, next_open = 0;
                    let arr_history = (history[item]==undefined)?[]:history[item];
                    
                    if(arr_history && arr_history.length > 0) {
                        next_open = arr_history[arr_history.length-1].close
                    }
                    if(realPrice[item]) {
                        ask = realPrice[item][1];
                        bid = realPrice[item][2];
                    }
                    return (<SummaryCard key={i} symbol={item} ask={ask.toFixed(3)} bid={bid.toFixed(3)} rate={(ask - next_open).toFixed(5)} chartdata={arr_history} symbolCardOnclickHandler={symbolCardOnclickHandler} />);
                })
            }
                            
            {/* <Row className='tradeAllScreenButtonRow'>
                <Col className="tradeAllScreenButtonCol">
                    <button onClick={symbolCardOnclickHandler} className="tradeAllScreenButton">
                        <ImPencil className="tradeAllScreenIcon"/>
                    </button>
                    <div className="tradeAllScreenButtonText"> Edit watchlist </div>
                </Col>
                <Col className="tradeAllScreenButtonCol">
                    <button className="tradeAllScreenButton">
                        <AiOutlineAppstoreAdd className="tradeAllScreenIcon" />
                    </button>
                    <div className="tradeAllScreenButtonText"> Add markets </div>
                </Col>
            </Row> */}
            <BottomNavbar index={isactiveBottomNav}/>
        </div>
	);
}

export default TradeAllScreen;