import axios from "axios";
import "./AllSportsPage.css"
import { useParams } from "react-router";
import SportsButtons from "../../screens/Home/SportsButtons/Index";
import { useNavigate, useLocation } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router'

import { useEffect, useState } from "react";
import Carousel from "../../screens/Home/Carousel/Index";
import SportsFeaturette from "../../screens/Home/SportsFeaturette/Index";
import MobileGamePage from "./MobileGamePage";
// interface NavItem {
//     label: string;
//     link: string;
//     highlighted?: boolean;
// }

const AllSportsPages = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation()
    // https://oddsapi.247idhub.com/betfair_api/active_match/4
    const [allMatchInSport, setAllMatchInSport] = useState([])
    console.log(state, "statestatestate");

    useEffect(() => {
        axios
            .get(`https://oddsapi.247idhub.com/betfair_api/active_match/v2/${id}`)
            .then((res: any) => {

                setAllMatchInSport(res?.data?.data);

                //   setIsloading(false)
            });
    }, [id]);
    useEffect(() => {
        const time = setInterval(() => {

            axios
                .get(`https://oddsapi.247idhub.com/betfair_api/active_match/v2/${id}`)
                .then((res: any) => {

                    setAllMatchInSport(res?.data?.data);

                    //   setIsloading(false)
                });
        }, 5000);

        return () => clearInterval(time);

    }, [id]);





    const handleInput = (e: any) => {
        navigate(`/match-details/${e}`)
    }
    const handleDataTransfer = (vl: any) => {
        if (vl <= 0) {
        } else {

        }

    }

    return (

        <div>
           
                <MobileGamePage allMatchInSport={allMatchInSport}/>

            <div className="desktop_game_dtails_page">
                <div className="favourites-header">
                    <h2>{state}</h2><p className="sportsPage-headerBet">Betting from 1min before start</p>
                </div>
                <div className="sportsPage-subHeader">
                    <span>Match</span>
                    <div className="sportsPage-subHeader-players cricket-football">
                        <span className="heading-data">1</span>
                        <span className="heading-data not-active">X</span>
                        <span className="heading-data">2</span>
                    </div>
                </div>

                {allMatchInSport?.length > 0 ?
                    allMatchInSport.map((item: any) => (

                        <div className="main-table">
                            <div className="left-table-name" onClick={() => handleInput(item?.matchId)}>
                                {/* <div className="left-table-name-mainnn"> */}

                                <div className="starr-iconn">

                                    <img src="https://lotus365.co/static/media/sideBarStar.8347cb3e.svg" />
                                </div>
                                <div className="match-namke-game-page">{item?.matchName}</div>
                                {item?.inPlay === true ?
                                    <div className="date-time-inplay">
                                        <img src="https://lotus365.co/static/media/inplay-broadcast-icon.e5eb4298.svg" />


                                        {/* </div> */}
                                    </div> :
                                    <div className="date-time">

                                        {item?.openDate}





                                        {/* </div> */}
                                    </div>}


                            </div>

                            <div className="right-table-name">
                                <span className="item__back-inner back-color not-active" onClick={() => handleDataTransfer(item?.runners[0]?.back1)}>
                                    <div className="button__price">{(item?.runners[0]?.back1) || "-"}</div>

                                </span>
                                <span className="item__back-inner lay-color " onClick={() => handleDataTransfer(item?.runners[0]?.lay1)}>
                                    <div className="button__price"> {(item?.runners[0]?.lay1) || "-"}</div>

                                </span>
                                <span className="item__back-inner back-color not-active" onClick={() => handleDataTransfer(item?.runners[0]?.back2)}>
                                    <div className="button__price">{(item?.runners[2]?.back1) || "-"}</div>

                                </span>
                                <span className="item__back-inner lay-color not-active" onClick={() => handleDataTransfer(item?.runners[0]?.lay2)}>
                                    <div className="button__price">{(item?.runners[2]?.lay1) || "-"}</div>

                                </span>
                                <span className="item__back-inner back-color " onClick={() => handleDataTransfer(item?.runners[1]?.back1)}>
                                    <div className="button__price">{(item?.runners[1]?.back1) || "-"} </div>

                                </span>
                                <span className="item__back-inner lay-color not-active" onClick={() => handleDataTransfer(item?.runners[1]?.lay1)}>
                                    <div className="button__price">{(item?.runners[1]?.lay1) || "-"}</div>

                                </span>
                            </div>
                            {/* )
                        })} */}
                        </div>
                    ))

                    :
                    <div className="main-table">
                        <span className="no-data">  No Match !!!</span>
                    </div>
                }            <div className="gammmeesss">
                    <div className="Casino_in_MobileNot_show">

                        <Carousel />
                        <SportsButtons />
                        <SportsFeaturette />
                    </div>
                </div>
            </div >
        </div>

    )
}

export default AllSportsPages