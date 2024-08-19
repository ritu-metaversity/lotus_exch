import { Box } from "@mui/material";
import './style.scss';
import HeadingCasinoCesk from "./HeadingCasinoCesk/HeadingCasinoCesk";
import CasinoHeaderDesk from "./CasinoHeader/CasinoHeaderDesk";
import CasinoTabDesk from "./CasinoTabDesk/CasinoTabDesk";
import CasinoImagesDesk from "./CasinoImages/CasinoImagesDesk";
import type { FC } from "react";
import React from "react";
import type { Props } from "../orderList/OrderList";

const LiveCasinoDesk:FC<Props> = ({userData}) => {
  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk  name="Live Casino" userData={userData}/>
      <CasinoHeaderDesk />
      <CasinoTabDesk />
      <CasinoImagesDesk />
    </div>
  );
};

export default LiveCasinoDesk;
