import * as React from 'react';
import './style.css';
import { useState } from "react";

import { TVChartContainer } from '../../components/TVChartContainer/index';
import jsonData from "./data";
import $ from 'jquery';
import renderHTML from 'react-render-html';
import { IoReload } from "react-icons/io5"; 
 
class FullChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			symbol: "Bitfinex:BTC/USD",
			period: '',
			charttype: '',
			add_indicator: '',
			add_drawing: '',
			del_obj:'',
			getShapeFlg: 0,
			selectedItem: "",
			selectedShapeIndexes: [],		//selected drawingtool indexes
			selectedIndicators: [],			//selected indicator indexes.
			flag: 0,
		};
	}

	//variables
	log_flag = 1;							//display logs flag
	//g_selectedShapeIndexes = [];			//selected drawingtool indexes
	g_selShapeIds = [];						//selected drawingtool id(of chart lib)
	g_selDrawIndex = 0;						//selected drawingtool index(of array)
	g_selMenu = ""; 						//select bottom menu index 
	// g_selIndicIds = [];						//array of indicator id selected
	// g_selectedIndicators = [];				//selected indicator indexes.
	// g_allShapeids = [];						//get all shape's ids when draw and delete any indicator and drawing.
	g_indicators = jsonData.g_indicators;
	g_period = jsonData.g_period;
	g_drawing_pram = jsonData.g_drawing_pram;

	componentDidMount() {
		console.log('start');
		$('.fullOverlay').css('display', 'block');
	}

	getShapeId(data, type) {
		if (type === 1) {  //indicator id
			jsonData.g_selIndicIds.push(data.obj_id);
			jsonData.g_allShapeids = data.allIds;
		} else if(type === 2) {  //drawing id
			// $('.draw-pane').css('display', 'block');
			// jsonData.g_allShapeids = data.allIds;
		} else if(type === 3) {
			jsonData.g_allShapeids = data.allIds;
		}
	}



	log(tag, obj){
		if(this.log_flag){
			console.log(tag+'====='+obj);
			console.log(obj);
		}
	}

	openTab(evt, tabName) {
		if (this.g_selMenu === tabName) {
			this.initTab();
			this.g_selMenu = '';
			return;
		}
		this.state.flag++;
		this.g_selMenu = tabName;
		this.initTab();
		$('.overlay').css('display', 'block');
		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className += " active";
  	}

	initTab() {
		var i, tabcontent, tablinks;
		$('.overlay').css('display', 'none');
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	}

	//draw shape of line tools 
	drawByDrawing(index, e) {
		this.initTab();
		
		this.g_selDrawIndex = index
		this.setState({
			add_drawing: this.g_drawing_pram[index],
			selectedItem: 'add_drawing'
		});
		$('.draw-pane').css('display', 'block');
		// widget.selectLineTool(g_drawing_pram[index]);
	}


	drawDone(flag) {
		$('.draw-pane').css('display', 'none');
		if(!flag) {
			//delete shape
			this.setState({
				del_obj: -1,
				selectedItem: 'del_obj'
			});
			// widget.chart().removeEntity(shape_id);
			return;
		}
			
		// this.g_selShapeIds.push(shape_id);
		let arr = this.state.selectedShapeIndexes;
		arr.push(this.g_selDrawIndex);
		this.setState({
			selectedShapeIndexes: arr,
			selectedItem: ''
		});
		$('#sel-indicator-cnt').text(this.totalSelectedItem());
		if ((this.totalSelectedItem()) > 0)
			$('#sel-history').css('display', 'block');
		//add select history list
		// widget.chart().selected
	}



	//select effect in indicator & drawing page
	openIndicators(pageName, elmnt, id) {
		let i, tabcontent2, tablink2s;
		tabcontent2 = document.getElementsByClassName("tabcontent"+id);
		for (i = 0; i < tabcontent2.length; i++) {
			tabcontent2[i].style.display = "none";
		}
		tablink2s = document.getElementsByClassName("tablink"+id);
		for (i = 0; i < tablink2s.length; i++) {
			tablink2s[i].classList.remove("indicator-tab-active");
		}
		document.getElementById(pageName).style.display = "block";
		elmnt.currentTarget.classList.add("indicator-tab-active");
	}

	drawByPeriod(i, e) {
		$(".period-active").removeClass("period-active");
		//let data = ["1", "5", "15", "30", "60", "300"];
		e.currentTarget.className = "period-active";
		this.setState({
			period: this.g_period[i],
			selectedItem: 'period'
		});
		//this.widget.setSymbol("Bitfinex:BTC/USD", this.g_period[i]);
	}

	drawByChartType(index, e) {
		console.log(e);
		$(".chart-active").removeClass("chart-active");
		e.currentTarget.className = "chart-active";
		this.setState({
			charttype: index,
			selectedItem: 'charttype'
		});
		//this.widget.chart().setChartType(index);
	}

	drawByChartUnit(index, e) {
		$(".timeunit-active").removeClass("timeunit-active");
		let data = ["1", "5", "15", "30", "60", "300"];
		e.currentTarget.className = "timeunit-active";
		this.setState({
			period: data[index],
			selectedItem: 'period'
		});
		//widget.setSymbol("Bitfinex:BTC/USD", data[index]);
	}

	//remove indicator in chart
	deleteIndicator(index) {
		//$(`#sel_indic_${index}`).remove();
		const result = this.state.selectedIndicators.filter(function checkIdic(id) { return id != index; });
		const id_index = this.state.selectedIndicators.findIndex(function checkAdult(id) { return id == index; });
		$(`[name="${this.g_indicators[index]}"]`).removeClass('indicator-active');
		this.state.selectedIndicators = result;
		$('#sel-indicator-cnt').text(this.totalSelectedItem());

		this.setState({
			del_obj: jsonData.g_selIndicIds[id_index],
			selectedItem: 'del_indic_obj'
		});
		//widget.chart().removeEntity(jsonData.g_selIndicIds[id_index]);
		const result1 = jsonData.g_selIndicIds.filter(function checkIdic(id) { return id != jsonData.g_selIndicIds[id_index]; });
		jsonData.g_selIndicIds = result1;
		if ((this.totalSelectedItem()) === 0) {
			$('#sel-history').css('display', 'none');
			this.initTab();
		}
		
	}

	//remove shape in chart
	deleteDrawing(index) {
		//$('#sel_draw_'+index).remove();

		const id_index = this.state.selectedShapeIndexes.findIndex(function fun2(id) { return id == index; });
		const result = this.state.selectedShapeIndexes.filter(function fun1(id) { return id != index; });
		this.state.selectedShapeIndexes = result;

		this.setState({
			del_obj: id_index,
			selectedItem: 'del_obj'
		});
		//widget.chart().removeEntity(this.g_selShapeIds[id_index]);
		const result1 = this.g_selShapeIds.filter(function fun3(id) { return id != this.g_selShapeIds[id_index]; });
		this.g_selShapeIds = result1;
		
		$('#sel-indicator-cnt').text(this.totalSelectedItem());
		if ((this.totalSelectedItem()) === 0) {
			$('#sel-history').css('display', 'none');
			this.initTab();
		}
	}

	


	//draw indicator in diplay
	drawByIndicator(index, e) {
		if (this.state.selectedIndicators.includes(index)) {
			return;
		}
		if (this.state.selectedIndicators.length >= 5) {
			alert('bigger than limit.');
			return;
		}
		this.state.selectedIndicators.push(index);
		$('#sel-indicator-cnt').text(this.totalSelectedItem());
		//add select history list
		
		if ((this.totalSelectedItem()) > 0)
			$('#sel-history').css('display', 'block');
		e.currentTarget.className = "draw-item indicator-active";
		this.setState({
			add_indicator: this.g_indicators[index],
			selectedItem: 'add_indicator'
		});
		// const obj_id = widget.chart().createStudy(this.g_indicators[index]);
		// this.log('indicatorid===', this.g_indicators[index])
		// jsonData.g_selIndicIds.push(obj_id);
	}

	totalSelectedItem() {
		return this.state.selectedIndicators.length+this.state.selectedShapeIndexes.length;
	}
	chartloaded(loaded){
		$('.fullOverlay').css('display', loaded);
	}

    render() {
		const { g_period, g_chartType, g_chartType_svg, g_chartUnit, g_indicators, g_drawing, g_drawing_svg } = jsonData;
		const { selectedIndicators, selectedShapeIndexes } = this.state;
		let {str1, str2, str3, str4, str5} = '';
		
		str2 = g_chartType.map((item, i)=>{
			if (i < 4 || i > 8) {
				return (<li key={i} onClick={(e)=>this.drawByChartType(i, e)}>{renderHTML(g_chartType_svg[i])}</li>)
			}
		})
		str4 = g_chartUnit.map((item, i)=>{
			return (<li key={i} onClick={(e)=>this.drawByChartUnit(i, e)}>{item} </li>)
		})
		str3 = g_indicators.map((item, i)=>{
			return (item.toLowerCase()=='spread' || item.toLowerCase()=='ratio')?"":
			 (<li className='draw-item' name={item}  key={i} onClick={ (e)=>this.drawByIndicator(i, e)} ><div style={{padding: '10px'}}><span style={{padding: '10px 0'}}> {item} </span><span style={{float: 'right', fontSize: '25px', margin: '-8px'}}>+</span></div></li>);
		})
		str5 = g_drawing.map((item, i)=>{
			return (<li className='draw-item' name={item} key={i} onClick={(e)=>this.drawByDrawing(i, e)} ><div style={{padding: '10px'}}> {renderHTML(g_drawing_svg[i])}<span style={{padding: '10px 0'}}> {item}</span><span style={{float: 'right', fontSize: '25px'}}>+</span></div></li>)
		})
		
		return (
			<div>
				<div className='fullOverlay'>
					<IoReload className='fullOverlayImage'/>
				</div>
				<div className="overlay" onClick={()=>this.initTab()}></div>
				<TVChartContainer option={this.state} getShapeId={this.getShapeId} chartloaded={this.chartloaded}/>
				
				<div id="bottom-menu" >
					<div id="candles" className={"tabcontent"}> 
						 
						<div className={"content-center"}>
							<h4 className={"tab-btn-title"}>CHART TYPE</h4>
						</div>
						<div className={"scroll-none"} >
							<ul className={"inline-list"} id={"chart-list"}>{str2}</ul>
						</div>
						<div className={"scroll-none"} >
							<ul className={"inline-list-2"}>{str4}</ul>
						</div>
					</div>

					<div id="indicators" className={"tabcontent tabintab"} >
						
						<div>
							<div className={"tablink-header"}>
								<button className={"tablink2 indicator-tab-active"}  onClick={(e)=>this.openIndicators('indicator', e, 2)}
									id={"defaultOpen"}>
									Indicators
								</button>
								<button className={"tablink2"}  onClick={(e)=>this.openIndicators('drawings', e, 2)}>
									Drawings
								</button>
							</div>

							<div id="indicator" className={"tabcontent2"} style={{display: "block"}}>
								<div className={"container-nVh4c_cg"}>
									<div className={"inputContainer-nVh4c_cg"}>
										<input type={"text"} className={"input-nVh4c_cg"} 
											data-role={"search"} placeholder={"Search"}  />
									</div>
									<span className={"icon-nVh4c_cg"}>
										<img alt="svg file" src={window.location.origin +'/svg/search.svg'}></img>
									</span>
								</div>
								<div style={{height: "60vh", overflow: "auto"}}>
									<ul id={"indicator-list"} className={"indicator-lists"}>{str3}</ul>
								</div>
							</div>

							<div id={"drawings"} className={"tabcontent2"}>
								<div style={{height: "70vh", overflow: "auto"}}>
									<ul id={"drawing-list"} className={"indicator-lists"}>{str5}</ul>
								</div>
							</div>
						</div>
					</div>
					<div id="indicator-history" className={"tabcontent"} >

						<div>
							<div className={"tablink-header"}>
								<button className={"tablink3 indicator-tab-active"} onClick={(e)=>this.openIndicators('sel-indicator', e, 3)} id={"defaultOpen"}>
									Indicators
								</button>
								<button className={"tablink3"} onClick={(e)=>this.openIndicators('sel-drawings', e, 3)} >
									Drawings
								</button>
							</div>

							<div id={"sel-indicator"} className={"tabcontent3"} style={{display: "block"}}>
								<div style={{height: "70vh", overflow: "auto"}}>
									<ul id={"sel-indicator-list"} className={"indicator-lists"}>
										{selectedIndicators.map((id, i)=> {
											return (<li key={i} className='draw-item' id={'sel_indic_' + id}><div className='p-10'><span className='del-icon' onClick={()=>this.deleteIndicator(id)}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor" style={{marginBottom: '-3px'}}><path d="m.58 1.42.82-.82 15 15-.82.82z"></path><path d="m.58 15.58 15-15 .82.82-15 15z"></path></svg></span><span style={{padding: '10px 0'}}>{this.g_indicators[id]}
											</span><span className='pencil-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"fill="#bb8961"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/><path xmlns="http://www.w3.org/2000/svg" d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg></span></div></li>)
										})}
									</ul>
								</div>
							</div>

							<div id={"sel-drawings"} className={"tabcontent3"}>
								<div style={{height: "70vh", overflow: "auto"}}>
									<ul id={"sel-drawing-list"} className={"indicator-lists"}>
										{selectedShapeIndexes.map((id, i)=> {
											return (<li key={i} className="draw-item" id={'sel_draw_'+id}><div className='p-10'>{renderHTML(g_drawing_svg[id]) }<span style={{padding: '10px 0'}}>{ g_drawing[id] }</span><span style={{float: 'right', fontSize: '25px', margin: '-8px'}}><span style={{paddingRight: '10px', color:'#bb8961'}} onClick={()=> this.deleteDrawing(id)}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor" style={{marginBottom: "-8px"}}><path d="m.58 1.42.82-.82 15 15-.82.82z"></path><path d="m.58 15.58 15-15 .82.82-15 15z"></path></svg></span></span></div></li>);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div id="bid" className={"tabcontent"}>
						

						<div className={"content-center"}>
							<h4 className={"tab-btn-title"}>SHOW PRICE</h4>
						</div>
						<div className={"content-around"}>
							<button className={"bid-btn"}>BID</button>
							<button className={"bid-btn"}>ASK</button>
						</div>
					</div>

					<div id="daterange" className={"tabcontent"}>
						
						<div className={"content-center"}>
							<h4 style={{textAlign: "center",marginBottom: "15px",fontSize: "15px",fontWeight: "600"}}>
								PERIOD
							</h4>
						</div>
						<div className={"scroll-none"} >
							<ul className={"inline-list"} id={"daterange-list"}>
								{g_period.map((item, i) => <li key={i} onClick={(e)=>this.drawByPeriod(i, e)} >{item} </li>)}
							</ul>
						</div>
					</div>

					<div className="tab">
						<button className="tablinks"  onClick={(e)=>this.openTab(e, 'indicators')}>
							<span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" width="32" height="32" fill="currentColor">
									<path fill="currentColor"
										d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z">
									</path>
									<path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"></path>
								</svg></span>
						</button>
						<button className={"tablinks "} onClick={(e)=>this.openTab(e, 'candles')} >
							<span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" width="32" height="32" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"></path><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path></svg></span>
						</button>
						<button className={"tablinks"} onClick={(e)=>this.openTab(e, 'daterange')} >
							<span className={"icon-a7Y2yl3G"}><svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" fill="currentColor">
								<g>
								<path transform="rotate(-90.3604 13.957 13.9458)" stroke="#000" id="svg_4" d="m5.61359,12.8898l16.68691,0l0,0c2.18603,0 3.95816,0.47278 3.95816,1.05597c0,0.5832 -1.77213,1.05597 -3.95816,1.05597l-16.68691,0l0,0c-2.18603,0 -3.95816,-0.47278 -3.95816,-1.05597c0,-0.5832 1.77213,-1.05597 3.95816,-1.05597z" strokeWidth="0.1" fill="currentColor"/>
								<path transform="rotate(-90.3604 8.70677 14.0141)" stroke="#000" id="svg_5" d="m3.09812,12.95816l11.21729,0l0,0c1.46949,0 2.66076,0.47278 2.66076,1.05598c0,0.58319 -1.19126,1.05597 -2.66076,1.05597l-11.21729,0l0,0c-1.4695,0 -2.66076,-0.47278 -2.66076,-1.05597c0,-0.5832 1.19126,-1.05598 2.66076,-1.05598z" strokeWidth="0.1" fill="currentColor"/>
								<path transform="rotate(-90.3604 19.6194 14.0802)" stroke="#000" id="svg_6" d="m14.01077,13.0243l11.21729,0l0,0c1.46949,0 2.66075,0.47278 2.66075,1.05598c0,0.58319 -1.19126,1.05597 -2.66075,1.05597l-11.21729,0l0,0c-1.4695,0 -2.66075,-0.47278 -2.66075,-1.05597c0,-0.5832 1.19125,-1.05598 2.66075,-1.05598z" strokeWidth="0.1" fill="currentColor"/>
								<path transform="rotate(-90.3604 3.96551 14.8399)" stroke="#000" id="svg_7" d="m0.57668,13.78388l6.77766,0l0,0c0.88789,0 1.60767,0.47278 1.60767,1.05598c0,0.58319 -0.71978,1.05597 -1.60767,1.05597l-6.77766,0l0,0c-0.88789,0 -1.60767,-0.47278 -1.60767,-1.05597c0,-0.5832 0.71977,-1.05598 1.60767,-1.05598z" strokeWidth="0.1" fill="currentColor"/>
								<path transform="rotate(-90.3604 24.7988 14.906)" stroke="#000" id="svg_8" d="m21.40993,13.85002l6.77766,0l0,0c0.88788,0 1.60766,0.47278 1.60766,1.05598c0,0.58319 -0.71978,1.05597 -1.60766,1.05597l-6.77766,0l0,0c-0.8879,0 -1.60767,-0.47278 -1.60767,-1.05597c0,-0.5832 0.71977,-1.05598 1.60767,-1.05598z" strokeWidth="0.1" fill="currentColor"/>
								</g>

								</svg></span>
						</button>
						<button className={"tablinks"} onClick={(e)=>this.openTab(e, 'bid')} >
							<span><svg xmlns="http://www.w3.org/2000/svg" width="32"  height="32" fill="currentColor" >
									<g>
									<title>Layer 1</title>
									<path fill="currentColor" d="m21.9647,11.43279l2.74279,0.05664c-0.43636,-8.85223 -13.28071,-8.68847 -13.55004,0.57871l-0.55277,5.66242c-0.63075,2.52464 -3.00201,2.46253 -5.45676,2.1736l-0.90917,2.50977c5.25416,0.24802 8.21083,0.42111 9.43845,-4.63255l0.56712,-5.62266c0.34556,-5.68163 7.16603,-5.72729 7.72038,-0.72594l0,0.00001z" id="svg_7" strokeWidth="0.1" stroke="#000"/>
									<rect stroke="#000" id="svg_1" height="2.60318" width="24.14012" y="13.07909" x="1.60097" strokeWidth="0.1" fill="currentColor"/>
									</g>

								</svg></span>
						</button>
						<button className={"tablinks "} onClick={(e)=>this.openTab(e, 'indicator-history')} id={"sel-history"} style={{float: "left", display: "none"}}
							>
							<span style={{position:'relative'}}>
							<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 28" width="32" height="32" fill="currentColor">
								<g fill="currentColor">
								<path fillRule="nonzero"
								d="M14 18.634l-.307-.239-7.37-5.73-2.137-1.665 9.814-7.633 9.816 7.634-.509.394-1.639 1.269-7.667 5.969zm7.054-6.759l1.131-.876-8.184-6.366-8.186 6.367 1.123.875 7.063 5.491 7.054-5.492z">
								</path>
								<path d="M7 14.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"></path>
								<path d="M7 17.5l-1 .57 8 6.43 8-6.5-1-.5-7 5.5z"></path>
								</g>
								</svg>
								<span className={"badge"} id={"sel-indicator-cnt"} style={{position: 'absolute', fontSize: '12px',top: '-12px',
								right: '-9px'}}>0</span>
							</span>
							
						</button>
					</div>
					<div className={'content-around draw-pane'}>
						<button className={"del-btn"} onClick={()=>this.drawDone(0)}>DELETE</button>
						<button className={"done-btn"} onClick={()=>this.drawDone(1)}>DONE</button>
					</div>
				</div>
			</div>

		);
	}
}

export default FullChart;