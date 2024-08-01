import { Box } from "@mui/material";
import './style.scss';
import HeadingCasinoCesk from "./HeadingCasinoCesk/HeadingCasinoCesk";
import CasinoHeaderDesk from "./CasinoHeader/CasinoHeaderDesk";
import CasinoTabDesk from "./CasinoTabDesk/CasinoTabDesk";
import CasinoImagesDesk from "./CasinoImages/CasinoImagesDesk";

const LiveCasinoDesk = () => {
  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk />
      <CasinoHeaderDesk />
      <CasinoTabDesk />
      <CasinoImagesDesk />
    </div>
  );
};

export default LiveCasinoDesk;
