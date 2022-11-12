import "bootstrap/dist/css/bootstrap.min.css";
import "./../Modal/Modal.css";
import "./NumberType.css";
import React from 'react';
import {useState} from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BsViewList } from "react-icons/bs";
import { IoKeypad } from "react-icons/io5";


function NumberTypeModal(props) {
    const [type, setType] = useState(true);
    if(!props.show){
        return null;
    }
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
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                    </tr>
                                    <tr>
                                            <th>4</th>
                                            <th>5</th>  
                                            <th>6</th>
                                    </tr>
                                    <tr>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                    </tr>
                                    <tr>
                                            <th>.</th>
                                            <th>0</th>
                                            <th><RiDeleteBack2Fill/></th>
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
