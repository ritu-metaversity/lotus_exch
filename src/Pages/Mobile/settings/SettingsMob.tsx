import React, { useState } from "react";
import "./style.scss";
import PageHeading from "../../../Component/PageHeading";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Switch from "react-switch";
import Authentication from "./Authentication/Authentication";
import StakeInput from "./StakeInput/StakeInput";
import Stakessettings from "./Stakessettings/Stakessettings";

const SettingsMob = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  const handleChange1 = (nextChecked: boolean) => {
    setChecked1(nextChecked);
  };
  return (
    <Box
      sx={{
        paddingInline: "16px",
        paddingTop: "12px",
      }}
    >
      <PageHeading name="Settings" />
      <Typography
        sx={{
          display: "block",
          clear: "both",
          fontWeight: 500,
          fontSize: "18px",
          color: "#000",
          fontFamily: "Lato,  sans-serif",
        }}
      >
        One Click Settings{" "}
        <InfoIcon
          sx={{
            color: "#ffc629",
            fontSize: "24px",
            marginLeft: "4px",
            verticalAlign: "middle",
          }}
        />
      </Typography>
      <Box
        sx={{
          background: "#ffffff",
          color: "#000000",
          border: "2px solid #ffc629",
          fontSize: "10px",
          padding: "8px",
          margin: "8px 0",
        }}
      >
        <Typography
          component="p"
          sx={{
            margin: "0px",
          }}
        >
          Using 1 Click Bet is easy.
        </Typography>
        <ul className="click_ul_list">
          <li>Enable 1 Click Betting.</li>
          <li>Edit your 1 Click stake values below.</li>
          <li>Choose your active stake.</li>
          <li>
            When 1 Click Betting is activated, <br /> choose different stakes by
            clicking on the red bar.
          </li>
          <li>
            When done with 1 Click Betting, <br /> turn off by tapping the
            toggle to off.
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          py: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Lato, sans-serif",
          }}
        >
          Two-factor authentication
        </Typography>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          offColor="#c4c4c4"
          onColor="#00a950"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                paddingRight: 2,
                color: "#666",
                fontWeight: 500,
              }}
            >
              OFF
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                paddingRight: 2,
                color: "#fff",
                fontWeight: 500,
              }}
            >
              ON
            </div>
          }
        />
      </Box>
      {checked && <Authentication />}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          py: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Lato, sans-serif",
          }}
        >
          Tap to turn on one click betting
        </Typography>
        <Switch
          onChange={handleChange1}
          checked={checked1}
          className="react-switch"
          offColor="#c4c4c4"
          onColor="#00a950"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                paddingRight: 2,
                color: "#666",
                fontWeight: 500,
              }}
            >
              OFF
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                paddingRight: 2,
                color: "#fff",
                fontWeight: 500,
              }}
            >
              ON
            </div>
          }
        />
      </Box>
      {checked1 && <StakeInput />}

      <Stakessettings />
    </Box>
  );
};

export default SettingsMob;
