
import { useEffect, useState } from "react";
// import "./OpenbetsForMobile.css"
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
;
import { useNavigate, useParams } from "react-router-dom";
import { useBetListByMatchIdMutation } from "../../state/apis/main/apiSlice";
const OpenBetsBetPage = () => {


    const { matchId } = useParams();

    const [Show, setShow] = useState(false)
    const handleMainScorll = () => {
        if (Show === false) {
            setShow(true)
        } else {
            setShow(false)

        }
    }


    const [triger, { data: unSettledBet }] = useBetListByMatchIdMutation();

    // const [triger, { data: unSettledBet }] = useUnsettledBetMutation();
    console.log(unSettledBet?.data, "aaxqwewdcvev");
    const navigate = useNavigate();

    useEffect(() => {
        if (unSettledBet?.data !== "") {
            setShow(true)
        }
    }, [])
    // useEffect(() => {
    //     let data = {
    //         "betType": 1,
    //         "index": 0,
    //         "noOfRecords": 5,
    //         "sportType": 1,
    //         "isDeleted": "false"
    //     }
    //     triger(data)
    // }, [])
    useEffect(() => {
        let data = {
            matchId: matchId
        }
        triger(data)
    }, [])
    // https://api.247365.exchange/admin-new-apis/enduser/unsettled-bet
    // {"betType":1,"index":0,"noOfRecords":5,"sportType":1,"isDeleted":"false"}
    return (
        <div className="OpenBetsList">

            <div className="OpenBetsList__title">
                <span className="OpenBetsList__title__text">Matched Bets</span>
                <KeyboardArrowDownIcon fontSize="large" style={{
                    color: "black",
                    width: "10%",
                    fontSize: "20px",
                    padding: "0px",
                    rotate: Show === true ? "180deg" : ""
                }} onClick={handleMainScorll} />
            </div>
            {Show === true ?
                <div className="OpenBetsList__content">
                    <div className="OpenBetsItem nomatch">
                        {/* {unSettledBet?.data?.length > 0 ? */}
                        {unSettledBet?.data &&
                            Object.keys(unSettledBet?.data).map((key: any) => (
                                <>
                                    {console.log(key, "fwwcsxszqwe")}
                                    {unSettledBet?.data[key].map((item: any) => (
                                        <>
                                            {console.log(item, "Fe3rgtrwerewfdw")}
                                            <div className="OpenBetUnamteData">
                                                <div className="OpenBetUnamteData_Firts">
                                                    <span className="OpenBetUnamteData_Back" style={{ color: item?.back === true ? "#2d8ad1" : "#ef819a" }} onClick={() => navigate(`/match-details/${item?.matchId}`)}> {item?.back === true ? "Back" : "Lay"} {item?.nation}  for {item?.amount} @ {item?.rate} to Win {item?.pnl}</span>
                                                </div>

                                                <div className="OpenBetUnamteData_Second">
                                                    <span className="OpenBetUnamteData_down_details" style={{ fontWeight: "700" }}>{item?.marketName}</span>

                                                    <span className="OpenBetUnamteData_down_details"><span style={{ fontWeight: "700" }}>
                                                        Placed:
                                                    </span>
                                                        <span style={{ fontWeight: "400" }}>
                                                            {item?.betTime}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div >
                                        </>
                                    ))}

                                </>))
                            // :
                            // <> You ha   ve no <span className="lowercase">Unmatched Bets</span> </>
                        }

                    </div >
                </div>
                : ""
            }
        </div >

    )
}

export default OpenBetsBetPage