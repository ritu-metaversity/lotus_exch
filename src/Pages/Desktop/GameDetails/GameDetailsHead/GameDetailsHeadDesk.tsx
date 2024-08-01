import { Box } from "@mui/material";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';

const GameDetailsHeadDesk = () => {
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
                  {" "}
                  London Spirit Women v Welsh Fire Women{" "}
                  <div className="competition">The Hundred - Womens</div>
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
                  <FeaturedPlayListOutlinedIcon sx={{
                    marginRight:"5px"
                  }}/> Scores{" "}
                </Link>
                <Link  to="#" className="tab">
                  <PlayCircleFilledWhiteOutlinedIcon sx={{
                    marginRight:"5px"
                  }} /> Live Video{" "}
                </Link>
                <Link to="#" className="tab">
                  <OndemandVideoOutlinedIcon sx={{
                    marginRight:"5px"
                  }}/> Scores & Live{" "}
                </Link>
                <Box className="rules-wrapper">
                  <span className="rules ">
                    <span className="rules__icon icon-outline-info" />
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
