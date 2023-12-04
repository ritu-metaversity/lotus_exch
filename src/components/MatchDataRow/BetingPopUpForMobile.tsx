import { useEffect, useState } from "react";
import "./BettingPopUp.css"

import { selectUser } from "../../state/features/auth/authSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
import { usePlaceBetMutation, useGetStackDetailsQuery } from "../../state/apis/main/apiSlice";
import { selectBetData, setBetData, setSelectedSid } from "../../state/features/client/clientSlice";
import { useDispatch } from "react-redux";
import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const BetingPopUpForMobile = ({ mobileViewBettingData, mobileViewFancyBetting }: any) => {
    const user = useAppSelector(selectUser)
    const betData = useAppSelector(selectBetData);
    console.log(mobileViewBettingData, "dsrgethrjytkuilyymujhngb");
    const { matchId } = useParams();

    const dispatch = useDispatch()

    const [userIP, setUserIP] = useState("");
    const [updated, setUpdated] = useState(0);
    const { data } = useGetStackDetailsQuery(undefined)
    console.log(updated, "sdfsdfsdfsdf");




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

    const [triger, { data: bettingResult, error, isLoading, isError, isSuccess }] = usePlaceBetMutation()
    console.log(mobileViewBettingData?.size, "lnjohuiyguftychvgjbhjnl");
    console.log(error, bettingResult, "betDatafssd");

    useEffect(() => {
        // if (bettingResult?.status === true) {
        //     dispatch(setSelectedSid(""))
        // } else if (error?.status === true) {
        //     dispatch(setSelectedSid(""))
        // }
        dispatch(setBetData({ ...betData, stake: updated }))
    }, [updated])

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
    console.log(mobileViewBettingData?.allData?.maxBet, "rrjfnwinwokdoews");

    useEffect(() => {
        if (isSuccess || isError) dispatch(setSelectedSid(""))

        return () => {
        }
    }, [isSuccess, isError])
    console.log(updated, "DSGfdhgsfsaadfg");
    let placeholder = `Max: ${mobileViewBettingData?.allData?.maxBet}`
    return (
        <div className="BetPlacing__wrapper" style={{ backgroundColor: mobileViewBettingData?.color === "blue" ? "#a7d8fd" : "#F9C9D4" }}>
            <Dialog fullWidth maxWidth="sm" open={isLoading} >
                <DialogContent>
                    <div className="betting_place_lodder">
                        <span className="betting_place_lodder_placeeeeee">
                            Your bet is being processed.
                        </span>
                        <span className="betting_place_lodder_placeeeeee">
                            Please wait...
                        </span>
                        <CircularProgress></CircularProgress>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="BetPlacing__wrapper__InnerWrapper">

                <div className="BetPlacing_Upper_Head_Odds">
                    <div className="BetPlacing_Upper_Head_Odds_LeftSide">
                        <div className="BetPlacing_Upper_Head_Odds_LeftSide_Uper">
                            ODDS

                        </div>
                        <div className="BetPlacing_Upper_Head_Odds_LeftSide_Lower">
                            {mobileViewBettingData?.vl}
                        </div>
                    </div>
                    <div className="BetPlacing_Upper_Head_Odds_RightSide">
                        <div className="BetPlacing_Upper_Head_Odds_RightSide_Upper">
                            <span>STAKE</span>
                            <span>Max Mkt: {mobileViewBettingData?.allData?.maxBet || ""}</span>
                        </div>
                        <input className="BetPlacing_Upper_Head_Odds_RightSide_Lower"
                            min={0}
                            value={Number(updated) || ""}
                            onChange={(e) => {
                                e.preventDefault();
                                setUpdated(Number(e.target.value));
                            }}
                            // placeholder={mobileViewBettingData?.allData?.maxBet}
                            placeholder={placeholder}
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

                    <button onClick={() => {
                        dispatch(setSelectedSid(""));
                        dispatch(setBetData(null));
                    }}
                        className="BetPlacing_Upper_Head_Cancel_Done_Login_btnss_cancel btn-cancel">Cancel</button>
                    {/* <button>Place Bet</button> */}
                    {user ?
                        <button className="BetPlacing_Upper_Head_Cancel_Done_Login_btnss btn-palce" style={{
                            backgroundColor: updated !== 0 ? "#f4d820" : "#979797"
                        }} onClick={handleBetPalce}>
                            <div className="Place-Bet-Placebte">
                                <span>Place Bet</span>
                                <span>Profit:


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
                            </div>

                            <div className="Place-Bet-AccessTimeIcon">
                                <AccessTimeIcon />
                                <span> {mobileViewBettingData?.allData?.betDelay}s</span>
                            </div>


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