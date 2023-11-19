import { useState } from "react"
import "./MarketLiveOpenbet.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
const MarketLiveOpenbet = ({ marketData }: any) => {
    const [selectData, setSelectData] = useState("market"
    )
    const handleActive = (vl: any) => {
        setSelectData(vl)
        console.log(vl, "dsfsdfsd");

        marketData(vl)
    }
    return (
        <div className="toolbar__tabs__bar" >
            <div className={`toolbar__tabs__bar__tab ${selectData === "market" ? "activeeee" : ""}`} onClick={() => handleActive("market")}>Market</div>
            <div className={`toolbar__tabs__bar__tab ${selectData === "live" ? "activeeee" : ""}`} onClick={() => handleActive("live")}> LIVE
                <LiveTvIcon style={{
                    marginLeft: "5px",
                    fontSize: "14px"
                }} /></div >
            <div className={`toolbar__tabs__bar__tab ${selectData === "OpenBet" ? "activeeee" : ""}`} onClick={() => handleActive("OpenBet")}> Open Bet</div >
        </div>

    )
}

export default MarketLiveOpenbet