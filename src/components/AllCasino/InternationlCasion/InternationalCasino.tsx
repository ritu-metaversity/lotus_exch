import { useLocation, useNavigate } from "react-router-dom"
import "./LiveCasino.css"
// import GamesPage from "./GamesPage";
// import HeaderPage from "./HeaderPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
// import { Typography } from "antd";
// import QtechLogooo from "../../../../public/assets/images/qtechlogo.png";
import CasinoPointPopup from "../CasinoPointPopup";
export const casinoProviderList = [
  {
    name: "EVOLUTION",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/5.png",
    gameCode: "EVO-dhp",
    filterType: "EVO",
  },
  {
    name: "VIVO GAMING",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/21.png",
    gameCode: "VGL-europeanroulette",
    filterType: "VGL",
  },
  {
    name: "EZUGI",
    logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
    gameCode: "EZU-32cards",
    filterType: "EZU",
  },
  // {
  //   name: "BGAMING",
  //   logo: "https://global-uploads.webflow.com/63b2c230b49fa188ad86ffec/63f4c9689497e0d7c32f4a31_BGaming_logo.svg",
  //   gameCode: "Qtech",
  //   filterType: "BGM",
  // },
  {
    name: "SKY WIND",
    logo: "https://skywindgroup.com/assets/site/images/skywind_white.svg",
    gameCode: "SWL-atomroulette",

    filterType: "SWL",
  },
  {
    name: "SA GAMING",
    logo: "https://www.sagaming.com/img/logo.png",
    gameCode: "SAG-lobby",
    filterType: "SAG",
  },
  {
    name: "PRAGMATIC PLAY",
    logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
    gameCode: "PPL-livecasinolobby",
    filterType: "PPL",
  },
  {
    name: "BETTER LIVE",
    logo: "https://live.beter.co/wp-content/themes/artit/assets/images/logo.svg",
    gameCode: "BTL-lobby",
    filterType: "BTL",
  },
  {
    name: "BET GAMES",
    logo: "https://www.betgames.tv/api/uploads/BG_Logo_White_Horizontal_Lock_Up_dcca475d41.png",
    gameCode: "BTV-lobby",
    filterType: "BTV",
  },
  // {
  //   name: " EBET",
  //   logo: "https://ebet.gg/wp-content/uploads/2022/05/EBET-logo.png",
  //   gameCode: "EBT-sicbo",
  //   filterType: "EBT",
  // // },
  // {
  //   name: "AVIATOR",
  //   logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
  //   gameCode: "SPB-aviator",
  //   filterType: "SPB",
  // },
  // {
  //   name: "Q Tech",
  //   logo: QtechLogooo,
  //   gameCode: "Qtech",
  //   filterType: "SPB",
  // }
];
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

const InternationalCasino = () => {

  const { state } = useLocation()
  // const [datattaa, setDatattaa] = useState();

  console.log(state, "sdkjcguadjbclj");
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setConfirmPopup(false);
  const [gameAllData, setGameAllData] = useState<any>([])
  const navigate = useNavigate();
  const [confirmPopup, setConfirmPopup] = useState(false)
  const [casionId, setCasionId] = useState("")

  const TokenId = localStorage.getItem("token");
  const TokenGame = localStorage.getItem("GameToken");
  const handleGameName = (vl: any) => {
    // setDatattaa(vl)
    let data = {
      token: TokenGame, provider: vl?.filterType, gameCategory: "LIVECASINO"
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
          console.log();
          setGameAllData(response?.data?.data?.items)
        }
        // console.log(response?.data?.data?.items, "statestatestatestate");
      })
  }

  // useEffect(() => {
  //   handleOpen();
  // }, [])

  // const [gameFilter, setGameFilter] = useState<any>([])

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
          setGameAllData(response?.data?.data?.items)

          // console.log(response?.data?.data?.items, "statestatestatestate");

        })


    } else {

    }
  }, [])
  const handleGamePage = (vl: any) => {
    if (localStorage.getItem("token")) {
    setConfirmPopup(true)
    setCasionId(vl)
    }
  }
  const handleAgree = () => {
    navigate("/Intergame-play", { state: casionId })
  }
  return (
    <div className="AllCasinoGame_IN_onePage">
      {/* <p className="liveCasino-header"> */}
      <img src="https://lotus365.co/static/media/LiveCasinoMobileTop.6252968a.png" className="liveCasino-header__img mob_img" />
      <img src="https://lotus365.co/static/media/livecasinoLobby.16d18b4a.svg" className="liveCasino-header__img desk_img" />
      <div className="InternantionalCsaion">

        <div className="liveCasino-header__text-name animate-charcter ">
          International Casino
        </div>
        <div className="liveCasino-header__text-credo">Play. Win. Enjoy.</div>
      </div>

      {/* </p> */}
      {/* <img src="../../../../public/assets/images/casinoGames/CaisnoNewImg/livecasinoLobby.16d18b4a.svg" style={{ width: "100%" }} /> */}
      <div className="AllGameBTn_main_constainer">
        <div className="AllGameBTn">
          {casinoProviderList && casinoProviderList.map((item: any) => (

            <button onClick={() => handleGameName(item)} className="GameNameBtn_UI">
              {/* <img
                src={item?.logo}
                alt=" "
              /> */}
              {item?.name}</button>

          )
          )}
        </div >
        <div className="gamedetttttttt">

          {gameAllData && gameAllData.map((item: any) => (


            <div className="liveCasino-content__menu-games__allgames-items-item">
              <div className="altBackgroundCasino"
                onClick={() => handleGamePage(item)}
              >
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
        {/* <GamesPage dattatata={datattaa} /> */}
      </div>

    </div>
  )
}

export default InternationalCasino