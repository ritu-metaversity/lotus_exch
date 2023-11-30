import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const LotteryCasionListGamePage = () => {
    const { state } = useLocation()
    const TokenId = localStorage.getItem("token");
    const navigate = useNavigate();
    const [gameLobbyUrl, setGameLobbyUrl] = useState("")
    const TokenGame = localStorage.getItem("GameToken");

    console.log(state, "kuyt6r5esdfxcgv");

    useEffect(() => {
        let data = {
            playerId: "121212",
            currency: "INR",
            country: "IN",
            gender: "M",
            gameName: state?.Game,
            birthDate: "1986-01-01",
            lang: "en_IN",
            mode: "real",
            device: window.innerWidth > 1024 ? "desktop" : "mobile",
            returnUrl: `${window.location.protocol}//${window.location.hostname}/lottery-casino`,
            token: TokenGame,
            walletSessionId: TokenId
        }
        axios
            .post(
                "https://api.247idhub.com/api/qtech/gamelink",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
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

        // }

    }, [])
    const handleBack = () => {
        navigate("/Lottery-Game-List", { state: state })
    }

    return (
        <div className="header_for_backbtn_casino">
            <div className="header_for_exitliveCasino" onClick={handleBack}>
                <ArrowBackIcon style={{ fontSize: "20px" }} />
                <span>Exit Lottery Game</span>
            </div>

            {/* <div> */}


            <iframe
                src={gameLobbyUrl}
                width="100%"
                style={{ height: "calc(100vh - 29px)" }}
                title="mobile"
                allowFullScreen={true}

            ></iframe>
            {/* </div> */}
        </div>
    )
}

export default LotteryCasionListGamePage