import { useEffect, useState } from "react"
import "./RightSideBetPage.css"
import Bettingpage from "./Bettingpage"
import OpenBets from "./OpenBets"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectBetData } from "../../state/features/client/clientSlice"
import { useGetBalanceUpdateQuery } from "../../state/apis/main/apiSlice"
import StakeEditPopup from "./StakeEdit/StakeEditPopup"

const RightSideBetPage = () => {
    const [show, setShow] = useState("")
    const betData = useAppSelector(selectBetData)
    const [showBalance, setShowBalance] = useState(false)
    // const [showUnmatched, setShowUnmatchedBet] = useState(false)
    const [showBetData, setShowBetData] = useState(true)
    const [showStake, setShoeStake] = useState(false)


    const { data: balanceDtaa } = useGetBalanceUpdateQuery(undefined, { pollingInterval: 3000, skip: !(localStorage.getItem("token")) });

    useEffect(() => {
        if (betData === null || "" || undefined) {
            setShowBetData(false)
            setShow("")

        } else {
            setShowBetData(true)
            setShow("1")


        }

    }, [betData])


    console.log(betData, showBetData, "sdfgr3ethyjukimunybtrv");



    const handleAccountBalance = () => {
        if (showBalance === false) {
            setShowBalance(true)

        } else {
            setShowBalance(false)
        }
    }
    const handleEditStake = () => {
        if (showStake === false) {
            setShoeStake(true)
        } else {
            setShoeStake(false)
        }
    }
    const closePopup = () => {
        setShoeStake(false)

    }

    console.log(balanceDtaa, "kijuytrfdcfvgbhjuytrde");

    return (
        <>
            <div className="balanceInformation">
                <div className="balanceInformationHeader" onClick={handleAccountBalance}>
                    <span className="balanceInformation__title">
                        Available Credit:{" "}
                        <span className="balanceInformation__title" style={{ fontWeight: 400 }}>
                            {localStorage.getItem("token") !== null ?
                                (balanceDtaa?.data?.balance
                                    ? (Number(balanceDtaa?.data?.balance -
                                        balanceDtaa?.data?.libality).toFixed(2))
                                    : "0:00") : "0:00"}
                        </span>
                    </span>
                    <div className="balanceInformation__downButton upImg" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
                                fill="#2C4F57"
                            />
                        </svg>
                    </div>
                </div>
                {showBalance &&
                    <div className="detailedBalance">
                        <div className="detailedBalance__title">
                            Available Balance:{" "}
                            <span className="detailedBalance__title-sub">
                                {localStorage.getItem("token") !== null ?
                                    (balanceDtaa?.data?.balance
                                        ? (Number(balanceDtaa?.data?.balance -
                                            balanceDtaa?.data?.libality).toFixed(2))
                                        : "0:00") : "0:00"

                                }
                            </span>
                        </div>
                        <div className="detailedBalance__title">
                            Total Net Exposure:{" "}
                            <span className="detailedBalance__title-sub">{localStorage.getItem("token") !== null ?
                                (balanceDtaa?.data?.libality
                                    ? Number(balanceDtaa?.data?.libality).toFixed(2)
                                    : "0:00") : "0:00"}</span>
                        </div>
                    </div>
                }
            </div >

            <div className="betSlipDesktop__topSection">
                <span className="betSlipDesktop__topSection-title">Betslip</span>
            </div>

            <div className="betSlipDesktop__betTop">
                <div style={{ display: "flex" }}>
                    <div className={`betSlipDesktop__betTop-slip ${show === "1" ? "active" : ""}`} onClick={() => setShow("1")}>Betslip</div>
                    <div className={`betSlipDesktop__betTop-openBets ${show === "1" ? "" : "active"}`} onClick={() => setShow("")}>Open Bets</div>
                </div>
                <button type="button" className="betSlipDesktop__betTop-editStakesBtn" onClick={handleEditStake}>Edit Stakes</button>
            </div>
            <div className="outer_layout_stake">

                {showStake && localStorage.getItem("token") && <StakeEditPopup closePopup={closePopup} />}
            </div>

            {
                show === "1" ?
                    showBetData && betData ?
                        <Bettingpage />
                        :

                        <div className="betSlipDesktop__betMain">
                            <div className="DesktopBetPlacing-container">
                                <div className="DesktopBetPlacing__empty-message">
                                    Click on the odds to add selections to the betslip.
                                </div>
                            </div>
                        </div>

                    :

                    <OpenBets />

            }


        </>

    )
}

export default RightSideBetPage