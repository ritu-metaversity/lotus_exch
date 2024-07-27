import { useEffect, useState } from "react"
import "./MarketLiveOpenbet.css"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useBetListByMatchIdMutation } from "../../../state/apis/main/apiSlice";
import { useParams } from "react-router-dom";
const MarketLiveOpenbet = ({ marketData }: any) => {
    const [selectData, setSelectData] = useState("market"
    )
    const { matchId } = useParams();

    const [triger, { data: unSettledBet }] = useBetListByMatchIdMutation();

    const handleActive = (vl: any) => {
        setSelectData(vl)
        console.log(vl, "dsfsdfsd");

        marketData(vl)
    }
    console.log(unSettledBet, "sdfghjkhgfgf");

    useEffect(() => {
        let data = {
            matchId: matchId
        }
        triger(data)
    }, [])
    return (
        <div className="toolbar__tabs__bar" >
            <div className={`toolbar__tabs__bar__tab ${selectData === "market" ? "activeeee" : ""}`} onClick={() => handleActive("market")}>Market</div>
            <div className={`toolbar__tabs__bar__tab ${selectData === "live" ? "activeeee" : ""}`} onClick={() => handleActive("live")}> LIVE
                <LiveTvIcon style={{
                    marginLeft: "5px",
                    fontSize: "14px"
                }} /></div >
            <div className={`toolbar__tabs__bar__tab ${selectData === "OpenBet" ? "activeeee" : ""}`} onClick={() => handleActive("OpenBet")}> Open Bet{" "}


                {unSettledBet?.data
                    ? "(" +
                    Object.values(unSettledBet?.data)?.reduce(
                        (accu, current: any) => {
                            accu += current.length;
                            return accu;
                        },
                        0
                    ) +
                    ")"
                    : ""}{" "}
            </div >
        </div>

    )
}

export default MarketLiveOpenbet