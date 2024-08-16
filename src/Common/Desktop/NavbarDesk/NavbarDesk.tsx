import { Box, Button, IconButton, Modal, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import './nav.scss'
import logo from '../../../img/logo.svg'
import NavMenu from "./NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";
import MarqueeDesk from "./MarqueeDesk";
import DateArea from "./DateArea";
import Infobar from "./Infobar";
import LoginModals from "../../LoginModals/LoginModals";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from "react-redux";
import { loginSelector } from "../../../utils/slice/loginSlice";
import axios from "axios";

const NavbarDesk = () => {
  const [locationData, setLocationData] = useState(null);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const loginData = useSelector(loginSelector);

  useEffect(() => {
    axios.get('https://ipapi.co/json')
      .then(response => {
        setLocationData(response.data);
      })
  }, []);



  return (
    <>
      {
        loginData?.isLogin && <MarqueeDesk message={loginData?.data?.loginData?.domain?.admin_headline}/>
      }

      <Box className="desk_nav">
        <Box className="header">
          <Toolbar className="container">
            <Box className="logo-container">
              <IconButton className="logo-area" >
                <img src={logo} alt="logo" className="logo" onClick={() => nav('home')} />
              </IconButton>
              <Box className="date-area clock">
                <DateArea />
              </Box>
            </Box>

            {
              loginData?.isLogin ? <Infobar loginData={loginData}/> : <Button className="login-registration" onClick={handleOpen}>
                <span className="login">
                  <i className="icon-login-now" />
                  Login
                </span>
              </Button>
            }
          </Toolbar>
        </Box>
        <NavMenu />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <LoginModals handleClose={handleClose} locationData={locationData} />
      </Modal>
    </>
  );
};

export default NavbarDesk;
