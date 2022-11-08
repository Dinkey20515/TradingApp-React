import * as React from 'react';
import './index.css';
import Datafeed from './api/'


function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export class TVChartContainer extends React.PureComponent {

	constructor(props) {
		super(props);
		// this.state = {
		// 	symbol: '',
		// 	period: '',
		// 	charttype: '',
		// 	add_indicator: '',
		// 	add_drawing: '',
		// 	del_obj:'',
		// 	getShapeFlg: 0,
		// };
	}

	static defaultProps = {
		
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		height: '500px',
		studiesOverrides: {},
	};

	widget = null;

	componentDidMount() {
		const widgetOptions = {
			debug: false,
			height: '500px',
			width: "100%",
			symbol: 'Coinbase:BTC/USD',
			datafeed: Datafeed,
			interval: '15',
			container_id: 'tv_chart_container',
			library_path: '/charting_library/',
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: 'https://saveload.tradingview.com',
			charts_storage_api_version: '1.0',
			preset: "mobile",
			auto_save_delay: 2000,
			client_id: this.props.clientId,
			user_id: this.props.userId,
			fullscreen: this.props.fullscreen,
			autosize: this.props.autosize,
			studies_overrides: this.props.studiesOverrides,
			overrides: {
				"paneProperties.background": "#191919",
				"paneProperties.vertGridProperties.color": "#323232",
				"paneProperties.horzGridProperties.color": "#323232",
				"symbolWatermarkProperties.transparency": 90,
				"scalesProperties.textColor": "#AAA",
			}
		};

		window.TradingView.onready(() => {
			this.widget = window.tvWidget = new window.TradingView.widget(widgetOptions);

			this.widget.onChartReady(() => {
				console.log('Chart has loaded!')
			});
		});
	}

	static getDerivedStateFromProps(props) {
		if (props.option.selectedItem !== '') {
			switch (props.option.selectedItem) {
				case 'symbol':
					window.tvWidget.setSymbol(props.option.symbol, props.option.period);
					break;
				case 'period':
					window.tvWidget.setSymbol(props.option.symbol, props.option.period);
					break;
				case 'charttype':
					window.tvWidget.chart().setChartType(props.option.charttype);
					break;
				case 'add_indicator':
					let indic_id = window.tvWidget.chart().createStudy(props.option.add_indicator);
					let data = {
						obj_id: indic_id,
						allIds: window.tvWidget.chart().getAllShapes(),
					}
					props.getShapeId(data, 1);
					break;
				case 'add_drawing':
					let draw_id = window.tvWidget.selectLineTool(props.option.add_drawing);
					let data2 = {
						obj_id: draw_id,
						allIds: window.tvWidget.chart().getAllShapes(),
					}
					props.getShapeId(data2, 2);
					break;
				case 'del_obj':
					window.tvWidget.chart().removeEntity(props.option.del_obj);
					let data3 = {
						obj_id: 0,
						allIds: window.tvWidget.chart().getAllShapes(),
					}
					props.getShapeId(data3, 3);
					break;
				default:
					break;
			}
		}
	}  

	chartMethod() {
		this.widget.setSymbol("Bitfinex:BTC/USD", 'g_period[index]');
		this.widget.chart().setChartType('index');
		const obj_id = this.widget.chart().createStudy('g_indicators[index]');
		this.widget.selectLineTool('g_drawing_pram[index]');
		var arr = this.widget.chart().getAllShapes();
		this.widget.chart().removeEntity('shape_id');
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
