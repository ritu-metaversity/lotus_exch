import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Mainlayout from "./Common/Mainlayout/Mainlayout";
import DeskMainLayout from "./Common/Desktop/NavbarDesk/DeskMainLayout/DeskMainLayout";

import HomeDesk from "./Pages/Desktop/HomeDesk/HomeDesk";
import LiveUpcomingEvent from "./Pages/Desktop/LiveUpcoming/LiveUpcomingEvent";
import HomeMobile from "./Pages/Mobile/HomeMobile/HomeMobile";
import Sports from "./Pages/Mobile/Sports/Sports";
import Gamedetails from "./Pages/Mobile/Gamedetails/Gamedetails";
import Horseracing from "./Pages/Mobile/Sports/Horseracing/Horseracing";
import Genie from "./Pages/Mobile/Sports/Genie/Genie";
import LiveCasino from "./Pages/Mobile/Casino/LiveCasino/LiveCasino";
import LiveCasinoDesk from "./Pages/Desktop/LiveCasinoDesk/LiveCasinoDesk";
import GameDetailsDesk from "./Pages/Desktop/GameDetails/GameDetailsDesk";
import FootballDesk from "./Pages/Desktop/SportDesk/FootballDesk";
import HorseRacingDesk from "./Pages/Desktop/SportDesk/HorseRacingDesk/HorseRacingDesk";

import crickt from './img/cricket.png';
import football from './img/football.png';
import tenis from './img/tennis-ball.png';
import basktball from './img/basketball.png';
import golf from './img/golf-ball.png';
import horse from './img/horse-head.png';
import grey from './img/greyhound.png';
import esport from './img/multiplayer.png';
import genies from './img/genie.png';
import SettingsMob from "./Pages/Mobile/settings/SettingsMob";
import CurrentBetMob from "./Pages/Mobile/CurrentBet/CurrentBetMob";
import ProfitandLossMob from "./Pages/Mobile/ProfitandLoss/ProfitandLossMob";
import TransferStatement from "./Pages/Mobile/TransferStatement/TransferStatement";
import TimeSettingMob from "./Pages/Mobile/TimeSetting/TimeSettingMob";
import ChangePasswordMob from "./Pages/Mobile/ChangePassword/ChangePasswordMob";
import Rulesmob from "./Pages/Mobile/Rules/Rulesmob";
import KycMob from "./Pages/Mobile/kyc/KycMob";
import ResponsibleGamblingMob from "./Pages/Mobile/ResponsibleGambling/ResponsibleGamblingMob";
import ExclusionpolicyMob from "./Pages/Mobile/Exclusionpolicy/ExclusionpolicyMob";

const MobileRoutes = () => (
  <Routes>
    <Route path="/m" element={<Mainlayout />}>
      <Route path="" element={<HomeMobile />} />
      <Route path="sport/inplay-upcoming" element={<Sports icon={crickt} name="Cricket" />} />
      <Route path="sport/football" element={<Sports icon={football} name="Football" />} />
      <Route path="sport/tennis" element={<Sports icon={tenis} name="Tennis" />} />
      <Route path="sport/basketball" element={<Sports icon={basktball} name="Basketball" />} />
      <Route path="sport/golf" element={<Sports icon={golf} name="Golf" />} />
      <Route path="sport/horse" element={<Horseracing icon={horse} name="Horse Racing" />} />
      <Route path="sport/greyhound" element={<Horseracing icon={grey} name="Greyhound Racing" />} />
      <Route path="sport/esport" element={<Sports icon={esport} name="E-Sport" />} />
      <Route path="sport/genie" element={<Genie icon={football} name="Football" genieIcon={genies} />} />
      <Route path="casino/super-casino/tab" element={<LiveCasino />} />
      <Route path="sport/:id/e/:matchId" element={<Gamedetails />} />
      <Route path="settings" element={<SettingsMob />} />
      <Route path="open-bets" element={<CurrentBetMob />} />
      <Route path="betting-pnl" element={<ProfitandLossMob />} />
      <Route path="transfer" element={<TransferStatement />} />
      <Route path="time-settings" element={<TimeSettingMob />} />
      <Route path="change-password" element={<ChangePasswordMob />} />
      <Route path="rules-regs" element={<Rulesmob />} />
      <Route path="kyc" element={<KycMob />} />
      <Route path="responsible-gambling" element={<ResponsibleGamblingMob />} />
      <Route path="exclusion-policy" element={<ExclusionpolicyMob />} />
    </Route>
  </Routes>
);

const DesktopRoutes = () => (
  <Routes>
    <Route path="/d" element={<DeskMainLayout />}>
      <Route path="home" element={<HomeDesk />} />
      <Route path="cricket/:id" element={<LiveUpcomingEvent />} />
      <Route path="football/:id" element={<FootballDesk />} />
      <Route path="horseracing/:id" element={<HorseRacingDesk />} />
      <Route path="super-casino" element={<LiveCasinoDesk />} />
      <Route path="display/EVENT/:id/:matchedId" element={<GameDetailsDesk />} />
    </Route>
  </Routes>
);

const AppRoutes = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to={windowWidth > 700 ? "/d/home" : "/m"} replace />} />
      {windowWidth > 700 ? (
        <Route path="*" element={<DesktopRoutes />} />
      ) : (
        <Route path="*" element={<MobileRoutes />} />
      )}
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
