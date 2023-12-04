// import { useState } from "react"
import "./GamesPage.css"

import { useNavigate } from "react-router-dom";
import QtechLogooo from "../../../../public/assets/images/qtechlogo.png";

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
    // },
    {
        name: "AVIATOR",
        logo: "https://sitethemedata.com/casino_icons/fantasy/aviator.png",
        gameCode: "SPB-aviator",
        filterType: "SPB",
    },
    {
        name: "QTech",
        logo: QtechLogooo,
        gameCode: "Qtech",
        filterType: "SPB",
    }
];

const GamesPage = () => {


    // const [gameFilter, setGameFilter] = useState<any>([])
    // const [gameAllData, setGameAllData] = useState<any>([])
    const navigate = useNavigate();

    // const TokenId = localStorage.getItem("token");
    // const TokenGame = localStorage.getItem("GameToken");

    // useEffect(() => {
    //     if (
    //         TokenGame
    //     ) {
    //         let data = {
    //             token: TokenGame, provider: "", gameCategory: "LIVECASINO"
    //         }
    //         axios.post(
    //             "https://api.247idhub.com/api/qtech/gamelist", data,
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     Authorization: `Bearer ${TokenId}`,
    //                 },
    //             }
    //         )
    //             .then((response) => {
    //                 if (response?.data?.data?.items) {
    //                     setGameAllData(response?.data?.data?.items)
    //                     const data: any = {};
    //                     for (const x of response.data.data.items as any) {
    //                         const cat = x.category.split('/');
    //                         for (const y of cat) {
    //                             if (data[y]) data[y].push(x);
    //                             else data[y] = [x];
    //                         }
    //                     }
    //                     setGameFilter(data)

    //                 }
    //                 // console.log(response?.data?.data?.items, "statestatestatestate");

    //             })


    //     } else {

    //     }
    // }, [])


    // console.log(gameFilter, gameAllData, "jhgfcvbkjhgyhfc");
    const handleGamePage = (vl: any) => {


        navigate("/Live-Casino-play", { state: vl })
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
                        {casinoProviderList && casinoProviderList.map((item: any) => (


                            <div className="liveCasino-content__menu-games__allgames-items-item">
                                <div className="altBackgroundCasino" onClick={() => handleGamePage(item)}>
                                    <img
                                        src={item?.logo}
                                        alt=" "
                                    />
                                    <div className="img-gamename">{item?.name}</div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>

                <div
                    className="liveCasino-content__menu-games__allgames-title"
                    style={{ visibility: "hidden", marginBottom: 150 }}
                >
                    <span className="liveCasino-content__menu-games__allgames-title-ref" />
                    <div className="liveCasino-content__menu-games__allgames-title-name" />
                </div>
            </div>
        </div >

    )
}

export default GamesPage