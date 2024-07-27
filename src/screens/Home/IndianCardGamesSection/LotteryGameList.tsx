import axios from "axios";
import "./LotteryGameList.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Modal } from "@mui/material";
import CasinoPointPopup from "../../../components/AllCasino/CasinoPointPopup";

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
const LotteryGameList = () => {

    const { state } = useLocation()
    const [gameFilter, setGameFilter] = useState<any>([])
    const navigate = useNavigate();
    const TokenId = localStorage.getItem("token");


    useEffect(() => {
        const TokenGame = localStorage.getItem("GameToken");

        if (
            TokenId
        ) {
            let data = {
                token: TokenGame, provider: state?.filterType, gameCategory: "LOTTERY"

            }
            axios.post(
                "https://api.247idhub.com/api/qtech/gamelist", data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
                .then((response) => {
                    setGameFilter(response?.data?.data?.items)
                    console.log(response?.data, "statestatestatestate");

                })
        } else {
        }
    }, [])

    const [casionId, setCasionId] = useState("")
    const [confirmPopup, setConfirmPopup] = useState(false)

    const handleClose = () => setConfirmPopup(false);

    const handleChangeaa = (val: any) => {
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
                if (res?.data?.data?.qtech === 1) {
                    navigate("/Lottery-Game-play", { state: { "Game": val, "filterType": state?.filterType } })

                    // navigate("/Card-Games-play", { state: vl })
                } else {
                    setConfirmPopup(true)
                    setCasionId(val)
                }
            })
        }
        // if (localStorage.getItem("token")) {

        //     setConfirmPopup(true)
        //     setCasionId(val)
        // }
    }
    console.log(gameFilter, "jhygtfrdeszd");
    const handleAgree = () => {
        navigate("/Lottery-Game-play", { state: { "Game": casionId, "filterType": state?.filterType } })


    }
    return (
        <div className="FantasyGameWrapor">
            <span className="FantasyGameWrapor_nameeeee">
                Lottery GameList

            </span>
            <div className="FantasyGameWrapor-inner">
                {gameFilter.map((item: any) => (

                    <div className="FantasyGameWrapor-inner-Game" onClick={() => handleChangeaa(item?.id)}>

                        <img src={item?.images[2]?.url} style={{ width: "100%" }} />

                    </div>
                ))}

            </div>
            <Modal
                className="modal_style"
                open={confirmPopup}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CasinoPointPopup handleClose={handleClose} type={"qtech"} />
                    <button onClick={handleAgree} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>

                </Box>
            </Modal>
        </div>
    )
}

export default LotteryGameList