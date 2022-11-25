import * as React from 'react';
import './index.css';
import Datafeed from './api/'
import { useState } from 'react';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			symbol: '',
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
			loaded: ''
		};
	}

	// static defaultProps = {
	// 	clientId: 'tradingview.com',
	// 	userId: 'public_user_id',
	// 	fullscreen: false,
	// 	autosize: true,
	// 	height: (window.innerHeight - 55),
	// 	studiesOverrides: {},
	// };

	widget = null;

	componentDidMount(props) {
		
	}
	static removeOverlay(props){
		if(props.loaded == none)
			props.chartloaded(1, state.loaded);
	}
	static getDerivedStateFromProps(nextProps) {
		if ( nextProps.option.selectedItem !== '') {
			switch (nextProps.option.selectedItem) {
				case 'symbol':
					window.tvWidget.setSymbol(nextProps.option.symbol, nextProps.option.chartunit);
					break;
				case 'chartunit':
					window.tvWidget.setSymbol(nextProps.option.symbol, nextProps.option.chartunit);
					break;
				case 'period':
					// window.tvWidget.chart().setResolution(nextProps.option.period);
					window.tvWidget.setSymbol(nextProps.option.symbol, nextProps.option.period);
					break;
				case 'charttype':
					window.tvWidget.chart().setChartType(nextProps.option.charttype);
					break;
				case 'add_indicator':
					let indic_id = window.tvWidget.chart().createStudy(nextProps.option.add_indicator);
					let data = {
						obj_id: indic_id,
						allIds: window.tvWidget.chart().getAllShapes(),
					}
					nextProps.getShapeId(data, 1);
					break;
				case 'add_drawing':
					let draw_id = window.tvWidget.selectLineTool(nextProps.option.add_drawing);
					let data2 = {
						obj_id: draw_id,
						allIds: window.tvWidget.chart().getAllShapes(),
					}
					nextProps.getShapeId(data2, 2);
					break;

				case 'del_indic_obj':
					
					window.tvWidget.chart().removeEntity(nextProps.option.del_obj);
					
					break;
				case 'del_obj':
					let arr = window.tvWidget.chart().getAllShapes();
					if (arr.length == 0) {
						break;
					}
					let shape_id = '';
					if (nextProps.option.del_obj === -1) {
						shape_id = arr[arr.length-1].id;
					}else if (nextProps.option.del_obj >= 0) {
						shape_id = arr[nextProps.option.del_obj].id;
					}
					
					window.tvWidget.chart().removeEntity(shape_id);
					
					break;
				default:
					break;
			}
		}

		if(nextProps.option.selectedItem === 'onStart') {
			const widgetOptions = {
				debug: false,
				height: nextProps.option.height,
				width: "100%",
				symbol: nextProps.option.symbol,
				datafeed: Datafeed,
				interval: 'D',
				container_id: 'tv_chart_container',
				library_path: '/charting_library/',
				locale: getLanguageFromURL() || 'en',
				disabled_features: ['use_localstorage_for_settings'],
				enabled_features: ['study_templates'],
				charts_storage_url: 'https://saveload.tradingview.com',
				charts_storage_api_version: '1.0',
				preset: "mobile",
				auto_save_delay: 2000,
				// client_id: this.props.clientId,
				// user_id: this.props.userId,
				// fullscreen: this.props.fullscreen,
				// autosize: this.props.autosize,
				// studies_overrides: this.props.studiesOverrides,
				overrides: {
					"paneProperties.background": "#0f0f0f",
					"paneProperties.vertGridProperties.color": "#262626",
					"paneProperties.horzGridProperties.color": "#262626",
					"symbolWatermarkProperties.transparency": 90,
					"scalesProperties.textColor": "#AAA",
				}
			};
			
			window.TradingView.onready(() => {
				window.tvWidget = new window.TradingView.widget(widgetOptions);
				
				window.tvWidget.onChartReady(() => {
					console.log('Chart has loaded!');
					console.log("sdf",nextProps);
					nextProps.chartloaded('none');
				});
			});
		}
	}  




	render() {
		return (
			<div>
				<div
					id={ 'tv_chart_container' }
					className={ 'TVChartContainer' }
				/>
				
			</div>
				
		);
	}
}
