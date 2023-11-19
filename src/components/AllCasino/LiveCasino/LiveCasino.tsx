import { useLocation } from "react-router-dom"
import "./LiveCasino.css"
import GamesPage from "./GamesPage";
import HeaderPage from "./HeaderPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
// import { Typography } from "antd";
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
// const modalStyle = {
//   position: "relative",
//   width: "320px",
//   padding: "0 0 20px",
//   backgroundColor: "#fff",
//   fontSize: "16px",
//   fontWeight: "500",
//   color: "#000",
//   boxShadow: "0 4px 6px rgba(0, 0, 0, .25), inset -3px 4px 6px rgba(0, 0, 0, .25)",
//   borderRadius: "30px"
// };

const LiveCasino = () => {

  const { state } = useLocation()
  console.log(state, "sdkjcguadjbclj");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleGameName = () => {

  }

  useEffect(() => {
    handleOpen();
  }, [])

  const [gameFilter, setGameFilter] = useState<any>([])

  const TokenId = localStorage.getItem("token");
  const TokenGame = localStorage.getItem("GameToken");

  useEffect(() => {
    if (
      TokenGame
    ) {
      let data = {
        token: TokenGame, provider: "", gameCategory: "LIVECASINO"
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
          if (response?.data?.data?.items) {
            const data: any = {};
            for (const x of response.data.data.items as any) {
              const cat = x.category.split('/');
              for (const y of cat) {
                if (data[y]) data[y].push(x);
                else data[y] = [x];
              }
            }
            setGameFilter(data)

          }
          // console.log(response?.data?.data?.items, "statestatestatestate");

        })


    } else {

    }
  }, [])
  return (
    <div className="AllCasinoGame_IN_onePage">
      <p className="liveCasino-header">
        <img src="https://lotus365.co/static/media/LiveCasinoMobileTop.6252968a.png" className="liveCasino-header__img mob_img" />
        <img src="https://lotus365.co/static/media/livecasinoLobby.16d18b4a.svg" className="liveCasino-header__img desk_img" />
        <div className="live_casino">

          <HeaderPage />
        </div>

      </p>
      {/* <img src="../../../../public/assets/images/casinoGames/CaisnoNewImg/livecasinoLobby.16d18b4a.svg" style={{ width: "100%" }} /> */}
      <div className="AllGameBTn_main_constainer">
        <div className="AllGameBTn">

          <button onClick={handleGameName} className="GameNameBtn_UI">All games</button>
          {Object.keys(gameFilter).map((key: any) => (
            <button onClick={handleGameName} className="GameNameBtn_UI">{key}</button>
          ))}
        </div >
        <GamesPage />
      </div>
      <Modal
        className="modal_style"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CasinoPointPopup handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}

export default LiveCasino