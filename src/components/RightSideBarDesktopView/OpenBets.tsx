import { useEffect, useState } from "react"
import "./OpenBets.css"
import MatchBetData from "./MatchBetData"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useUnsettledBetMutation } from "../../state/apis/main/apiSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectUser } from "../../state/features/auth/authSlice";
const OpenBets = () => {
    const [showUnmatched, setShowUnmatchedBet] = useState(true)

    const handleUnmatchedBets = () => {
        if (showUnmatched === false) {
            setShowUnmatchedBet(true)

        } else {
            setShowUnmatchedBet(false)
        }
    }
    const [triger, { data: unSettledBet }] = useUnsettledBetMutation();
    // console.log(unSettledBet?.data?.dataList, "dcevervrvweocweo");



    const authSelect = useAppSelector(selectUser);
    useEffect(() => {
        let data = {
            betType: 1,
            index: 0,
            noOfRecords: 5,
            sportType: 1,
            isDeleted: false,
        };
        if (localStorage.getItem("token")) {
            triger(data);
        }
    }, [authSelect?.token]);
    useEffect(() => {
        if (unSettledBet?.data?.dataList === false) {

            setShowUnmatchedBet(false)
        }
    }, [unSettledBet?.data?.dataList])

    return (
        <div className="betSlipDesktop__betMain">
            <div className="betSlipDesktop__topFilters">
                <div className="betSlipDesktop__topFilters-item">
                    <input type="checkbox" />
                    <span className="betSlipDesktop__topFilters-item-title">Show bet Info</span>
                </div>
                <div className="betSlipDesktop__topFilters-item">
                    <input type="checkbox" />
                    <span className="betSlipDesktop__topFilters-item-title">
                        Show bets for this event</span>
                </div>
            </div>

            {localStorage.getItem("token") &&
                <div className="OpenBetsList" style={{ height: showUnmatched === true ? "250px" : "" }}>
                    <div className="OpenBetsList__title" onClick={handleUnmatchedBets}>
                        <span className="OpenBetsList__title__text">Matched Bets</span>
                        <div className="" >
                            <KeyboardArrowUpIcon style={{
                                color: "black",
                                fontSize: "17px",
                                background: "#fff",
                                // transform: {showUnmatched ? "rotate(180deg)" :""}
                                rotate: showUnmatched ? "" : "180deg"
                            }} />
                        </div>
                    </div>
                    {showUnmatched &&
                        <MatchBetData unSettledBet={unSettledBet} />}


                </div>
            }
        </div>
    )
}

export default OpenBets