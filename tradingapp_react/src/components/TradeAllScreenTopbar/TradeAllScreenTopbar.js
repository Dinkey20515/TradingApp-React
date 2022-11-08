import "bootstrap/dist/css/bootstrap.min.css";
import "./TradeAllScreenTopbar.css";

function TradeAllScreenTopbar(props) {
	return (
		<div className="TradeAllScreenTopbarContainer">
			<div className="TradeAllScreenTopStatusbar">
				<span className="toTopLeft TradeAllScreenTopStatusbarText"> adsf </span>
				<span className="toTopRight TradeAllScreenTopStatusbarText"> adsf </span>
			</div>
			<div className="topStatusHorizonBar" />
			<div className="TradeAllScreenTopNavbar">
				<button className="topNavBarButton topNavBaritem">
					<span className="TradeAllScreenTopStatusbarText">Favorite</span>
					<span className="TradeAllScreenTopStatusbarText">Popular</span>
					<span className="TradeAllScreenTopStatusbarText">New</span>
					<span className="TradeAllScreenTopStatusbarText">Weekend Trading</span>
					<span className="TradeAllScreenTopStatusbarText">ETF</span>
					<span className="TradeAllScreenTopStatusbarText">Commodities</span>
					<span className="TradeAllScreenTopStatusbarText">Oil Markets</span>
					<span className="TradeAllScreenTopStatusbarText">Indices</span>
					<span className="TradeAllScreenTopStatusbarText">Forex</span>
					<span className="TradeAllScreenTopStatusbarText">Cryptos</span>
					<span className="TradeAllScreenTopStatusbarText">Shares</span>
					<span className="TradeAllScreenTopStatusbarText">Futures</span>

				</button>
			</div>
		</div>
	);
}
export default TradeAllScreenTopbar;
