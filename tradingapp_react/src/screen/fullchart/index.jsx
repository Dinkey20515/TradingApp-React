import * as React from 'react';
import './style.css';


import { TVChartContainer } from '../../components/TVChartContainer/index';
import jsonData from "./data";
import $ from 'jquery';
import renderHTML from 'react-render-html';



class FullChart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			symbol: 'Coinbase:BTC/USD',
			interval: '15',
			containerId: 'tv_chart_container',
			libraryPath: '/charting_library/',
			chartsStorageUrl: 'https://saveload.tradingview.com',
			chartsStorageApiVersion: '1.1',
			clientId: 'tradingview.com',
			userId: 'public_user_id',
			fullscreen: false,
			autosize: true,
			studiesOverrides: {},
		};
		
	}

	//variables
	log_flag = 1;							//display logs flag
	g_selectedShapeIndexes = [];			//selected drawingtool indexes
	g_selShapeIds = [];						//selected drawingtool id(of chart lib)
	g_selDrawIndex = 0;						//selected drawingtool index(of array)
	g_selMenu = ""; 						//select bottom menu index
	g_selIndicIds = [];						//array of indicator id selected

	componentDidMount() {
		console.log('start')
	}

	log(tag, obj){
		if(this.log_flag){
			console.log(tag+'====='+obj);
			console.log(obj);
		}
	}

	openTab(evt, tabName) {
		console.log(evt.currentTarget)
		// let el = event.target;
		// el.classList.add('active');
		// $(el).addClass('active'); I'm not familiar with jquery but try it
		if (this.g_selMenu === tabName) {
			this.initTab();
			this.g_selMenu = '';
			return;
		}
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
		
		$('.draw-pane').css('display', 'flex');
		this.g_selDrawIndex = index
		
		//widget.selectLineTool(g_drawing_pram[index]);
	}


	drawDone(flag) {
		$('.draw-pane').css('display', 'none');
		var arr = [];//widget.chart().getAllShapes();
		if (arr.length == 0) {
			return;
		}
		var shape_id = arr[arr.length-1].id;
		if(!flag) {
			//delete shape
			//widget.chart().removeEntity(shape_id);
			return;
		}
			
		this.g_selShapeIds.push(shape_id);
		this.g_selectedShapeIndexes.push(this.g_selDrawIndex);
		$('#sel-indicator-cnt').text(this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length);
		if ((this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length) > 0)
			$('#sel-history').css('display', 'block');
		//add select history list
		this.selectedDrawing(this.g_selDrawIndex);
		
	}

	selectedDrawing(id) {
		let str = '';
		str = str + (<li className="draw-item" id={'sel_draw_'+id}><div style="padding: 10px;">{this.g_drawing_svg[id]}<span style={{padding: '10px 0'}}>{ this.g_drawing[id] }</span><span style={{float: 'right', fontSize: '25px', margin: '-8px'}}><span style={{paddingRight: '10px', color:'#bb8961'}} onclick={this.deleteDrawing(id)}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor" style="margin-bottom: -8px;"><path d="m.58 1.42.82-.82 15 15-.82.82z"></path><path d="m.58 15.58 15-15 .82.82-15 15z"></path></svg></span></span></div></li>);
		
		$('#sel-drawing-list').append(str);
	}

	//select effect in indicator & drawing page
	openIndicators(pageName, elmnt, id) {
		var i, tabcontent2, tablink2s;
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

	drawByPeriod(index, e) {
		$(".period-active").removeClass("period-active");
		var data = ["1", "5", "15", "30", "60", "300"];
		e.currentTarget.className = "period-active";
		//widget.setSymbol("Bitfinex:BTC/USD", g_period[index]);
	}

	drawByChartType(index, e) {
		$(".chart-active").removeClass("chart-active");
		e.currentTarget.className = "chart-active";
		//widget.chart().setChartType(index);
	}

	drawByChartUnit(index, e) {
		$(".timeunit-active").removeClass("timeunit-active");
		var data = ["1", "5", "15", "30", "60", "300"];
		e.currentTarget.className = "timeunit-active";
		//widget.setSymbol("Bitfinex:BTC/USD", data[index]);
	}

	//remove indicator in chart
	deleteIndicator(index) {
		$('#sel_indic_'+index).remove();
		const result = this.g_selectedIndicators.filter(function checkIdic(id) { return id != index; });
		const id_index = this.g_selectedIndicators.findIndex(function checkAdult(id) { return id == index; });
		$('[name="'+this.g_indicators[index]+'"]').removeClass('indicator-active');
		this.g_selectedIndicators = result;
		$('#sel-indicator-cnt').text(this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length);
		
		//widget.chart().removeEntity(this.g_selIndicIds[id_index]);
		const result1 = this.g_selIndicIds.filter(function checkIdic(id) { return id != this.g_selIndicIds[id_index]; });
		this.g_selIndicIds = result1;
		if ((this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length) === 0) {
			$('#sel-history').css('display', 'none');
			this.initTab();
			
		}
		
	}

	//remove shape in chart
	deleteDrawing(index) {
		$('#sel_draw_'+index).remove();

		const id_index = this.g_selectedShapeIndexes.findIndex(function fun2(id) { return id == index; });
		const result = this.g_selectedShapeIndexes.filter(function fun1(id) { return id != index; });
		this.g_selectedShapeIndexes = result;

		//widget.chart().removeEntity(this.g_selShapeIds[id_index]);
		const result1 = this.g_selShapeIds.filter(function fun3(id) { return id != this.g_selShapeIds[id_index]; });
		this.g_selShapeIds = result1;
		
		$('#sel-indicator-cnt').text(this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length);
		if ((this.g_selectedIndicators.length+this.g_selectedShapeIndexes.length) === 0) {
			$('#sel-history').css('display', 'none');
			this.initTab();
		}
	}


    render() {
		let {g_period, g_chartType, g_chartType_svg, g_chartUnit, g_indicators, g_drawing, g_drawing_pram, g_drawing_svg, g_selectedIndicators} = jsonData;
		let {str1, str2, str3, str4, str5} = '';
		
		str2 = g_chartType.map(function(item, i){
			if (i < 4 || i > 8) {
				return (<li key={i} onClick={(e)=>this.drawByChartType( i , e)}>{renderHTML(g_chartType_svg[i])}</li>)
			}
		})
		str4 = g_chartUnit.map(function(item, i){
			return (<li key={i} onClick={(e)=>this.drawByChartUnit( i , e)}>{item} </li>)
		})
		str3 = g_indicators.map(function(item, i){
			return (item.toLowerCase()=='spread' || item.toLowerCase()=='ratio')?"":
			 (<li className='indicator-item' name={item}  key={i} onClick={ (e)=>this.drawByIndicator( i, e)} ><div style={{padding: '10px'}}><span style={{padding: '10px 0'}}> {item} </span><span style={{float: 'right', fontSize: '25px', margin: '-8px'}}>+</span></div></li>);
		})
		str5 = g_drawing.map(function(item, i){
			return (<li className='indicator-item' name={item} key={i} onClick={(e)=>this.drawByDrawing( i, e)} ><div style={{padding: '10px'}}> {renderHTML(g_drawing_svg[i])}<span style={{padding: '10px 0'}}> {item}</span><span style={{float: 'right', fontSize: '25px'}}>+</span></div></li>)
		})

		return (
			<div>
				<TVChartContainer />
				<div id={'bottom-menu'} >
					<div id='candles' className={'tabcontent'}> 
						 
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
								<div style={{height: "65vh", overflow: "auto"}}>
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
									<ul id={"sel-indicator-list"} className={"indicator-lists"}></ul>
								</div>
							</div>

							<div id={"sel-drawings"} className={"tabcontent3"}>
								<div style={{height: "70vh", overflow: "auto"}}>
									<ul id={"sel-drawing-list"} className={"indicator-lists"}></ul>
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
								{g_period.map(function(item, i){
			return (<li key={i} onClick={(e)=>this.drawByPeriod( i , e)}>{item} </li>)
		})}
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
						<button className={"tablinks "} onClick={(e)=>this.openTab(e, 'indicator-history')} id={"sel-history"} style={{float: "left", display: "block"}}
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
								<span className={"badge"} id={"sel-indicator-cnt"} style={{position: 'absolute', fontSize: '12px',top: '-19px',
								right: '-9px'}}>0</span>
							</span>
							
						</button>
					</div>
					<div className={'content-around draw-pane'}>
						<button className={"del-btn"} onClick={this.drawDone(0)}>DELETE</button>
						<button className={"bid-btn"} onClick={this.drawDone(1)}>DONE</button>
					</div>
				</div>
			</div>

		);
	}
}

export default FullChart;