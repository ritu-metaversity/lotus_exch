import { Box } from "@mui/material";
import "./style.scss";
import GameDetailsHeadDesk from "./GameDetailsHead/GameDetailsHeadDesk";
import React, { useEffect, useState } from "react";
import MatchedOddsDesk from "./MatchedOddsDesk/MatchedOddsDesk";
import FancyDesk from "./FancyDesk/FancyDesk";
import { useGetBetsDetailsMutation, useGetDashboardDataQuery, useGetFancyMarketMutation, useGetMatchedMarketMutation } from "../../../utils/Services/authService/sportApi";
import { useParams } from "react-router-dom";
import { socket } from "./socket";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from "react-redux";
import { loginSelector } from "../../../utils/slice/loginSlice";
import { setBetData } from "../../../utils/slice/betSlice";
import { setFancyBetData } from "../../../utils/slice/fancySlice";

const GameDetailsDesk = () => {
  const [moduleOpen, setModuleOpen] = useState<boolean>(false);
  const [isFavAndMatchIds, setisFavAndMatchIds] = useState<any>([]);
  const [filterSportData, setFilterSportData] = useState<any[]>([]);
  const [marketData, setMarketData] = useState<any[]>([]);
  const [fancyData, setFancyData] = useState<any>(null);
  const dispatch = useDispatch();

  const moduleFancyOpenHandler = (
    price: number,
    typeId: number,
    matchId: string,
    fancyId: number,
    selectionId: string,
    fHeadName: string,
    sessInpYes: number,
    sessInpNo: number,
    sportId: number,
    pointDiff: string,
    sessSizeYes: number,
    sessSizeNo: number,
    side: number,
    isFancy: boolean,
    minStack: string,
    maxStack: string,
    isBack: number
  ) => {
    const newBetData = {
      price,
      typeId,
      matchId,
      fancyId,
      selectionId,
      fHeadName,
      sessInpYes,
      sessInpNo,
      sportId,
      pointDiff,
      sessSizeYes,
      sessSizeNo,
      side,
      isFancy,
      minStack,
      maxStack,
      isBack
    };
    dispatch(setFancyBetData(newBetData))
    dispatch(setBetData(null));
    setModuleOpen((prev) => !prev);
  };
  const { matchedId, id } = useParams();
  const [getBetDetails, { data: betDetails }] = useGetBetsDetailsMutation();
  const [getMatchedMarket, { data: matchedMarket }] = useGetMatchedMarketMutation();
  const { data: dashboard } = useGetDashboardDataQuery("");
  const [getFancyMarket, { data: fancyMarket }] = useGetFancyMarketMutation();

  const loginData = useSelector(loginSelector);

  useEffect(() => {
    getBetDetails(matchedId)
    getMatchedMarket(matchedId)
    getFancyMarket(matchedId)
  }, [matchedId])

  // const dashboardData = async () => {
  //   if (response) {
  //     const updatedIsFavAndMatchIds = response?.data?.map((item) => ({
  //       isFav: item.isFav,
  //       matchid: item.matchid,
  //     }));
  //     const filteredData = response?.data?.filter(
  //       (item) =>
  //         item?.sportid === Number(sport_Id) && item?.matchid !== Number(id)
  //     );
  //     setFilterSportData(filteredData);
  //     setisFavAndMatchIds(updatedIsFavAndMatchIds); 
  //   }
  // };

  // const activeMatchesHandler = (arg: any) => {
  //   setActiveMatchesSlider(arg);
  // };



  useEffect(() => {
    if (dashboard) {
      const updatedIsFavAndMatchIds = dashboard?.data?.map((item) => ({
        isFav: item.isFav,
        matchid: item.matchid,
      }));
      const filteredData = dashboard?.data?.filter(
        (item) =>
          item?.sportid === Number(id) && item?.matchid !== Number(id)
      );
      setFilterSportData(filteredData);
      setisFavAndMatchIds(updatedIsFavAndMatchIds);
    }
  }, [dashboard]);




  useEffect(() => {
    const initSocket = () => {
      socket.connect();

      socket.on("connect", () => {
        const roomEvents = [
          `BETS_UPDATE_DATA:${loginData?.data?.loginData?.user?.mstrid}_${matchedId}`,
          `MATCH_UPDATE_DATA:${matchedId}`,
          `UPDATE_MATCH_EVENT:${matchedId}`,
          `MARKET_UPDATE_DATA:${matchedId}`,
          `UPDATE_MARKETS:${matchedId}`,
          `UPDATE_FANCY:${matchedId}`,
          `FANCY${matchedId}`,
        ];

        if (matchedMarket) {
          matchedMarket?.data?.forEach((market) => {
            if (market.marketid) {
              roomEvents.push(`EID${market.marketid}`);
            }
          });
        }

        roomEvents.forEach((event) => socket.emit("room", { name: event }));
      });

      socket.on("message", (data) => {
        const oddsData = JSON.parse(data);

        setMarketData((prevMarketData) => {
          const updatedMarketData = [...prevMarketData];
          const existingIndex = updatedMarketData.findIndex(
            (item) => item.id === oddsData.id
          );

          if (existingIndex !== -1) {
            updatedMarketData[existingIndex] = oddsData;
          } else {
            updatedMarketData.push(oddsData);
          }

          return updatedMarketData;
        });

      });

      socket.on(`FANCY${matchedId}`, (data) => {
        const oddsData = JSON.parse(data);
        setFancyData(oddsData);
      });

      socket.on("disconnect", () => console.log("WebSocket disconnected."));
    };

    initSocket();

    return () => {
      socket.off("message");

      if (matchedMarket) {
        matchedMarket?.data?.forEach((market) => {
          if (market.marketid) {
            socket.emit("leave-room", { name: `EID${market.marketid}` });
          }
        });
      }

      socket.disconnect();
    };
  }, [matchedId, matchedMarket]);

  const moduleOpenHandler = (
    isBack: number,
    marketId: string,
    matchName: string,
    runnerName: string,
    odds: string,
    selectionId: string,
    matchId: number,
    minStack: number,
    maxStack: number
  ) => {
    const newBetData = {
      isBack,
      marketId,
      matchName,
      runnerName,
      price: Number(odds),
      selectionId,
      matchId,
      minStack,
      maxStack,
      sportId: id,
    };
    dispatch(setBetData(newBetData));
    dispatch(setFancyBetData(null))
  };


  return (
    <div className="group-event">
      <GameDetailsHeadDesk matchName={matchedMarket?.data[0]?.matchName} seriesName={matchedMarket?.data[0]?.series_name} />
      <Box className="ng-isolate-scope">
        <div className="market-group ">
          <div className="markets-rows ">
            <div>
              <MatchedOddsDesk
                // isFavAndMatchIds={isFavAndMatchIds}
                // handleFav={handleFav}

                state={matchedMarket?.data}
                marketData={marketData}
                sportId={id}

                bets={betDetails?.data}
                moduleOpenHandler={moduleOpenHandler} />
            </div>
          </div>
        </div>

        <FancyDesk fancyData={fancyData}
          fancyDataTabs={fancyMarket}
          bets={betDetails?.data}
          moduleFancyOpenHandler={moduleFancyOpenHandler} />


      </Box>
    </div>
  );
};

export default GameDetailsDesk;
