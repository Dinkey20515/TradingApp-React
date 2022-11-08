import React from "react";
// import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import TradeOneScreen from "./screen/TradeOneScreen/TradeOneScreen"
import LogInScreen from "./screen/LogInScreen/LogInScreen"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TradeAllScreen from "./screen/TradeAllScreen/TradeAllScreen";
import FullChart from "./screen/fullchart";

function App() {
	return (
		<BrowserRouter>
		  <Routes>
			  <Route index element={<LogInScreen/>} />
			  <Route path='detailpage' element={<TradeOneScreen/>}/>
			  <Route path='trade' element={<TradeAllScreen />}/>
			  <Route path='Chart' element={<FullChart />}/>
			  {/* <Route path='register' element={<RegisterForm />}/>
			  <Route path='geresult' element={<GeResult />}/>
			  <Route path='perDashboard' element={<PerDashboard />}/> */}
		 </Routes>
		</BrowserRouter>
	)
  }
  export default App;