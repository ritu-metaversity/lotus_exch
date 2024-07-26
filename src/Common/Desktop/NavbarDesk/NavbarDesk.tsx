import { Box, Button, Container, IconButton, Toolbar } from "@mui/material";
import React from "react";
import './nav.scss'
import logo from '../../../img/logo.svg'
import NavMenu from "./NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";

const NavbarDesk = () => {
  const nav = useNavigate();
  return (
    <Box className="desk_nav">
      <Box className="header">
        <Toolbar className="container">
          <Box className="logo-container">
            <IconButton className="logo-area" >
              <img src={logo} alt="logo" className="logo" onClick={()=>nav('/d/home')}/>
            </IconButton>
            <Box className="date-area">
              <span className="date">Jul 19, 2024</span>
              <span className="time">09:37:25</span>
            </Box>
          </Box>
          <Button className="login-registration">
            <span className="login">
              {/* <i className="icon-login-now" /> */}
              Login
            </span>
          </Button>
        </Toolbar>
      </Box>
      <NavMenu />
    </Box>
  );
};

export default NavbarDesk;
