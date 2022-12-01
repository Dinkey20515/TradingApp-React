
import React from "react";
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";

import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { createVerticalLinearGradient, hexToRGBA } from "react-stockcharts/lib/utils";

const canvasBlueGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#b5d0ff", 0) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.2) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.4) },
]);

const canvasRedGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#ffb5b5", 0) },
	{ stop: 0.7, color: hexToRGBA("#fc3f3f", 0.2) },
	{ stop: 1, color: hexToRGBA("#f43232", 0.4) },
]);

class AreaChart extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			chartData: [],
            chartRatio: 0,
            flag: 0,
			color: props.color
		};
	}


    static getDerivedStateFromProps(props, state) {
        const { data, ratio } = props;
        if (data.length>0 && state.flag==0) {
            return {
                flag: 1,
                chartData : data,
                chartRatio : ratio,
              };
        }
        return null;
      }

	render() {
		const {chartData, chartRatio} = this.state;
		const {color} = this.props

		return chartData.length>0?(
			<ChartCanvas ratio={chartRatio} width={150} height={50}
				margin={{ left: 5, right: 5, top: 5, bottom: 5 }}
				seriesName="MSFT"
				data={chartData} type={'hybrid'}
				xAccessor={d => new Date(d.date)}
				displayXAccessor={d => d.date}
                propName="1"
				xScale={scaleTime()}
                mouseMoveEvent={false}
				//xExtents={[new Date(2022, 10, 28), new Date(2022, 11, 1)]}
			>
				<Chart id={0} yExtents={d => d.close}>
					<defs>
						<linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
							<stop offset="0%" stopColor="#b5d0ff" stopOpacity={0} />
							<stop offset="70%" stopColor="#6fa4fc" stopOpacity={0} />
							<stop offset="100%"  stopColor="#4286f4" stopOpacity={0} />
						</linearGradient>
					</defs>
					{/* <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
					<YAxis axisAt="left" orient="left" /> */}
					<AreaSeries
						yAccessor={d => d.close}
						//fill="url(#MyGradient)"
						stroke={color>0?"#4286f4":"#f43232"}
						strokeWidth={1}
						interpolation={curveMonotoneX}
						canvasGradient={color>0?canvasBlueGradient:canvasRedGradient}
					/>
				</Chart>
			</ChartCanvas>
		):(<div></div>);
	}
}


AreaChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]),
};

AreaChart.defaultProps = {
	type: "hybrid",
};
AreaChart = fitWidth(AreaChart);

export default AreaChart;