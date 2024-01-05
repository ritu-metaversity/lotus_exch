import { useLocation, useNavigate } from "react-router-dom"
import "./LiveCasino.css"
// import GamesPage from "./GamesPage";
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


  // const handleClose = () => setOpen(false);
  const [casinoListAura, setCasinoListAura] = useState<any>([]);
  const [casinoListSuperNowa, setCasinoListSuperNowa] = useState<any>([]);
  const [casinoListPointType, setCasinoListPoinType] = useState<any>([]);
  console.log(casinoListAura, casinoListSuperNowa, "sdfsdfsd");

  const nav = useNavigate();

  const TokenId = localStorage.getItem("token");
  // const TokenGame = localStorage.getItem("GameToken");
  const [casionId, setCasionId] = useState("")

  // useEffect(() => {
  //   axios
  //     .post(
  //       "https://api.247365.exchange/admin-new-apis/api/supernowa/game-list", { providerCode: "SN" },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${TokenId}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       if (response) {
  //         setCasinoList(response?.data?.data?.games)
  //         console.log(response, "sdfsdfsdfsd");

  //       }
  //     })
  // }, [])
  const handleGameName = (vl: any) => {
    console.log(vl, "sdfwdfsdcsdc");

    if (vl === "SuperNowa") {
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
            setCasinoListAura([])
            setCasinoListSuperNowa(response?.data?.data?.games)


            setCasinoListPoinType("supernowa")
          }
        })
    } else {
      const id = {
        id: "323334",
        appUrl: window.location.hostname,
      };
      axios
        .post(
          "https://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types",
          id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TokenId}`,
          },
        }
        )
        .then((res) => {
          setCasinoListAura(res.data.data);
          setCasinoListSuperNowa([])
        });
      setCasinoListPoinType("aura")
    }
  }


  // useEffect(() => {
  //   handleOpen();
  // }, [])
  const [confirmPopup, setConfirmPopup] = useState(false)


  // const handleNotAgree = () => {
  //   setConfirmPopup(false)
  // }
  const handleClose = () => setConfirmPopup(false);
  //   const [casionValue, setCasionValue] = useState()

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     axios.post(
  //         "https://api.247365.exchange/admin-new-apis/api/getOneUserBetResult", {},
  //         {
  //             headers: {
  //                 "Content-Type": "multipart/form-data",
  //                 Authorization: `Bearer ${token}`,
  //             },

  //         }
  //     ).then((res) => {
  //         setCasionValue(res?.data?.data[type])
  //         console.log(res?.data?.data[type], "sdfsdfsdfsd");
  //     })
  // }, [])
  const handleChangeaaSuperNowa = (val: any) => {
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
          if (casinoListPointType === "supernowa") {

            nav("/Live-Casino-play", { state: val })
          } else {
            nav("/Live-Casino-Aura", { state: val })

          }
        } else {


          setConfirmPopup(true)
          setCasionId(val)
        }
      })

    }
  };
  const handleChangeaaAura = (val: any) => {
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
        if (res?.data?.data?.aura === 1) {
          if (casinoListPointType === "supernowa") {

            nav("/Live-Casino-play", { state: val })
          } else {
            nav("/Live-Casino-Aura", { state: val })

          }
        } else {


          setConfirmPopup(true)
          setCasionId(val)
        }
      })
    }
  };
  const handleAgree = () => {
    if (casinoListPointType === "supernowa") {

      nav("/Live-Casino-play", { state: casionId })
    } else {
      nav("/Live-Casino-Aura", { state: casionId })

    }
    // setTrueee(true)
    setConfirmPopup(false)

  }

  const token = localStorage.getItem("token");
  const [gameQtech, setGameQTech] = useState<any>()
  const [gameAura, setGameAura] = useState<any>()
  const [gameSuperNova, setGameSuperNova] = useState<any>()
  useEffect(() => {

    axios.post(
      "https://api.247365.exchange/admin-new-apis/user/alloted-casino-list", {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response: any) => {
        setGameQTech(response?.data?.data.find((item: any) => item?.name === "QTech"))
        setGameAura(response?.data?.data.find((item: any) => item?.name === "Aura"))
        setGameSuperNova(response?.data?.data.find((item: any) => item?.name === "Super Nova"))
      })

  }, [])

  return (
    <div className="AllCasinoGame_IN_onePage">
      <div className="liveCasino-headerrrrrr">
        <img src="https://lotus365.co/static/media/LiveCasinoMobileTop.6252968a.png" className="liveCasino-header__img mob_img" />
        <img src="https://lotus365.co/static/media/livecasinoLobby.16d18b4a.svg" className="liveCasino-header__img desk_img" />
        <div className="live_casino">

          <HeaderPage />
        </div>

      </div>
      <div className="gamebtnnnnsnnsns">

        {gameSuperNova?.active === true ?
          <button onClick={() => handleGameName("SuperNowa")} className="GameNameBtn_UIiiii">Super nowa</button>
          : ""
        }

        {gameAura?.active === true ?
          <button onClick={handleGameName} className="GameNameBtn_UIiiii">Aura</button>
          : ""
        }

      </div>
      <div className="gamedetttttttt">

        {casinoListSuperNowa && casinoListSuperNowa.map((item: any) => (


          <div className="liveCasino-content__menu-games__allgames-items-item"
            onClick={() => handleChangeaaSuperNowa(item)}
          >
            <div className="altBackgroundCasino">
              <img
                src={item?.thumb}
                alt=" "
              />
              <div className="img-gamename">{item?.name}</div>
            </div>
          </div>
        )
        )}
        {casinoListAura && casinoListAura.map((item: any) => (


          <div className="liveCasino-content__menu-games__allgames-items-item"
            onClick={() => handleChangeaaAura(item)}
          >
            <div className="altBackgroundCasino">
              <img
                src={item?.imageUrl}
                alt=" "
              />
              <div className="img-gamename">{item?.gameName}</div>
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
          <CasinoPointPopup handleClose={handleClose} type={casinoListPointType} />
          <button onClick={handleAgree} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>

        </Box>
      </Modal>
    </div>
  )
}

export default LiveCasino