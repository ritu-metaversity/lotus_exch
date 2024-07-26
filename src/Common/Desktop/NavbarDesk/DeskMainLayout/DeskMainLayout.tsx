import React from "react";
import SideDesk from "../../SideDesk/SideDesk";
import RightSide from "../../SideDesk/RightSide";
import NavbarDesk from "../NavbarDesk";
import './style.scss'
import { Outlet } from "react-router-dom";

const DeskMainLayout = () => {
  return (
    <>
    <NavbarDesk />
    <div className="boxed-layout-wrapper">
      <div className="left-pane" >
        <SideDesk />
      </div>
      <div className="mid-pane">
        <Outlet />
      </div>

      <div className="right-pane">
       <RightSide />
      </div>
    </div>
    </>
  );
};

export default DeskMainLayout;
