// import { useEffect } from "react";
import "./MatchBetData.css"
// import { useUnsettledBetMutation } from "../../state/apis/main/apiSlice";
const MatchBetData = (unSettledBet: any) => {

    console.log(unSettledBet, "jknhgfytdrszfdxcfvgbh");


    return (
        <div className="OpenBetsList__content-competition">

            <div className="OpenBetsList__content-itemsByMarket">
                {unSettledBet?.unSettledBet?.data?.dataList?.length > 0 ?

                    <div className="OpenBetsList__content-itemsRow">
                        <div className="OpenBetsList__content-itemsRow-market">Event Name</div>
                        <div className="OpenBetsList__content-itemsRow-odds">Odds</div>
                        <div className="OpenBetsList__content-itemsRow-stake">Stake</div>
                        <div className="OpenBetsList__content-itemsRow-profit">
                            Profit/Liability
                        </div>
                    </div>
                    : ""}
                <div className="">
                    {unSettledBet?.unSettledBet?.data?.dataList?.length > 0 ?

                        unSettledBet?.unSettledBet?.data?.dataList.map((item: any) =>

                            <div>
                                <div style={{ backgroundColor: item?.isback === true ? "#b1d7f9" : "#F9C9D4" }} className="DesktopOpenBetsItem">
                                    <div className="DesktopOpenBetsItem__info">
                                        <span className="DesktopOpenBetsItem__info-market">
                                            {item?.nation}
                                        </span>
                                        <span className="DesktopOpenBetsItem__info-odds">{item?.price}</span>
                                        <span className="DesktopOpenBetsItem__info-stake">{item?.amount}</span>
                                        <span className="DesktopOpenBetsItem__info-profit">{item?.pnl}</span>
                                    </div>
                                    <div className="DesktopOpenBetsItem__detailedInfo" style={{}} />
                                </div>
                            </div>
                        )
                        :
                        <div className="OpenBetsItem noBetsItem">You have no <span className="lowercase">Matched Bets</span></div>
                    }
                </div>
            </div>

        </div >

    )
}

export default MatchBetData