import { useEffect, useState } from "react";
import "./MyMarket.css"
import { useUnsettledBetMutation } from "../../../state/apis/main/apiSlice";
import { Link } from "react-router-dom";
const MyMarket = () => {
  const [myMarket, setMyMarket] = useState<any>([]);

  const [triger, { data: unSettledBet }] = useUnsettledBetMutation();
  console.log(unSettledBet, "dcevervrvweocweo");



  useEffect(() => {
    let data = {
      "betType": 1,
      "index": 0,
      "noOfRecords": 5,
      "sportType": 1,
      "isDeleted": "false"
    }
    if (localStorage.getItem("token")) {

      triger(data)
    }
  }, [])


  useEffect(() => {
    const neenee: any = {};
    const nee: any[] = [];

    if (unSettledBet?.data && unSettledBet?.data?.dataList) {
      unSettledBet?.data &&
        unSettledBet?.data?.dataList.forEach((item: any) => {
          if (!neenee[item.eventName]) {
            neenee[item.eventName] = item;
            nee.push(item);
          }
        });
    }
    setMyMarket(nee);
    //  console.log(nee, "neeneeneenee");
  }, [unSettledBet?.data]);



  return (


    <div className="my_market_wraper">
      <div className="my_market_wraper_name"> My Market</div>
      <div className="my_market_wraper_gamedetails_wraper">
        {myMarket &&
          myMarket.map((item: any) => {
            return (
              <Link to={`/match-details/${item?.matchId}`} className="my_market_wraper_game_detaols" >
                <img style={{ width: "22px" }} src={`https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/gicons/${item?.sportId}.png`} />
                <span className="my_market_wraper_game_name">

                  {item?.eventName}
                </span>
              </Link>
            );
          })}
      </div>
    </div>


  )
}

export default MyMarket