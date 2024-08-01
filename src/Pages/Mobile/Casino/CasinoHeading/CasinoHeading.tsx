import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const CasinoHeading = () => {
  const nav = useNavigate();
  const handleClick = ()=>{
    nav('/m')
  }
  return (
    <>
      <Box className="casino_main_header">
        <nav className="casino-header">
          <div className="title-wrap">
            <button className="button -icon back-button ng-star-inserted" onClick={handleClick}>
              <ArrowBackIcon />
            </button>

            <div className="logo ng-star-inserted" />
            <div className="title ng-star-inserted">Live Casino</div>
          </div>
        </nav>
      </Box>
      <Box className="header-game-mobile ng-star-inserted">
        <div
          className="top-game ng-star-inserted"
          style={{
            backgroundImage:
              'url("https://d2eb1cys5jgnub.cloudfront.net/cl/Evolution-b.webp")',
          }}
        />
      </Box>
    </>
  );
};

export default CasinoHeading;
