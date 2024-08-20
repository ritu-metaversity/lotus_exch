import type { FC } from "react";
import React, { useEffect } from "react";
import SideDesk from "../../SideDesk/SideDesk";
import RightSide from "../../SideDesk/RightSide";
import NavbarDesk from "../NavbarDesk";
import "./style.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FooterDesk from "../../Footer/FooterDesk";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from "react-redux";
import { loginSelector } from "../../../../utils/slice/loginSlice";

interface Props {
  userData: User,
  trigger: any
}

const DeskMainLayout: FC<Props> = ({ userData, trigger }) => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const isHome = pathname.includes("home");
  const loginData = useSelector(loginSelector);
  const isCasinoOrSettings = [
    "super-casino",
    "orderList",
    "betProfitLoss",
    "accountStatement",
    "transferStatement",
    "security",
    "settings",
  ].some((path) => pathname.includes(path));

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      nav('/d/home')
    }
  }, [token])

  return (
    <>
      <NavbarDesk />
      <div className={isHome ? "" : "boxed-layout-wrapper"}>
        {!isHome && (
          <div className="left-pane">
            <SideDesk />
          </div>
        )}

        <div className={isCasinoOrSettings || !loginData?.isLogin ? "mid-pane-casino" : isHome ? "" : "mid-pane"}>
          <Outlet />
        </div>
        {!isCasinoOrSettings && !isHome && loginData?.isLogin && (
          <div className="right-pane">
            <RightSide userData={userData} trigger={trigger} />
          </div>
        )}
      </div>
      <FooterDesk />

    </>
  );
};

export default DeskMainLayout;
