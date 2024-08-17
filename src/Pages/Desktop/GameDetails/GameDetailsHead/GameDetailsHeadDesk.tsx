import { Box } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props{
  seriesName:string,
  matchName:string
}

const GameDetailsHeadDesk = ({matchName, seriesName}) => {
  return (
    <Box className="match-stats-video">
      <Box>
        <div className="header">
          <div className="match-centre">
            <div className="event-header event-tabs-header">
              <h1 className="title">
                <PlayCircleIcon
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                  }}
                />
                <div className="title-competition-box">
                  
                 {matchName}
                  <div className="competition">{seriesName}</div>
                </div>
              </h1>
              <KeyboardArrowUpIcon
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  position: "absolute",
                  top: "20px",
                  right: "16px",
                  cursor: "pointer",
                }}
              />
              <div className="header-tabs">
                <Link to="#" className="tab selected">
                  <FeaturedPlayListOutlinedIcon
                    sx={{
                      marginRight: "5px",
                    }}
                  />
                  Scores
                </Link>
                <Link to="#" className="tab">
                  <PlayCircleFilledWhiteOutlinedIcon
                    sx={{
                      marginRight: "5px",
                    }}
                  />
                  Live Video
                </Link>
                <Link to="#" className="tab">
                  <OndemandVideoOutlinedIcon
                    sx={{
                      marginRight: "5px",
                    }}
                  />
                  Scores & Live
                </Link>
                <Box className="rules-wrapper">
                  <span className="rules ">
                    <InfoOutlinedIcon
                      sx={{
                        marginRight: "5px",
                      }}
                    />
                    <span className="rules__text ng-binding">Rules</span>
                  </span>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default GameDetailsHeadDesk;
