import { Box } from "@mui/material";
import type { FC } from "react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useGetlogOutMutation } from "../../../utils/Services/authService/authApi";
import { useDispatch } from "react-redux";
import { logout } from "../../../utils/slice/loginSlice";

interface Props{
  loginData: any
}

const Infobar:FC<Props> = ({loginData}) => {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const [getLogOut] = useGetlogOutMutation();
  const nav = useNavigate();

  const toggleActive = () => setActive((prev) => !prev);
  const closeDropdown = () => setActive(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleLogout = ()=>{
    getLogOut();
    localStorage.clear();
    dispatch(logout())
    nav('/d/home')
  }


  return (
    <div className="infobar">
      <ul className="linkbar">
        <li className="search-container">
          <div className="apl-form search">
            <div className={`placeholder-wrapper animatable ${focus ? "activated" : ""}`}>
              <div className="placeholder">Search Events</div>
              <div className="inputsearch">
                <SearchIcon className="icon-search" sx={{ fontSize: "25px" }} />
                <input
                  type="text"
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                />
              </div>
            </div>
          </div>
        </li>

        <li>
          <p className="ng-binding">Logged in as {loginData?.data?.loginData?.user?.mstrname}</p>
          <p className="last-login ng-binding">
            Last logged in:
            <Box>
              <time className="ng-binding">02/08/2024 13:17</time>
            </Box>
          </p>
        </li>

        <li className="-qa-setting-dropdown">
          <div className="wrap-dd-menu" ref={dropdownRef}>
            <Link to="#" onClick={toggleActive}>
              <SettingsIcon sx={{ verticalAlign: "middle" }} />
              <span>Account</span>
            </Link>
            {active && (
              <ul className="dropdown active">
                {[
                  { to: "orderList", label: "My Bets" },
                  { to: "betProfitLoss", label: "Betting Profit and Loss" },
                  { to: "accountStatement", label: "Account Statement" },
                  { to: "transferStatement", label: "Transfer Statement" },
                  { to: "security", label: "Security" },
                  { to: "settings", label: "Settings" },
                ].map((item, index) => (
                  <li key={index} className="dropdown-item" onClick={closeDropdown}>
                    <Link to={item.to} className="dropdown-item ng-binding">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>

        <li>
          <Link to="#" className="qa-logout" onClick={handleLogout}>
            <LogoutIcon sx={{ verticalAlign: "middle" }} />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Infobar;
