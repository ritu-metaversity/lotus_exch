import { Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import React from "react";
import './nav.scss'
import logo from '../../../img/logo.svg'
import NavMenu from "./NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";
import MarqueeDesk from "./MarqueeDesk";
import DateArea from "./DateArea";
import Infobar from "./Infobar";

const NavbarDesk = () => {
  const nav = useNavigate();
  return (
    <>
    <MarqueeDesk/>
    <Box className="desk_nav">
      <Box className="header">
        <Toolbar className="container">
          <Box className="logo-container">
            <IconButton className="logo-area" >
              <img src={logo} alt="logo" className="logo" onClick={()=>nav('/home')}/>
            </IconButton>
            <Box className="date-area clock">
            <DateArea />
            </Box>
          </Box>
          {/* <Button className="login-registration">
            <span className="login">
              <i className="icon-login-now" />
              Login
            </span>
          </Button> */}
          <Infobar />
        </Toolbar>
      </Box>
      <NavMenu />
    </Box>
    </>
  );
};

export default NavbarDesk;
