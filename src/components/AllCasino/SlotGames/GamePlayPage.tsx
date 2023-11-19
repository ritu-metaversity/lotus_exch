import { useLocation, useNavigate } from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./GamePlayPage.css"
import { useEffect, useState } from "react";
import axios from "axios";
const GamePlayPage = () => {

    const { state } = useLocation()
    console.log(state, "jugytfrdefcgvhbjn");
    const token = localStorage.getItem("token");
    // const token = localStorage.getItem("token");
    const [gameLobbyUrl, setGameLobbyUrl] = useState("")

    const navigate = useNavigate();
    const handleBackToVCasion = () => {
        navigate("/Slot-Games")
    }



    const TokenGame = localStorage.getItem("GameToken");
    useEffect(() => {
        if (state?.gameCode === "Qtech") {
            let data = {
                playerId: "121212",
                currency: "INR",
                country: "IN",
                gender: "M",
                birthDate: "1986-01-01",
                lang: "en_IN",
                mode: "real",
                // device: window.innerWidth > 1024 ? "desktop" : "mobile",
                device: window.innerWidth > 1024 ? "desktop" : "mobile",
                returnUrl: `${window.location.protocol}//${window.location.hostname}/Live-casino`,
                token: TokenGame,
                walletSessionId: token
            }
            // https://api.playindia.app/api/qtech/gamelink
            axios.post(
                "https://api.playindia.app//api/qtech/gamelobby",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((response) => {
                    if (response) {
                        console.log(response?.data?.data?.url, "sdfsdfsdfsdfsdfsdfsd")
                        setGameLobbyUrl(response?.data?.data?.url)
                    }
                })
        } else {
            let data = {
                playerId: "121212",
                currency: "INR",
                country: "IN",
                gender: "M",
                gameName: state?.id || state?.gameCode,
                birthDate: "1986-01-01",
                lang: "en_IN",
                mode: "real",
                device: window.innerWidth > 1024 ? "desktop" : "mobile",

                returnUrl: `${window.location.protocol}//${window.location.hostname}/Live-casino`,
                token: TokenGame,
                walletSessionId: token
            }
            axios.post(
                "https://api.247idhub.com/api/qtech/gamelink",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
                .then((response) => {
                    if (response) {
                        console.log(response?.data?.data?.url, "sdfsdfsdfsdfsdfsdfsd")
                        setGameLobbyUrl(response?.data?.data?.url)
                    } else {

                    }
                })

        }

    }, [])

    return (
        <div className="CasinoGames__toolbar">

            <div className="CasinoGames__toolbar__wrapper" onClick={handleBackToVCasion}>
                <div className="ion-toolbar__left">
                    <ArrowBackIcon style={{ fontSize: "20px" }} />

                    <div className="CasinoGames__toolbar__title">Go Back to Slots</div>
                </div>
                <iframe
                    src={gameLobbyUrl}
                    width="100%"
                    style={{ height: "calc(100vh - 29px)" }}
                    title="mobile"
                    allowFullScreen={true}

                ></iframe>
            </div>
        </div>

    )
}

export default GamePlayPage