import { useLocation, useNavigate } from "react-router-dom";
import "./FantasyGameList.css"
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

export const FgameData = [
  {
    providerId: "SPB",
    id: "SPB-aviator",
    name: "Aviator",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-aviator_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-dice",
    name: "Dice",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-dice_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-goal",
    name: "Goal",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-goal_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-hilo",
    name: "Hilo",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-hilo_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-hotline",
    name: "Hotline",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-hotline_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-mines",
    name: "Mines",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-mines_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-miniroulette",
    name: "Mini Roulette",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-miniroulette_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "SPB",
    id: "SPB-plinko",
    name: "Plinko",
    image:
      "https://client-int.qtlauncher.com/images/?id=SPB-plinko_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "RLX",
    id: "RLX-bananatown",
    name: "Banana Town",
    image:
      "https://client-int.qtlauncher.com/images/?id=RLX-bananatown_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "RLX",
    id: "RLX-beastmode",
    name: "Beast Mode",
    image:
      "https://client-int.qtlauncher.com/images/?id=RLX-beastmode_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "RLX",
    id: "RLX-blackjackneo",
    name: "Blackjack Neo",
    image:
      "https://client-int.qtlauncher.com/images/?id=RLX-blackjackneo_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "RLX",
    id: "RLX-blenderblitz",
    name: "Blender Blitz",
    image:
      "https://client-int.qtlauncher.com/images/?id=RLX-blenderblitz_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "RLX",
    id: "RLX-bookofpower",
    name: "Book Of Power",
    image:
      "https://client-int.qtlauncher.com/images/?id=RLX-bookofpower_en_US&type=banner&version=1678192465376",
  },
  {
    providerId: "TK",
    id: "TK-1429unchartedseas",
    name: "1429 Uncharted Seas",
    image:
      "https://client-int.qtlauncher.com/images/?id=TK-1429unchartedseas_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "TK",
    id: "TK-arcader",
    name: "Arcader",
    image:
      "https://client-int.qtlauncher.com/images/?id=TK-arcader_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "TK",
    id: "TK-babushkas",
    name: "Babushkas",
    image:
      "https://client-int.qtlauncher.com/images/?id=TK-babushkas_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "TK",
    id: "TK-barbershopuncut",
    name: "Barber Shop Uncut",
    image:
      "https://client-int.qtlauncher.com/images/?id=TK-barbershopuncut_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "TK",
    id: "TK-baronbloodmore",
    name: "Baron Bloodmore And The Crimson Castle",
    image:
      "https://client-int.qtlauncher.com/images/?id=TK-baronbloodmore_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "NLC",
    id: "NLC-barbarianfury",
    name: "Barbarian Fury",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-barbarianfury_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "NLC",
    id: "NLC-benjikilledinvegas",
    name: "Benji Killed in Vegas",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-benjikilledinvegas_en_US&type=banner&version=1675678202410",
  },
  {
    providerId: "NLC",
    id: "NLC-bonusbunnies",
    name: "Bonus Bunnies",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-bonusbunnies_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "NLC",
    id: "NLC-bookofshadows",
    name: "Book of Shadows",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-bookofshadows_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "NLC",
    id: "NLC-bountyhunters",
    name: "Bounty Hunters",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-bountyhunters_en_US&type=banner&version=1689142030076",
  },
  {
    providerId: "NLC",
    id: "NLC-buffalohunter",
    name: "Buffalo Hunter",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-buffalohunter_en_US&type=banner&version=1667798993145",
  },
  {
    providerId: "NLC",
    id: "NLC-bushidowaysxnudge",
    name: "Bushido Ways xNudge",
    image:
      "https://client-int.qtlauncher.com/images/?id=NLC-bushidowaysxnudge_en_US&type=banner&version=1667798993145",
  },
];
export interface GameDataInterface {
  providerId: string;
  id: string;
  name: string;
  image: string;
}
const FanctasyGameList = () => {
  const { state } = useLocation()

  const navigate = useNavigate();

  const [casionId, setCasionId] = useState("")
  const [confirmPopup, setConfirmPopup] = useState(false)

  const handleClose = () => setConfirmPopup(false);

  const [GameLists, setGameLists] = useState<GameDataInterface[]>([]);
  useEffect(() => {
    console.log(state, "jnhgyftdresza");
    if (state?.filterType) {
      const gamesAr = FgameData.filter(
        (el) => el.providerId === state?.filterType
      )
      setGameLists(gamesAr)
    }
  }, [state?.filterType]);

  // const handleGameFastasy = (key: any) => {

  // }
  // navigate("/home")

  const handleGameFastasy = (vl: any) => {
    if (localStorage.getItem("token")) {
    setConfirmPopup(true)
    setCasionId(vl)
    }
  }
  const handleAgree = () => {
    navigate("/Fantasy-Game-play", { state: { "Game": casionId, "filterType": state } })

    // navigate("/Slot-Games-play", { state: casionId })


  }
  return (
    <div className="FantasyGameWrapor">
      <span className="FantasyGameWrapor_nameeeee">
        Fantasy GameList

      </span>
      <div className="FantasyGameWrapor-inner">
        {GameLists.map((key: any) => (

          <div className="FantasyGameWrapor-inner-Game" onClick={() => handleGameFastasy(key)}>
            <img src={key?.image} style={{ width: "100%" }} />
          </div>
        ))
        }
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

export default FanctasyGameList