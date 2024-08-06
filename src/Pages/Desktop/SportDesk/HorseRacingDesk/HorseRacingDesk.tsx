import { Box } from "@mui/material";
import React from "react";
import MenuHeading from "../../../../Common/Desktop/ManuHeading/MenuHeading";
import HorseHead from "./HorseHead/HorseHead";
import './style.scss'
import HorseDataDesk from "./HorseHead/HorseDataDesk";



const HorseRacingDesk = () => {
  return (
    <Box className="event_details">
      <Box className="sport-wrapper ">
        <Box className="events  ">
          <MenuHeading name="Horse Racing" />

          <Box className="event_data">
            <HorseHead />
            <HorseDataDesk />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HorseRacingDesk;
