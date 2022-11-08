import "bootstrap/dist/css/bootstrap.min.css";
import "./SellerBuyerColorBar.css";

function SellerBuyerColorBar(props) {
    return (
        <div className='sellerBuyerContainer'>
            <div className="lowHigh">
                <div className="sellerBuyerRow">
                    <span className="lowText toLeft">SELLERS</span>
                    <span className="lowText toRight">BUYERS</span>
                </div>
                <div className="barRow">
                    <div className="horizonSellerBar" style={{ width: props.seller }} />
                    <div className="horizonBuyerBar " style={{ width:props.buyer }} />
                </div>
                <span className="sellerValue toLeft" >{props.seller}</span>
                <span className="buyerValue toRight">{props.buyer}</span>
                
            </div>
        </div>
        
    );
}

export default SellerBuyerColorBar;
