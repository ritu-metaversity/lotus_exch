import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./GamesPage.css"

const AuraGamePageMain = () => {
    const { state } = useLocation()
    const token = localStorage.getItem("token");
    // const token = localStorage.getItem("token");
    // const [gameLobbyUrl, setGameLobbyUrl] = useState("")
    // const [casionUrl, setCasionUrl] = useState();
    console.log(state, "sfrdrvdsvxvxcv");

    const navigate = useNavigate();
    const handleBackToVCasion = () => {
        navigate("/live-casino")
    }

    // useEffect(() => {
    //     const TokenId = localStorage.getItem("token");

    //     let dtatata = {
    //         "game": {
    //             "gameCode": state?.code,
    //             "providerCode": state?.providerCode,
    //         },
    //         "timestamp": new Date().getTime(),
    //         user: {
    //             currency: "INR",
    //             backUrl: `${window.location.protocol}//${window.location.hostname}/Slot-Game-list`,
    //         }
    //     }
    //     axios
    //         .post(
    //             "https://api.247365.exchange/admin-new-apis/api/supernowa/v1/authentication", dtatata,
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${TokenId}`,
    //                 },
    //             }
    //         )
    //         .then((response) => {
    //             if (response) {
    //                 setCasionUrl(response?.data?.data?.launchURL)
    //                 console.log(response?.data?.data?.launchURL, "sdfsdfsdfsdfsdfsdfsd")
    //             } else {
    //             }
    //         })
    // }, [])




    const TokenGame = localStorage.getItem("GameToken");


    return (
        <div className="header_for_backbtn_casino">
            <div className="header_for_exitliveCasino" onClick={handleBackToVCasion}>
                <ArrowBackIcon style={{ fontSize: "20px" }} />
                <span>Exit Live Casino</span>
            </div>

            <iframe
                src={`https://d.fawk.app/#/splash-screen/${token}/9482/?opentable=${state?.gameId}`}
                // height="82vh"
                // className="mobile_if"
                width="100%"
                style={{ minHeight: "100vh" }}
                title="mobile"
                className="for_Desktop"
                allowFullScreen={true}
            ></iframe>
            <iframe
                src={`https://m.fawk.app/#/splash-screen/${token}/9482/?opentable=${state}`}
                // height="82vh"
                // className="mobile_if"
                width="100%"
                style={{ minHeight: "90vh" }}
                title="mobile"
                className="For_mobile"
                allowFullScreen={true}

            ></iframe>




        </div>
    )
}

export default AuraGamePageMain