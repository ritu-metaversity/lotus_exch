import React, { useEffect, useState } from "react";
import BannerList from "../BannerList/BannerList";
import LiveMobile from "./LiveMobile/LiveMobile";
import { Box } from "@mui/material";
import MidBannerSlider from "./MidBannerSlider/MidBannerSlider";
import Popular from "./Popular/Popular";
import { useGetDashboardDataQuery } from "../../../utils/Services/authService/sportApi";


const HomeMobile = () => {
  const [activeData, setActiveData] = useState<any>({})
  const { data: dashBoardData } = useGetDashboardDataQuery("");

  const groupMatchesBySportAndSeries = (matches: any[]): any => {
    const groupedMatches: any = [];


  
    matches?.forEach((match) => {
      const sportName = match.sportname;
      if (!groupedMatches[sportName]) {
        groupedMatches[sportName] = [];
      }  
      groupedMatches[sportName].push({ ...match });
    });

  
    return groupedMatches;
  };
  
  useEffect(() => {
    const groupedMatches = groupMatchesBySportAndSeries(dashBoardData?.data);
    setActiveData(groupedMatches);
  }, [dashBoardData]);


  return (
    <div>
      <BannerList />
      <Box paddingInline={"8px"} sx={{   pb: 1, }} ><LiveMobile activeData={activeData}/></Box>
      <MidBannerSlider />
      <Box paddingInline={"8px"} sx={{   pb: 1, }} ><Popular activeData={activeData}/></Box>
    </div>
  );
};

export default HomeMobile;
