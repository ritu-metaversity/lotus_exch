import { useEffect, useState } from "react";
import "./gamedetails_page_wraper.css"
import axios from "axios";
import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CasinoPointPopup from "../CasinoPointPopup";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const GamesDetailsPage = () => {
    const navigate = useNavigate();
    const [confirmPopup, setConfirmPopup] = useState(false)
    const [casinoList, setCasinoList] = useState([]);
    const [casionId, setCasionId] = useState("")

    const handleClose = () => setConfirmPopup(false);

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
        if (localStorage.getItem("token")) {

            axios.post(
                "https://api.247365.exchange/admin-new-apis/api/getOneUserBetResult", {},
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },

                }
            ).then((res) => {
                // setCasionValue(res?.data?.data)
                console.log(res?.data?.data, "sdfsdfsdfsd");
                if (res?.data?.data?.supernowa === 1) {
                    navigate("/Card-Games-play", { state: vl })
                } else {
                    setConfirmPopup(true)
                    setCasionId(vl)
                }
            })
        }
    }


    const handleAgree = () => {
        navigate("/Card-Games-play", { state: casionId })
        setConfirmPopup(false)

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
            <Modal
                className="modal_style"
                open={confirmPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CasinoPointPopup handleClose={handleClose} type={"supernowa"} />
                    <button onClick={handleAgree} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>

                </Box>
            </Modal>
        </div >
    )
}

export default GamesDetailsPage