import "bootstrap/dist/css/bootstrap.min.css";
import "./../Modal/Modal.css";
import "./NumberType.css";
import React from 'react';
import {useState} from "react";
import { createStore, useStore } from "usestore-react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BsViewList } from "react-icons/bs";
import { IoKeypad } from "react-icons/io5";
const [amount, setamount] = createStore("trade_amount", 1);

function NumberTypeModal(props) {
    const [type, setType] = useState(true);
    if(!props.show){
        return null;
    }
    // const state = {
    //     result: ""
    //   }

    const onbuttonclick = (button) => {
        if(button === ".") {
            amount = amount + button;
            setamount(amount);
        }
    
        else if(button === "ce") {
            prop = prop.slice(0, -1);
            console.log(prop);
        }
    
        else {
            amount = amount + button;
            setamount(amount);
        }
      };
    return (
            <div className="modal">
                <div className="modal-back" onClick={props.onClose}>
                </div>
                <div className="modal-content">
                    <div className="header-buttons">
                        <div className="icon-button" onClick={()=> setType(!type)}>
                           {
                             (type === true) ? (<BsViewList />) : (<IoKeypad />)                                    
                           }
                        </div >
                        <div className="done-button">Done</div>
                    </div>
                    <div className="modal-body">
                        <div className="number-type" >
                            <table>
                                <tbody>
                                    <tr>
                                            <th onClick={()=>onbuttonclick(props.state, "1")}>1</th>
                                            <th onClick={()=>onbuttonclick(props.state, "2")}>2</th>
                                            <th onClick={()=>onbuttonclick(props.state, "3")}>3</th>
                                    </tr>
                                    <tr>
                                            <th onClick={()=>onbuttonclick(props.state, "4")}>4</th>
                                            <th onClick={()=>onbuttonclick(props.state, "5")}>5</th>  
                                            <th onClick={()=>onbuttonclick(props.state, "6")}>6</th>
                                    </tr>
                                    <tr>
                                            <th onClick={()=>onbuttonclick(props.state, "7")}>7</th>
                                            <th onClick={()=>onbuttonclick(props.state, "8")}>8</th>
                                            <th onClick={()=>onbuttonclick(props.state, "9")}>9</th>
                                    </tr>
                                    <tr>
                                            <th onClick={()=>onbuttonclick(props.state, ".")}>.</th>
                                            <th onClick={()=>onbuttonclick(props.state, "0")}>0</th>
                                            <th onClick={()=>onbuttonclick(props.state, "ce")}><RiDeleteBack2Fill/></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default NumberTypeModal;
