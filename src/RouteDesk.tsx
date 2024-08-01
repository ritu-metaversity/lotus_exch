import Mainlayout from "./Common/Mainlayout/Mainlayout";
import { createBrowserRouter } from "react-router-dom";
import DeskMainLayout from "./Common/Desktop/NavbarDesk/DeskMainLayout/DeskMainLayout";
import HomeDesk from "./Pages/Desktop/HomeDesk/HomeDesk";
import LiveUpcomingEvent from "./Pages/Desktop/LiveUpcoming/LiveUpcomingEvent";
import HomeMobile from "./Pages/Mobile/HomeMobile/HomeMobile";
import Sports from "./Pages/Mobile/Sports/Sports";
import Gamedetails from "./Pages/Mobile/Gamedetails/Gamedetails";
import crickt from './img/cricket.png'
import football from './img/football.png'
import tenis from './img/tennis-ball.png'
import basktball from './img/basketball.png'
import golf from './img/golf-ball.png'
import horse from './img/horse-head.png'
import grey from './img/greyhound.png'
import esport from './img/multiplayer.png'
import genies from './img/genie.png'
import Horseracing from "./Pages/Mobile/Sports/Horseracing/Horseracing";
import Genie from "./Pages/Mobile/Sports/Genie/Genie";
import LiveCasino from "./Pages/Mobile/Casino/LiveCasino/LiveCasino";
import LiveCasinoDesk from "./Pages/Desktop/LiveCasinoDesk/LiveCasinoDesk";
import GameDetailsDesk from "./Pages/Desktop/GameDetails/GameDetailsDesk";
import React from "react";


const RouteDesk = () => {
  

  return createBrowserRouter([
    {
      path: "/m",
      element: <Mainlayout />, 
      children: [
        {
          path: '/m',
          element: <HomeMobile />,
        },
        {
          path: 'sport/inplay-upcoming',
          element: <Sports icon={crickt} name="Cricket" />,
        },
        {
          path: 'sport/football',
          element: <Sports icon={football} name="Football"/>,
        },
        {
          path: 'sport/tennis',
          element: <Sports icon={tenis} name="Tennis"/>,
        },
        {
          path: 'sport/basketball',
          element: <Sports icon={basktball} name="Basketball"/>,
        },
        {
          path: 'sport/golf',
          element: <Sports icon={golf} name="Golf"/>,
        },
        {
          path: 'sport/horse',
          element: <Horseracing icon={horse} name="Horse Racing"/>,
        },
        {
          path: 'sport/greyhound',
          element: <Horseracing icon={grey} name="Greyhound Racing"/>,
        },
        {
          path: 'sport/esport',
          element: <Sports icon={esport} name="E-Sport"/>,
        },
        {
          path: 'sport/genie',
          element: <Genie icon={football} name="Football" genieIcon={genies}/>,
        },
        {
          path: 'casino/super-casino/tab',
          element: <LiveCasino/>,
        },
        {
          path: 'sport/:id/e/:matchId',
          element: <Gamedetails />,
        },
      ],
    },
    {
      path: "/d/home",
      element: <HomeDesk/>,
    },
    {
      path: "/d",
      element: <DeskMainLayout />, 
      children: [
        {
          path: 'cricket/:id',
          element: <LiveUpcomingEvent/>,
        },
        {
          path: 'super-casino',
          element: <LiveCasinoDesk/>,
        },
        {
          path: 'display/EVENT/:id/:matchedId',
          element: <GameDetailsDesk/>,
        },
       
      ],
    },
  ]);
};

export default RouteDesk;
