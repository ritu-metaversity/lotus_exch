import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

const Infobar = () => {
    const [active, setActive] = useState(false)
    const [focus, setFocus] = useState(false)

    const handleActive = ()=>{
        setActive(!active)
    }
    // const addLabelClassName = () => {
    //     setFocus(true)
    // }
  return (
    <div className="infobar">
      <ul className="linkbar">
        <li
          className="search-container"
          
        >
          <div className="apl-form search">
            <div className={`placeholder-wrapper  animatable ${focus?"activated":""}`}>
              <div className="placeholder ng-binding">Search Events</div>
              <div >
                <div className="inputsearch">
                  <SearchIcon className="icon-search" sx={{
                    fontSize:"25px"
                  }}/>
                  <input
                    type="text"
                    // onFocus={addLabelClassName }
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li></li>
        <li>
          <p className="ng-binding">Logged in as risky69</p>
          <p className="last-login ng-binding">
            Last logged in:
            <Box className="">
              <time ng-if="$ctrl.convertedTime" className="ng-binding ">
                02/08/2024 13:17
              </time>
            </Box>
          </p>
        </li>
        <li className="-qa-setting-dropdown">
          <div
            className="wrap-dd-menu "
            ng-class="{'disabled': dropdownDisabled}"
          >
            <Link to="#" className="" onClick={handleActive}>
              <SettingsIcon sx={{
                verticalAlign:"middle"
              }} />
              <span className="">Account</span>
            </Link>
            <ul className={`dropdown ${active?"active":""}`}>
              <li className="dropdown-item  ">
                {/* ngIf: !dropdownMenuItem.divider */}
                <Link to="#" className="dropdown-item ng-binding ">
                  My Bets
                </Link>
              </li>
              <li className="dropdown-item  ">
                <Link
                  to="#betProfitLoss"
                  className="dropdown-item ng-binding "
                >
                  Betting Profit and Loss
                </Link>
              </li>
              <li className="dropdown-item  ">
                <Link to="#accountStatement">Account Statement</Link>
              </li>
              <li className="dropdown-item  ">
                <Link
                  to="#transferStatement"
                  className="dropdown-item ng-binding "
                >
                  Transfer Statement
                </Link>
              </li>
              <li className="dropdown-item  ">
                <Link
                  to="#security"
                  className="dropdown-item ng-binding "
                >
                  Security
                </Link>
              </li>
              <li className="dropdown-item  ">
                <Link
                  to="#settings"
                  className="dropdown-item ng-binding "
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="#" className="qa-logout" ng-click="logout()">
            <LogoutIcon sx={{
                verticalAlign:"middle"
            }} />
            <span className="">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Infobar;
