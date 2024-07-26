import React from "react";
import BannerList from "../BannerList/BannerList";
import LiveMobile from "./LiveMobile/LiveMobile";
import { Box } from "@mui/material";
import MidBannerSlider from "./MidBannerSlider/MidBannerSlider";
import Popular from "./Popular/Popular";

const HomeMobile = () => {
  return (
    <div>
      <BannerList />
      <Box paddingInline={"8px"} sx={{   pb: 1, }} ><LiveMobile /></Box>
      <MidBannerSlider />
      <Box paddingInline={"8px"} sx={{   pb: 1, }} ><Popular /></Box>
    </div>
  );
};

export default HomeMobile;
