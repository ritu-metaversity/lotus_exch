import Mainlayout from "./Common/Mainlayout/Mainlayout";
import { createBrowserRouter } from "react-router-dom";
import DeskMainLayout from "./Common/Desktop/NavbarDesk/DeskMainLayout/DeskMainLayout";
import HomeDesk from "./Pages/Desktop/HomeDesk/HomeDesk";
import LiveUpcomingEvent from "./Pages/Desktop/LiveUpcoming/LiveUpcomingEvent";
import HomeMobile from "./Pages/Mobile/HomeMobile/HomeMobile";
import Sports from "./Pages/Mobile/Sports/Sports";

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
          element: <Sports />,
        },
      ],
    },
    {
      path: "/d/home",
      element: <HomeDesk/>,
    },
    {
      path: "/d/",
      element: <DeskMainLayout />, 
      children: [
        {
          path: '/d/cricket/:id',
          element: <LiveUpcomingEvent/>,
        },
       
      ],
    },
  ]);
};

export default RouteDesk;
