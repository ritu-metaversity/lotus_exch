import { useEffect, useState } from "react";
import "./gamedetails_page_wraper.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const GamesDetailsPage = () => {
    const navigate = useNavigate();
    const [casinoList, setCasinoList] = useState([]);

    // const token = localStorage.getItem("token");


    useEffect(() => {
        const TokenId = localStorage.getItem("token");
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/api/supernowa/game-list", { providerCode: "SN" },

                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((response) => {

                if (response) {
                    setCasinoList(response?.data?.data?.games)
                    // console.log(response?.data?.data?.games, "sdfsdfsdfsdfsdfsdfsd")
                } else {
                }


            })

    }, [])



    // const [confirmPopup, setConfirmPopup] = useState(false)
    // const handleNotAgree = () => {
    //   setConfirmPopup(false)
    // }
    // const handleClose = () => setConfirmPopup(false);

    // const handleAgree = () => {
    //   nav("/SuperNowa-Game-page", { state: casionId })

    //   setConfirmPopup(false)
    // }
    // const handleChangeaa = (val: any) => {
    //   console.log(val, "uygtfvgbhnjuytfrvb");

    //   if (
    //     token
    //   ) {
    //     setConfirmPopup(true)
    //     setCasionId(val)
    //     // nav("/SuperNowa-Game-page", { state: val })

    //     // setCasionId(val)
    //     // setConfirmPopup(true)
    //   } else {
    //   }
    // };

    const handleGameDetails = (vl: any) => {
        navigate("/Card-Games-play", { state: vl })
    }

    return (
        <div className="gamedetails_page_wraper" >
            <div className="inner_gamedetails_page_wraper">
                <div className="games_provider_name_with_details">
                    Live Game
                </div>
                <div className="Live_Game_waper">
                    {casinoList.map((item: any) => (

                        <button className="game_img_proves_btn" onClick={() => handleGameDetails(item)}>
                            <img src={item.thumb} style={{ width: "100%", borderRadius: "12px" }} />
                        </button>
                    ))}


                </div>
            </div>
        </div >
    )
}

export default GamesDetailsPage