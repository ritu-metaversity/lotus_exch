import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useParams } from "react-router-dom";
import casino from "../../../img/casino.png";
import bat from "../../../img/cricket.png";
import football from "../../../img/football.png";
import tennis from "../../../img/tennis-ball.png";
import sports_basketball from "../../../img/basketball.png";
import sports_golf from "../../../img/golf-ball.png";
import sports_horse from "../../../img/horse-head.png";
import sports_mma from "../../../img/greyhound.png";
import esports from "../../../img/multiplayer.png";
import public_p from "../../../img/documents.png";
import whatshot from "../../../img/genie.png";
import "./side.scss";
import { useGetDashboardDataQuery } from "../../../utils/Services/authService/sportApi";
import SportSubData from "./SportSubData";
import { useDispatch } from "react-redux";
import { setSportName } from "../../../utils/slice/sportSlice";

const menuItems = [
  
  {
    icon: casino,
    text: "Live Casino",
    className: "exchangegame",
    href: "/d/super-casino",
  },
  { icon: bat, text: "Cricket", className: "cricket", href: "/d/sport/4" },
  {
    icon: football,
    text: "Football",
    className: "football",
    href: "/d/sport/1",
  },
  { icon: tennis, text: "Tennis", className: "tennis", href: "/d/sport/2" },
  { icon: sports_basketball, text: "Basketball", className: "basketball" },
  { icon: sports_golf, text: "Golf", className: "golf" },
  {
    icon: sports_horse,
    text: "Horse Racing",
    className: "horseracing",
    href: "/d/horseracing/7",
  },
  { icon: sports_mma, text: "Greyhound Racing", className: "greyhoundracing" },
  { icon: esports, text: "E-Sports", className: "esports" },
  { icon: public_p, text: "Politics", className: "politics" },
  { href: "#/genie-bet", icon: whatshot, text: "Genie Bet" },
];

const colorName = {
  4: "cricket",
  1: "football",
  2: "tennis",
};
const iconHome = {
  4: bat,
  1: football,
  2: tennis,
};

const SideDesk = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const [showSportList, setShowSportList] = useState(true);
  const dispatch = useDispatch()

  const { id } = useParams();

  const [activeData, setActiveData] = useState<any>({});
  const { data: dashBoardData } = useGetDashboardDataQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !id,
  });

  const groupMatchesBySportAndSeries = (matches: any[]): any => {
    const groupedMatches: any = {};
    matches?.forEach((match) => {
      const seriesName = match.series_name;
      if (!groupedMatches[seriesName]) {
        groupedMatches[seriesName] = [];
      }
      groupedMatches[seriesName].push({ ...match });
    });

    return groupedMatches;
  };

  useEffect(() => {
    const groupedMatches = groupMatchesBySportAndSeries(dashBoardData?.data);
    setActiveData(groupedMatches);
  }, [dashBoardData]);

  const handleActive = (index: number) => {
    setIsActive(index);
    setShowSportList(false);
  };

  const handleShowSport = ()=>{
    setShowSportList(true);
    dispatch(setSportName({
      matchName:null
    }))
  }
  const handleCricket = ()=>{
    dispatch(setSportName({
      matchName:null
    }))
  }

  return (
    <>
      {showSportList ? (
        <List className="left-menu-container">
          {menuItems.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.href || "#"}
                className={`group-name sport-type  ${isActive === index ? item.className : ""}`}
                onClick={() => handleActive(index)}
              >
                <ListItem
                  button={true}
                  sx={{
                    minHeight: "60px",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="side_image"
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {/* {item.label && <div className="label_new">{item.label}</div>} */}
                </ListItem>
              </Link>
            );
          })}
        </List>
      ) : (
        <>
          <List className="left-menu-container">
            <Link
              to="#"
              
              className={`group-name sport-type `}
              onClick={() =>handleShowSport()}
            >
              <ListItem
                button={true}
                sx={{
                  minHeight: "60px",
                }}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <img
                    src="/imges/home.png"
                    alt="Home"
                    className="side_image"
                  />
                </ListItemIcon>
                <ListItemText primary={"Sports"} />
              </ListItem>
            </Link>
            <Link
              to="#"
              className={`group-name sport-type  ${colorName[id]}`}
              style={{
                minHeight: "40px",
              }}
              onClick={()=>handleCricket()}
            >
              <ListItem button={true}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <img src={iconHome[id]} alt="" className="side_image" />
                </ListItemIcon>
                <ListItemText primary={colorName[id]} />
              </ListItem>
            </Link>
            <SportSubData activeData={activeData} id={id}/>
          </List>
        </>
      )}
    </>
  );
};

export default SideDesk;
