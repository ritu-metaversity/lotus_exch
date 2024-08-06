import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditCasino from "./EditCasino";

const Stakessettings = () => {
  const [showInput, setShowInput] = useState(false);
  const [showStack, setShowStack] = useState(false);

  const handleEdit = () => {
    setShowInput(!showInput);
  };

  const handleShowSetting = () => {
    setShowStack(!showStack);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "40px",
          color: "#000000",
          backgroundColor: "#efefef",
          padding: "8px",
          boxSizing: "border-box",
          borderRadius: 0,
          marginTop: "12px",
        }}
        onClick={handleShowSetting}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Stakes settings
        </Typography>
        {showStack ? (
          <ArrowDropUpOutlinedIcon
            sx={{
              fontSize: "25px",
            }}
          />
        ) : (
          <ArrowDropDownOutlinedIcon
            sx={{
              fontSize: "25px",
            }}
          />
        )}
      </Box>
      {showStack && (
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
            }}
          >
            Edit Stakes
          </Typography>
          <Box>
            {showInput ? (
              <div>
                <div className="stakes-group-edit">
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-0"
                      value="6000"
                    />
                  </div>
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-1   "
                      value="30000"
                    />
                  </div>
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-2   "
                      value="60000"
                    />
                  </div>
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-2   "
                      value="150000"
                    />
                  </div>
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-2   "
                      value="210000"
                    />
                  </div>
                  <div className="stake-input">
                    <input
                      type="number"
                      className="stake stake-2   "
                      value="300000"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="stakes-group editStack">
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>6000</p>
                  </div>
                </div>
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>30000</p>
                  </div>
                </div>
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>60000</p>
                  </div>
                </div>
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>150000</p>
                  </div>
                </div>
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>210000</p>
                  </div>
                </div>
                <div className={`active readonly stake`}>
                  <div className="wrapper">
                    <p>300000</p>
                  </div>
                </div>
              </div>
            )}

            <div className="buttons_stack">
              <button className="button -primary" onClick={handleEdit}>
                {showInput ? "Save" : "Edit"}
              </button>
            </div>
          </Box>

          <EditCasino />
        </Box>
      )}
    </Box>
  );
};

export default Stakessettings;
