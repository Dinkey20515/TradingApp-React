import React, { useEffect, useState } from "react";
import toHtml from 'string-to-html';
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NewsBody.css";

function NewsBody(props) {
    if(!props.show){
        return null;
    }

    const [str, setStr] = useState(props.url);
    
    useEffect((props)=> {
        //if (props) {
            toHtmlStr(str)
        //}
    })
    
    const toHtmlStr = (str2)=> {
        //let str3 = toHtml(str2);
        // document.getElementById('news').innerHTML = str2;
        let len = str2.length;
        let obj = toHtml(str2.substring(0, len-2));
        $('#news').html(obj);
    }
    console.log('bodyclicked',props.url);
    
    return (
        <iframe id="news">
           
        </iframe>
            
    );
}
export default NewsBody;

