import { Box } from "@mui/material";
import "./style.scss";
import CasinoHeading from "../CasinoHeading/CasinoHeading";
import CasinoTabs from "../CasinoTabs/CasinoTabs";
import CasinoImage from "../CasinoImage/CasinoImage";

const LiveCasino = () => {
  return (
    <Box className="casino_live">
      <div className="layout-content header-with-notifications">
        <CasinoHeading />
        <CasinoTabs />
        <CasinoImage />
      </div>
    </Box>
  );
};

export default LiveCasino;
