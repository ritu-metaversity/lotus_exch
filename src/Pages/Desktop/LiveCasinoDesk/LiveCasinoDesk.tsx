import { Box } from "@mui/material";
import './style.scss';
import HeadingCasinoCesk from "./HeadingCasinoCesk/HeadingCasinoCesk";
import CasinoHeaderDesk from "./CasinoHeader/CasinoHeaderDesk";
import CasinoTabDesk from "./CasinoTabDesk/CasinoTabDesk";
import CasinoImagesDesk from "./CasinoImages/CasinoImagesDesk";
import React from "react";

const LiveCasinoDesk = () => {
  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk  name="Live Casino"/>
      <CasinoHeaderDesk />
      <CasinoTabDesk />
      <CasinoImagesDesk />
    </div>
  );
};

export default LiveCasinoDesk;
