import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingGame from "./GameHeading/HeadingGame";
import SportTabs from "./SportTabs/SportTabs";
import Matchodds from "./Matchodds/Matchodds";
import Fancy from "./Fancy/Fancy";
import MobileBetList from "./MobileBetList/MobileBetList";
import { useDispatch, useSelector } from "react-redux";
import { setFancyBetData } from "../../../utils/slice/fancySlice";
import { setBetData } from "../../../utils/slice/betSlice";
import {
  useGetBetsDetailsMutation,
  useGetDashboardDataQuery,
  useGetFancyMarketMutation,
  useGetMatchedMarketMutation,
} from "../../../utils/Services/authService/sportApi";
import { loginSelector } from "../../../utils/slice/loginSlice";
import { socket } from "../../Desktop/GameDetails/socket";
import { useParams } from "react-router-dom";

const Gamedetails = () => {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
    isBack: number,
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
      isBack,
    };
    dispatch(setFancyBetData(newBetData));
    dispatch(setBetData(null));
    setModuleOpen((prev) => !prev);
  };
  const { matchId, id } = useParams();
  const [getBetDetails, { data: betDetails }] = useGetBetsDetailsMutation();
  const [getMatchedMarket, { data: matchedMarket }] =
    useGetMatchedMarketMutation();
  const { data: dashboard } = useGetDashboardDataQuery("");
  const [getFancyMarket, { data: fancyMarket }] = useGetFancyMarketMutation();

  const loginData = useSelector(loginSelector);

  useEffect(() => {
    getBetDetails(matchId);
    getMatchedMarket(matchId);
    getFancyMarket(matchId);
  }, [matchId]);

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
        (item) => item?.sportid === Number(id) && item?.matchid !== Number(id),
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
          `BETS_UPDATE_DATA:${loginData?.data?.loginData?.user?.mstrid}_${matchId}`,
          `MATCH_UPDATE_DATA:${matchId}`,
          `UPDATE_MATCH_EVENT:${matchId}`,
          `MARKET_UPDATE_DATA:${matchId}`,
          `UPDATE_MARKETS:${matchId}`,
          `UPDATE_FANCY:${matchId}`,
          `FANCY${matchId}`,
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
            (item) => item.id === oddsData.id,
          );

          if (existingIndex !== -1) {
            updatedMarketData[existingIndex] = oddsData;
          } else {
            updatedMarketData.push(oddsData);
          }

          return updatedMarketData;
        });
      });

      socket.on(`FANCY${matchId}`, (data) => {
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
  }, [matchId, matchedMarket]);

  const moduleOpenHandler = (
    isBack: number,
    marketId: string,
    matchName: string,
    runnerName: string,
    odds: string,
    selectionId: string,
    matchId: number,
    minStack: number,
    maxStack: number,
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
    dispatch(setFancyBetData(null));
  };

  return (
    <Box>
      <HeadingGame marketData={matchedMarket?.data}/>
      <SportTabs handleChange={handleChange} value={value} />
      <Box
        sx={{
          p: 1,
          mt: 2,
        }}
      >
        {value === "four" && <MobileBetList />}

        <Matchodds
          state={matchedMarket?.data}
          marketData={marketData}
          sportId={id}
          bets={betDetails?.data}
          moduleOpenHandler={moduleOpenHandler}
        />
        <Fancy />
      </Box>
    </Box>
  );
};

export default Gamedetails;
