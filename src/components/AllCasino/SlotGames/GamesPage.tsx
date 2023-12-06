import { useEffect, useState } from "react"
import "./GamesPage.css"

import { Box, Modal } from "@mui/material";

import CasinoPointPopup from "../CasinoPointPopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

const GamesPage = ({ slotGameDetail }: any) => {

    const [gameFilter, setGameFilter] = useState<any>([])
    const [gameAllData, setGameAllData] = useState<any>([])
    const navigate = useNavigate();
    console.log(slotGameDetail?.slotGameDetail, "slotGameDetail");

    const TokenId = localStorage.getItem("token");
    const TokenGame = localStorage.getItem("GameToken");



    const [casionId, setCasionId] = useState("")
    const [confirmPopup, setConfirmPopup] = useState(false)

    const handleClose = () => setConfirmPopup(false);

    useEffect(() => {
        if (
            TokenGame
        ) {
            let data = {
                token: TokenGame, provider: "", gameCategory: "SLOT"
            }
            // https://api.247idhub.com/api/qtech/gamelist
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
                    console.log(response?.data?.data, "slotGameDetailsdfsdf");
                    if (response?.data?.data?.items) {
                        setGameAllData(response?.data?.data?.items)
                        const data: any = {};
                        for (const x of response.data.data.items as any) {
                            const cat = x.category.split('/');
                            for (const y of cat) {
                                if (data[y]) data[y].push(x);
                                else data[y] = [x];
                            }
                        }
                        setGameFilter(data)
                        console.log(data, "kjhgyftdxsz");


                    }
                    // setGameFilterAllGame(response?.data?.data)
                })
        } else {

        }
    }, [])

    useEffect(() => {
        if (slotGameDetail) {
            document.getElementById(slotGameDetail)?.scrollIntoView()
        }
    }, [slotGameDetail])

    console.log(slotGameDetail, "hi");


    const handleGamePage = (vl: any) => {
        if (localStorage.getItem("token")) {
            setConfirmPopup(true)
            setCasionId(vl)
        }
    }
    const handleAgree = () => {
        navigate("/Slot-Games-play", { state: casionId })


    }
    return (
        <div className="liveCasino-content__menu-games">
            <div className="liveCasino-content__menu-games__allgames">
                <div className="liveCasino-content__menu-games__allgames-title">
                    <span className="liveCasino-content__menu-games__allgames-title-ref" />
                    <div className="liveCasino-content__menu-games__allgames-title-name">
                        All games
                    </div>
                    <div className="liveCasino-content__menu-games__allgames-title-seeAll">
                        See all
                    </div>
                </div>
                <div style={{ width: "100%", overflowX: "auto" }}>
                    <div className="liveCasino-content__menu-games__allgames-items">
                        {gameAllData && gameAllData.map((item: any) => (


                            <div className="liveCasino-content__menu-games__allgames-items-item">
                                <div className="altBackgroundCasino" onClick={() => handleGamePage(item)}>
                                    <img
                                        src={item?.images[2]?.url}
                                        alt=" "
                                    />
                                    <div className="img-gamename">{item?.name}</div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                {Object.keys(gameFilter).map((key: any) => (
                    <>
                        <div id={key} className="liveCasino-content__menu-games__allgames-title">
                            <span className="liveCasino-content__menu-games__allgames-title-ref" />
                            <div className="liveCasino-content__menu-games__allgames-title-name">
                                {key}
                            </div>
                            <div className="liveCasino-content__menu-games__allgames-title-seeAll">
                                See all
                            </div>
                        </div>
                        <div style={{ width: "100%", overflowX: "auto" }}>
                            <div className="liveCasino-content__menu-games__allgames-items">
                                {gameFilter && gameFilter[key].map((item: any) => (
                                    <div className="liveCasino-content__menu-games__allgames-items-item">
                                        <div className="altBackgroundCasino" onClick={() => handleGamePage(item)}>
                                            {/* <span>EZUGI-LOBBY</span> */}
                                            <img
                                                src={item?.images[2]?.url}
                                                alt=" "
                                            />
                                            <div className="img-gamename">{item?.name}</div>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>


                    </>
                ))}
                <div
                    className="liveCasino-content__menu-games__allgames-title"
                    style={{ visibility: "hidden", marginBottom: 150 }}
                >
                    <span className="liveCasino-content__menu-games__allgames-title-ref" />
                    <div className="liveCasino-content__menu-games__allgames-title-name" />
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
                    <CasinoPointPopup handleClose={handleClose} type="qtech" />
                    <button onClick={handleAgree} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>

                </Box>
            </Modal>
        </div >

    )
}

export default GamesPage