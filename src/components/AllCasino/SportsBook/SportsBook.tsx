import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import axios from 'axios'


const SportsBook = () => {
    const { state } = useLocation()
    // const token = localStorage.getItem("token");

    const navigate = useNavigate();
    const handleBackToVCasion = () => {
        navigate("/home")
    }

    const [casionUrl, setCasionUrl] = useState();



    console.log(state, "dasdasdasdasdasd");


    useEffect(() => {
        const TokenId = localStorage.getItem("token");

        let dtatata = {
            "game": {
                "gameCode": state?.gameCode,
                "providerCode": state?.filterType,
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

    // const handleBack = () => {

    // }
    return (
        <div className="header_for_backbtn_casino">
            <div className="header_for_exitliveCasino" onClick={handleBackToVCasion}>
                <ArrowBackIcon style={{ fontSize: "20px" }} />
                <span>Exit Live Casino</span>
            </div>

            {/* <div> */}


            <iframe
                src={casionUrl}
                width="100%"
                style={{ height: "calc(100vh - 29px)" }}
                title="mobile"
                allowFullScreen={true}

            ></iframe>
            {/* </div> */}
        </div>
    )
}

export default SportsBook