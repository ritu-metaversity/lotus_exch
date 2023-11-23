import { useLocation, useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from "axios";

const CardGamePlay = () => {

    const { state } = useLocation()
    const navigate = useNavigate();
    const [casionUrl, setCasionUrl] = useState();


    const handleBackToVCasion = () => {
        navigate("/Card-Game")
    }
    // const TokenGame = localStorage.getItem("GameToken");
    // const token = localStorage.getItem("token");


    useEffect(() => {
        const TokenId = localStorage.getItem("token");

        let dtatata = {
            "game": {
                "gameCode": state?.code,
                "providerCode": state?.providerCode,
            },
            "timestamp": new Date().getTime(),
            user: {
                currency: "INR",
                backUrl: `${window.location.protocol}//${window.location.hostname}/Slot-Game-list`,
            }
        }
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/api/supernowa/v1/authentication", dtatata,

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((response) => {
                if (response) {
                    setCasionUrl(response?.data?.data?.launchURL)
                    console.log(response?.data?.data?.launchURL, "sdfsdfsdfsdfsdfsdfsd")
                } else {
                }
            })
    }, [])
    return (
        <div className="CasinoGames__toolbar">

            <div className="CasinoGames__toolbar__wrapper" onClick={handleBackToVCasion}>
                <div className="ion-toolbar__left">
                    <ArrowBackIcon style={{ fontSize: "20px" }} />

                    <div className="CasinoGames__toolbar__title">Go Back to Card Game</div>
                </div>
                <iframe
                    src={casionUrl}
                    width="100%"
                    style={{ height: "calc(100vh - 29px)" }}
                    title="mobile"
                    allowFullScreen={true}

                ></iframe>
            </div>
        </div>
    )
}

export default CardGamePlay