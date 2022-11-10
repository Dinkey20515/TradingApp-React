import React ,{ Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TradeOneScreen from "./screen/TradeOneScreen/TradeOneScreen"
import LogInScreen from "./screen/LogInScreen/LogInScreen"
import TradeAllScreen from "./screen/TradeAllScreen/TradeAllScreen";
import FullChart from "./screen/FullChart";

import './App.css';

function App() {
	return (
		<BrowserRouter className='mobileSet'>
		  <Routes>
			  <Route index element={<LogInScreen/>} />
			  <Route path='detailpage' element={<TradeOneScreen/>}/>
			  <Route path='trade' element={<TradeAllScreen />}/>
			  <Route path='chart' element={<FullChart />}/>
		 </Routes>
		</BrowserRouter>
	)
  }
  export default App;