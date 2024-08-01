import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const menu = [
  { title: "Teen Patti", link: "#/super-casino/teen-patti", auth: false },
  { title: "Cricket", link: "/d/cricket/4", auth: false },
  { title: "Virtual Sports", link: "#/virtual-sports", auth: false },
  { title: "Football", link: "#/display/EVENT_TYPE/1", auth: false },
  { title: "Tennis", link: "#/display/EVENT_TYPE/2", auth: false },
  { title: "Basketball", link: "#/display/EVENT_TYPE/7522", auth: false },
  { title: "Golf", link: "#/display/EVENT_TYPE/3", auth: false },
  { title: "Horse Racing", link: "#/display/EVENT_TYPE/7", auth: false },
  { title: "Greyhound Racing", link: "#/display/EVENT_TYPE/4339", auth: false },
  { title: "E-Sports", link: "#/display/EVENT_TYPE/27454571", auth: false },
  { title: "Politics", link: "#/display/EVENT_TYPE/2378961", auth: false },
  { title: "Genie Bet", link: "#/genie-bet", auth: false },
  { title: "Slots", link: "#/super-casino/slots", auth: true },
];

const NavMenu = () => {
  return (
    <Box
      sx={{
        display: "block",
        height: "30px",
        background: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      <nav className="sport_menu">
        <Box className="sport-menu__item casino ng-scope">
          <Link
            className="sport-menu__item  sport-menu__link sport-menu__link--casino "
            to="/d/super-casino"
          >
            Live Casino
          </Link>
        </Box>

        {menu.map((item, index) => (
          <Box key={index} className="sport-menu__item  before_addd">
            <Link
              className={`sport-menu__link ng-binding ng-scope ${item.auth ? "" : "ng-scope"}`}
              to={item.link}
            >
              {item.title}
            </Link>
          </Box>
        ))}
      </nav>
    </Box>
  );
};

export default NavMenu;
