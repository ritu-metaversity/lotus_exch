import { useEffect, useState } from "react";
import "./BettingPopUp.css"

import { selectUser } from "../../state/features/auth/authSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
import { usePlaceBetMutation, useGetStackDetailsQuery } from "../../state/apis/main/apiSlice";
import { setSelectedSid } from "../../state/features/client/clientSlice";
import { useDispatch } from "react-redux";

const BetingPopUpForMobile = ({ mobileViewBettingData, mobileViewFancyBetting }: any) => {
    const user = useAppSelector(selectUser)
    // const betData = useAppSelector(selectBetData);
    console.log(mobileViewBettingData, mobileViewFancyBetting, "dsrgethrjytkuilyymujhngb");
    const { matchId } = useParams();

    const dispatch = useDispatch()

    const [userIP, setUserIP] = useState("");
    const [updated, setUpdated] = useState(0);
    const { data } = useGetStackDetailsQuery(undefined)
    console.log(data?.data, "sdfsdfsdfsdf");



    useEffect(() => {
        fetch("https://oddsapi.247idhub.com/betfair_api/my-ip")
            .then((res) => res.json())
            .then((res) => {

                setUserIP(res?.ip);
            });
    }, []);
    const handleInput = (val: any) => {
        setUpdated((o) => Number(o) + Number(val));
        // if (bitValue?.Gamenamemeeee !== "Fancy ") {
        //   setConfirmBet(true);
        // }

        // cssClasssss("bet-modal");

        // datatattatattat("true");
    };
    const [triger, { data: bettingResult, error }] = usePlaceBetMutation()
    console.log(mobileViewBettingData?.size, "lnjohuiyguftychvgjbhjnl");
    console.log(error, "betDatafssd");

    useEffect(() => {
        // if (bettingResult?.status === true) {
        //     dispatch(setSelectedSid(""))
        // } else if (error?.status === true) {
        //     dispatch(setSelectedSid(""))
        // }

    }, [bettingResult])

    const handleBetPalce = () => {
        let dataaaaa = {
            userIp: userIP,
            isFancy: mobileViewFancyBetting === "fancy" ? true : false,
            isBack: mobileViewBettingData?.color === "blue" ? true : false,
            odds: mobileViewBettingData?.vl,
            stake: updated,
            name: mobileViewBettingData?.SelectionIdForAll?.runnerName,
            selectionId: mobileViewFancyBetting === "fancy" ? 0 : mobileViewBettingData?.SelectionIdForAll?.selectionId || mobileViewBettingData?.SelectionIdForAll,
            priceValue: mobileViewFancyBetting === "fancy" ? mobileViewBettingData?.color === "blue" ? mobileViewBettingData?.allData?.bs1 : mobileViewBettingData?.allData?.ls1 : mobileViewBettingData?.vl,
            marketName: mobileViewBettingData?.allData?.matchName,
            placeTime: new Date(),
            marketId: mobileViewFancyBetting === "fancy" ? mobileViewBettingData?.allData?.sid : mobileViewBettingData?.allData?.marketId || mobileViewBettingData?.allData?.mid,
            matchId: mobileViewBettingData?.allData?.matchId ? mobileViewBettingData?.allData?.matchId : matchId,
            t: mobileViewBettingData?.allData?.t,
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

        if (dataaaaa) {
            // axios.post(
            //     "http://23.106.234.25:8192/admin-new-apis/enduser/place-bets", dataaaaa,
            //     {
            //         headers: {
            //             "Content-Type": "application/json",
            //             Authorization: `Bearer ${TokenId}`,
            //         },
            //     }
            // )
            //     .then((res) => {
            //         setEditStack(res?.data?.data)
            //         // toast.success(data.message);
            //         console.log(res, "fsdgdhfjdgfdsa");

            //     })
            //     .catch((error) => {
            //         console.log(error?.response?.data?.message
            //             , "fsdgdhfjdgfdsa");
            //         toast.error(error?.response?.data?.message)

            //     })

        }
    }
    console.log(mobileViewBettingData?.mobileViewBettingData, "rrjfnwinwokdoews");


    return (
        <div className="BetPlacing__wrapper" style={{ backgroundColor: mobileViewBettingData?.color === "blue" ? "#a7d8fd" : "#F9C9D4" }}>
            <div className="BetPlacing__wrapper__InnerWrapper">

                <div className="BetPlacing_Upper_Head_Odds">
                    <div className="BetPlacing_Upper_Head_Odds_LeftSide">
                        <div className="BetPlacing_Upper_Head_Odds_LeftSide_Uper">
                            Odds

                        </div>
                        <div className="BetPlacing_Upper_Head_Odds_LeftSide_Lower">
                            {mobileViewBettingData?.vl}
                        </div>
                    </div>
                    <div className="BetPlacing_Upper_Head_Odds_RightSide">
                        <div className="BetPlacing_Upper_Head_Odds_RightSide_Upper">
                            <span>STAKE</span>
                            <span>Max Mkt: 0</span>
                        </div>
                        <input className="BetPlacing_Upper_Head_Odds_RightSide_Lower" placeholder="Max:0"
                            onChange={(e) =>
                                !isNaN(Number(e.target.value)) &&
                                setUpdated(Number(e.target.value))
                            }
                            value={updated === 0 ? 0 : updated}
                        />
                        {/* <div className="BetPlacing_Upper_Head_Odds_RightSide_Lower">
                        </div> */}

                    </div>
                </div>
                <div className="BetPlacing_Upper_Head_Stack">
                    {
                        data?.data &&
                        Object.values(data?.data)
                            .slice(0, 6)
                            .map((key: any) => {
                                return (
                                    <button className="Stack_Button_forBetting" onClick={() => handleInput(key)}>  + {key}
                                    </button>
                                )
                            })}

                    {/* <button className="Stack_Button_forBetting">+2000</button>
                     <button className="Stack_Button_forBetting">+3000</button>

                     <button className="Stack_Button_forBetting">+4000</button>
                     <button className="Stack_Button_forBetting">+3400</button>
                     <button className="Stack_Button_forBetting">+2300</button> */}
                </div>
                <div className="BetPlacing_Upper_Head_Cancel_Done_Login">

                    <button onClick={() => dispatch(setSelectedSid(""))} className="BetPlacing_Upper_Head_Cancel_Done_Login_btnss btn-cancel">Cancel</button>
                    {/* <button>Place Bet</button> */}
                    {user ?
                        <button className="BetPlacing_Upper_Head_Cancel_Done_Login_btnss btn-login" onClick={handleBetPalce}>
                            <span>Place Bet</span>
                            <span>Profit:
                                {/* {marketId?.includes("BM") ||
                            marketId?.includes("Bm") ||
                            marketId?.includes("bm")
                              ? profits?.Bookmaker?.filter(
                                  (item) => item?.mid === marketId
                                ).map((profit) => {
                                  return (
                                    profit.sid === selectionId &&
                                    (
                                      (profit?.value || 0) +
                                      ((colorName === "back" ? 1 : -1) *
                                        spanValueRate *
                                        updated) /
                                        100
                                    ).toFixed(2)
                                  );
                                })
                              : profits?.Odds[marketId]?.map((profit) => {
                                  return (
                                    profit.sid === selectionId &&
                                    (
                                      (profit?.value || 0) +
                                      (colorName === "back" ? 1 : -1) *
                                        (spanValueRate - 1) *
                                        updated
                                    ).toFixed(2)
                                  );
                                })} */}

                                {
                                    mobileViewBettingData?.color === "blue"
                                        ? mobileViewFancyBetting
                                            ? (updated * mobileViewBettingData?.size
                                            ) / 100
                                            : (mobileViewBettingData?.allData?.mid?.includes("BM") ||
                                                mobileViewBettingData?.allData?.mid?.includes("bm") ||
                                                mobileViewBettingData?.allData?.mid?.includes("Bm")
                                                ? (mobileViewBettingData?.vl * updated) / 100
                                                : (mobileViewBettingData?.vl - 1) * updated
                                            ).toFixed(2)
                                        : updated
                                }
                            </span>
                        </button>
                        :
                        <button className="BetPlacing_Upper_Head_Cancel_Done_Login_btnss btn-login" >Log in</button>

                    }
                </div>
            </div >
        </div >

    )
}

export default BetingPopUpForMobile