import { useEffect, useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import logo from "../../img/logo.svg";
import "./Login.scss";
import React from "react";
import { useLoginMutation } from "../../utils/Services/authService/authApi";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setLoginData } from "../../utils/slice/loginSlice";
import { useNavigate } from "react-router-dom";

const FormBlock = styled(Box)(({ theme }) => ({
  marginTop: "18px",
  width: "100%",
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"

};

interface Props {
  handleClose: () => void,
  locationData: any
}

function LoginModals({ handleClose, locationData }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [getLogin, { data: loginData }] = useLoginMutation();


  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (locationData)
      getLogin({
        username,
        password,
        device_info: "Mobile",
        browser_info: "Android | Chrome",
        dom: "/",
        city: locationData?.city,
        region: locationData?.region,
        org: locationData?.org,
      })
  };


  useEffect(() => {
    if (loginData) {
      localStorage.setItem("token", loginData?.token)
      dispatch(setLoginData({ loginData, isLogin: true }))
      if(isMobile){

        nav('/m/');
      }else{
        nav('/d/home');
      }
      handleClose();
    }
  }, [loginData])


  return (
    <Box sx={{ ...style, width: isMobile ? "94%" : 375 }}>
      <form onSubmit={handleSubmit} noValidate className="login-form">
        <Close onClick={handleClose} sx={{
          position: "absolute",
          color: "#ddd",
          right: "6px",
          top: "9px",
          cursor: "pointer"
        }
        }
        />
        <img
          src={logo}
          alt="logo"
          className="logo_login"
          // height={55}
          style={{
            
          }}
        />
        <FormBlock>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            type="text"
            placeholder="User Name"
            className="input-login"
          />
          <div className="pass_div">
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-password ng-untouched ng-pristine ng-invalid"
              ng-reflect-name="password"
              autoComplete="true"
              type={showPassword ? "text" : "password"}
            />
            <button
              type="button"
              className="show-password icon-hide-password"
              ng-reflect-ng-class="icon-hide-password"
              onClick={handleShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!username || !password}
            className="btn-login"
            sx={{
              fontSize: "16px",
              height: "40px",
              borderRadius: "4px",
              backgroundColor: "#ffc629",
              color: "#fff",
              borderTop: "none",
              borderLeft: "none",
              borderBottom: " 2px solid #b28f0f",
              borderRight: " 2px solid #b28f0f",
              "&:hover": {
                backgroundColor: "#ffc629",
                color: "#fff",
              },
              "&:active": {
                backgroundColor: "#ffc629",
                color: "#fff",
              },
              "&:disabled": {
                backgroundColor: "#777777",
                color: "#fff",
                borderBottom: "2px solid #777777",
                borderRight: "2px solid #777777",
                cursor: "default",
              },
            }}
          >
            Login
          </Button>
        </FormBlock>
      </form>
    </Box>
  );
}

export default LoginModals;
