import React from "react";
import SideDesk from "../../SideDesk/SideDesk";
import RightSide from "../../SideDesk/RightSide";
import NavbarDesk from "../NavbarDesk";
import "./style.scss";
import { Outlet, useLocation } from "react-router-dom";
import FooterDesk from "../../Footer/FooterDesk";

const DeskMainLayout = () => {
  const { pathname } = useLocation();

  const isHome = pathname.includes("home");
  const isCasinoOrSettings = [
    "super-casino",
    "orderList",
    "betProfitLoss",
    "accountStatement",
    "transferStatement",
    "security",
    "settings",
  ].some((path) => pathname.includes(path));

  return (
    <>
      <NavbarDesk />
      <div className={isHome ? "" : "boxed-layout-wrapper"}>
        {!isHome && (
          <div className="left-pane">
            <SideDesk />
          </div>
        )}

        <div className={isCasinoOrSettings ? "mid-pane-casino" : isHome ? "" : "mid-pane"}>
          <Outlet />
        </div>

        {!isCasinoOrSettings && !isHome && (
          <div className="right-pane">
            <RightSide />
          </div>
        )}
      </div>
      <FooterDesk />

    </>
  );
};

export default DeskMainLayout;
