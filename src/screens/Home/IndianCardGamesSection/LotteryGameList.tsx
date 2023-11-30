import axios from "axios";
import "./LotteryGameList.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

    const handleChangeaa = (val: any) => {
        navigate("/Lottery-Game-play", { state: { "Game": val, "filterType": state?.filterType } })
    }
    console.log(gameFilter, "jhygtfrdeszd");

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
        </div>
    )
}

export default LotteryGameList