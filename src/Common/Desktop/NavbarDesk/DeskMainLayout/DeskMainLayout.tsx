import React from "react";
import SideDesk from "../../SideDesk/SideDesk";
import RightSide from "../../SideDesk/RightSide";
import NavbarDesk from "../NavbarDesk";
import "./style.scss";
import { Outlet, useLocation } from "react-router-dom";

const DeskMainLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavbarDesk />
      <div className={pathname.includes("home")?"":"boxed-layout-wrapper"}>
        {
          (!pathname.includes("home")) &&   <div className="left-pane">
          <SideDesk />
        </div>
        }
      
        <div className={pathname.includes("super-casino")?"mid-pane-casino ": pathname.includes("home")?"":"mid-pane"}>
          <Outlet />
        </div>
        {(!pathname.includes("super-casino") && !pathname.includes("home")) && (
          <div className="right-pane">
            <RightSide />
          </div>
        )}
      </div>
    </>
  );
};

export default DeskMainLayout;
