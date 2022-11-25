import React ,{ Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TradeOneScreen from "./screen/TradeOneScreen/TradeOneScreen"
import LogInScreen from "./screen/LogInScreen/LogInScreen"
import TradeAllScreen from "./screen/TradeAllScreen/TradeAllScreen";
import FullChart from "./screen/FullChart";
import PortfolioScreen from "./screen/PortfolioScreen/PortfolioScreen";
import SearchScreen from "./screen/SearchScreen/SearchScreen";
import AccountScreen from "./screen/AccountScreen/AccountScreen";
import MyAccountDetailPage from "./screen/AccountScreen/MyAccountDetail/MyAccountDetailPage";
import NewsScreen from "./screen/NewsScreen/NewsScreen";

import './App.css';

function App() {


	return (
		<BrowserRouter className='mobileSet'>
		  <Routes>
			  <Route index element={<LogInScreen/>} /> 
			  <Route path='detailpage' element={<TradeOneScreen/>}/>
			  <Route path='trade' element={<TradeAllScreen />}/>
			  <Route path='chart' element={<FullChart />}/>
			  <Route path='Portfolio' element={<PortfolioScreen />} />
			  <Route path='Search' element={<SearchScreen />} />
			  <Route path='Account' element={<AccountScreen />} />
			  <Route path='News' element={<NewsScreen />} />
			  <Route path='myAccount' element={<MyAccountDetailPage />} />
		 </Routes>
		</BrowserRouter>
	)
  }
  export default App;