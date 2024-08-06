import { Box } from "@mui/material";
import "./style.scss";
import stopwatch from ".././../../../../img/stop_watch.png";
import zero from ".././../../../../img/zero.png";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from "react";

const Upcomming = () => {
  return (
    <Box className="race-upcoming-wrapper">
      <div className="upcoming-races__wrapper">
        <span className="upcoming-races__header-wrapper">
          <span>Upcoming</span>
          <span className="upcoming-races__header-event-name">Greyville</span>
          <span>races:</span>
        </span>
        <ul className="upcoming-races__menu">
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">16:10</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">16:45</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">17:20</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">17:55</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">18:30</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">19:05</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">19:40</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          <li className="upcoming-races__item">
            <span className="upcoming-races__item-time">20:15</span>
            <span className="upcoming-races__item-buttons">
              <img src={stopwatch} alt="fast" width={"20px"} />
              <img src={zero} alt="fast" width={"20px"} />
              <KeyboardArrowRightIcon />
            </span>
          </li>
          {/**/}
        </ul>
      </div>
    </Box>
  );
};

export default Upcomming;
