
import { useNavigate } from "react-router-dom";
import inplay from "../../../public/assets/icons/inplay-logo-iconSport.bb6548ae.svg"
import "./AllSportsPage.css"
const MobileGamePage = ({ allMatchInSport }: any) => {
    console.log(allMatchInSport, "nhjgfgdfxcvh");
    const navigate = useNavigate();


    const handleInput = (e: any) => {
        navigate(`/match-details/${e}`)
    }


    // {PostBetListByMatchIdData?.data
    //     ? "( " +
    //     Object.values(PostBetListByMatchIdData?.data)?.reduce(
    //       (accu, current) => {
    //         accu += current.length;
    //         return accu;
    //       },
    //       0
    //     ) +
    //     " )"
    //     : ""}{" "}
    return (
        <div className="Mobile_game_dtails">


            <span className="main_wrapper_for_gameoage" >
                Cricket
            </span>

            <div className="MenuEvent__lisin-mdlist-mdhydrated">


                <div className="MenuEvent__list__header__green">
                    <img src={inplay} />
                    <span className="MenuEvent__list__header__green__name"> In play (3)
                    </span>
                </div>
                {allMatchInSport && allMatchInSport?.length > 0 ? (
                    // Object.keys(allMatchInSport).map((key: any, item: any) => (
                    allMatchInSport && allMatchInSport.map((item: any, index: any) => item.inPlay === true && (


                        <div className="MenuEvent__list__eventin-listhydrated" onClick={() => handleInput(item?.matchId)}>


                            <div
                                className="MenuEvent__list__event__name">
                                <span style={{
                                    fontWeight: "bold",
                                    width: "100%",
                                    fontSize: "16px"
                                }}>
                                    {item?.matchName}
                                </span>
                                <span style={{ color: "grey", fontSize: "12px", width: "100%" }}>
                                    {item?.openDate}
                                </span>
                            </div>
                            <img src={inplay} />
                        </div>

                    ))
                ) : (

                    <div className="noLiveMatch" style={{
                        fontSize: "20px;",
                        color: "red;"
                    }}>No live match now</div>
                )}


            </div>

            <div className="Upcomming-container-Wappor">
                <div className="list-header-inner-upcomming">Upcoming</div>
                {allMatchInSport && allMatchInSport?.length > 0 ? (
                    // Object.keys(allMatchInSport).map((key: any, item: any) => (
                    allMatchInSport && allMatchInSport.map((item: any, index: any) => item.inPlay === false && (

                        <div className="list-header-inner-upcomming-game" onClick={() => handleInput(item?.matchId)}><span>{item?.matchName}
                        </span></div>
                    ))
                ) : (

                    <div className="noLiveMatch" style={{
                        fontSize: "20px;",
                        color: "red;"
                    }}>No Upcoming match now</div>
                )}
            </div>
        </div >






    )
}

export default MobileGamePage