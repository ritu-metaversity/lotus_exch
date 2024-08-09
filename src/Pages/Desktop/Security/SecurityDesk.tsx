import React from "react";
import HeadingCasinoCesk from "../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './style.scss'

const SecurityDesk = () => {
  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk name="Security" />
      <Box sx={{ height: "99px" }}>
        <Typography sx={{
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}>Two-factor authentication</Typography>
        <Box>
          <div className="section_security ">
            <img
              alt="Qr Code"
              className="qr-code"
              src="https://api.qrserver.com/v1/create-qr-code/?data=otpauth://totp/goexch:risky69?secret=GZRVGIJISIULEZTT&issuer=goexch&algorithm=SHA1&digits=6&period=30&size=200x200&ecc=M&margin=0"
            />

            <div className="instructions">
              <ul className="steps-list">
                <li>
                  <b>Step 1:</b> Download Google Authenticator on your phone
                  directly from AppStore or GooglePlay.{" "}
                </li>
                <li className="services-links">
                  <Link
                    target="_blank"
                    to="https://apps.apple.com/ru/app/google-authenticator/id388497605"
                  >
                    <div
                      className="app-store-img"
                      style={{
                        backgroundImage:
                          'url("https://d2eb1cys5jgnub.cloudfront.net/m/tf/download-on-the-app-store.webp")',
                      }}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    to="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&gl=US"
                  >
                    <div
                      className="google-play-img"
                      style={{
                        backgroundImage:
                          'url("https://d2eb1cys5jgnub.cloudfront.net/m/tf/get-it-on-google-play.webp")',
                      }}
                    />
                  </Link>
                </li>
                <li>
                  <b>Step 2:</b> Setup account within Google Authenticator.{" "}
                </li>
                <li>
                  <b>Step 3:</b> Scan QR in Google Authenticator and enter the
                  verification code down below.{" "}
                </li>
              </ul>
              <Box>
                <input
                  placeholder="Verification code"
                  className="verification-code-input"
                />
              </Box>
              <Button className="apl-btn apl-btn-primary enable-btn">
                Enable Two-factor authentication
              </Button>
              <div className="error-message"></div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default SecurityDesk;
