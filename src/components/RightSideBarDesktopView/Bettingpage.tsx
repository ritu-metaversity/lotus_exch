import { useEffect, useState } from "react";
import "./Bettingpage.css"
// import axios from "axios";
import { useGetStackDetailsQuery, usePlaceBetMutation } from "../../state/apis/main/apiSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { selectBetData, selectBetDataFancy, setBetData } from "../../state/features/client/clientSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
const Bettingpage = () => {

    const betData = useAppSelector(selectBetData)
    const betDataFancy = useAppSelector(selectBetDataFancy)
    const [updated, setUpdated] = useState(0);
    const [userIP, setUserIP] = useState("");
    const { matchId } = useParams();
    const dispatch = useDispatch()
    const { data } = useGetStackDetailsQuery(undefined)
    console.log(betData, betDataFancy, "betDataFancybetDataFancy");
    // {JSON.stringify(betData)}


    const handleInput = (val: any) => {
        setUpdated((o) => Number(o) + Number(val));
    };

    useEffect(() => {
        fetch("https://oddsapi.247idhub.com/betfair_api/my-ip")
            .then((res) => res.json())
            .then((res) => {

                setUserIP(res?.ip);
            });
    }, []);

    const [triger, { data: bettingResult, isLoading, error, isSuccess, isError }] = usePlaceBetMutation()
    console.log(bettingResult, error, "ewfwecwe");
    console.log(betData, "mpmkjibhct");

    const handleBetPalce = () => {
        let dataaaaa = {
            userIp: userIP,
            isFancy: betDataFancy === "fancy" ? true : false,
            isBack: betData?.color === "blue" ? true : false,
            odds: betData?.vl,
            stake: updated,
            name: betData?.allData?.Name,
            selectionId: betDataFancy === "fancy" ? 0 : betData?.SelectionIdForAll?.selectionId || betData?.SelectionIdForAll,
            priceValue: betDataFancy === "fancy" ? betData?.color === "blue" ? betData?.allData?.bs1 : betData?.allData?.ls1 : betData?.vl,
            marketName: betData?.allData?.matchName,
            placeTime: new Date(),
            // marketId: betData?.allData?.marketId || betData?.allData?.mid,
            marketId: betDataFancy === "fancy" ? betData?.allData?.sid : betData?.allData?.marketId || betData?.allData?.mid,
            matchId: matchId,
            t: betData?.allData?.t || "",
            deviceInfo: {
                userAgent:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
                browser: "Chrome",
                device: "Macintosh",
                deviceType: "desktop",
                os: "Windows",
                os_version: "windows-10",
                browser_version: "108.0.0.0",
                orientation: "landscape",
            },
        };

        // const TokenId = localStorage.getItem("token");
        triger(dataaaaa)
        console.log("hello");
    }
    const handleNewStack = () => {
        setUpdated(100)
    }


    useEffect(() => {
        if (isSuccess || isError) dispatch(setBetData(""))

        return () => {
        }
    }, [isSuccess, isError])

    return (
        <div className="DesktopBetPlacing-container">
            {isLoading && <>
                <div className="desktop-bet-loading-overlay">
                    <div className="loading-popup-type-overlay">
                    </div>
                    <div className="loading-popup-type-comp">
                        <div className="loding-popup-Bet-placement-in-progress">

                            <CircularProgress style={{ color: "white" }} />
                            <span>Bet placement in progress</span>
                        </div>
                    </div>

                </div>
            </>}
            <div className="DesktopBetPlacing__topMark">
                <div className="DesktopBetPlacing__topMark-back" style={{ backgroundColor: betData?.color === "blue" ? "#a7d8fd" : "#F9C9D4" }}>
                </div>
                <span className="DesktopBetPlacing__topMark-title">Back</span>
            </div>
            <div className="DesktopBetPlacing__matchName">{betData?.allData?.eventTime}  {betData?.allData?.matchName}</div>
            <div className="DesktopBetPlacing DesktopBetPlacing--back" style={{ backgroundColor: betData?.color === "blue" ? "#a7d8fd" : "#F9C9D4" }}>
                <div className="DesktopBetPlacing__betName">
                    <span>{betData?.allData?.matchName}</span>
                    <span style={{ fontSize: 10 }}>Max Market: 0</span>
                </div>
                <div className="DesktopBetPlacing__row">
                    <div className="DesktopBetPlacing__col ">
                        <div className="DesktopBetPlacing__row f10" style={{ paddingLeft: 5 }}>
                            Odds
                        </div>
                        <div className="DesktopBetPlacing__row">
                            <div className="DesktopBetPlacing__odd">
                                <input className="DesktopBetPlacing__odd__text" value={betData?.vl} />
                            </div>
                        </div>
                    </div>
                    <div className="DesktopBetPlacing__stake DesktopBetPlacing__col--large">
                        <div className="DesktopBetPlacing__row f10">
                            <div>Stake</div>
                        </div>
                        <div className="DesktopBetPlacing__row">
                            <div className="DesktopBetPlacing__stake">
                                <input
                                    className="Bet-input-field"
                                    inputMode="decimal"
                                    placeholder="Min Bet: "
                                    type="text"
                                    style={{ border: updated ? "unset" : "2px solid #b24a3e" }}
                                    onChange={(e) =>
                                        !isNaN(Number(e.target.value)) &&
                                        setUpdated(Number(e.target.value))
                                    }
                                    value={updated === 0 ? 0 : updated}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="DesktopBetPlacing__col profit--column ">
                        <div className="DesktopBetPlacing__row f10" style={{ padding: 0 }}>
                            Profit
                        </div>
                        {/* <div className="DesktopBetPlacing__row"> */}
                        {/* <div className="DesktopBetPlacing__odd" style={{ margin: 0 }}> */}
                        <div className="DesktopBetPlacing__odd__text">
                            {
                                betData?.color === "blue"
                                    ? betDataFancy
                                        ? (updated * betData?.vl
                                        ) / 100
                                        : (betData?.allData?.mid?.includes("BM") ||
                                            betData?.allData?.mid?.includes("bm") ||
                                            betData?.allData?.mid?.includes("Bm")
                                            ? (betData?.vl * updated) / 100
                                            : (betData?.vl - 1) * updated
                                        ).toFixed(2)
                                    : updated
                            }
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="DesktopBetPlacing__col-delete">

                        <div className="DesktopBetPlacing__col-delete-btn" onClick={() => dispatch(setBetData(""))}>x</div>

                    </div>
                </div>
                <div className="DesktopBetPlacing__row DesktopBetPlacing__row--actions">
                    <div className="DesktopBetPlacing__row--actions-row">
                        {data?.data &&
                            Object.values(data?.data)
                                .slice(0, 7)
                                .map((key: any) => {
                                    return (
                                        <button className="DesktopBetPlacing__addstake" onClick={() => handleInput(key)}>  + {key}
                                        </button>
                                    )
                                })}
                        <div className="DesktopBetPlacing__row--actions-row-clear" onClick={handleNewStack}>Clear</div>
                    </div>
                </div>
                {/* <div className="DesktopBetPlacing__changedOdds">
                    <button className="DesktopBetPlacing__changedOdds-accept" type="button">
                        Accept Changes
                    </button>
                </div> */}
            </div>
            <div className="DesktopBetPlacing__matchName " style={{ fontWeight: "500" }}>Liability: 0</div>
            <div className="DesktopBetPlacing__bottomBtns">
                {/* <button className="DesktopBetPlacing__bottomBtns-remove" type="button">Remove All</button> */}
                {localStorage.getItem("token") ?
                    updated ?
                        <button className="DesktopBetPlacing__bottomBtns-placeBet" style={{ backgroundColor: "#5c996f" }} type="submit" onClick={handleBetPalce}>Place Bet</button>
                        : <button className="DesktopBetPlacing__bottomBtns-placeBet" style={{ backgroundColor: "#9a9a9a21" }} type="submit" onClick={handleBetPalce}>Place Bet</button>

                    :
                    <button className="DesktopBetPlacing__bottomBtns-placeBet" type="submit">Log In</button>
                }
            </div>
            {/* <div className="DesktopBetPlacing__confirm">
                <div className="DesktopBetPlacing__confirm-checkbox checked">
                    <input type="checkbox" />
                </div>
                <div className="DesktopBetPlacing__confirm-title">
                    Confirm bets before placing
                </div>
            </div> */}
        </div >

    )
}

export default Bettingpage