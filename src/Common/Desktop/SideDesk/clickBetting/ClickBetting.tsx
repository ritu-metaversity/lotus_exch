import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import Switch from "react-switch";

const ClickBetting = () => {
  const [checked, setChecked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [editValue, setEditValue] = useState(0);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  const handleValueEdit = (val: number) => {
    setEditValue(val);
  };
  const handleShowInput = () => {
    setShowInput(!showInput);
  };
  const handleShowCancelbtn = () => {
    setShowCancel(!showCancel);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Box>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          offColor="#ffffff"
          onColor="#ffc629"
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
      <Box sx={{
        position:"relative",
        marginBottom:"10px"
      }}>
        {
          showCancel && <button
          className="btn-cancel-editing"
          onClick={()=>setShowCancel(false)}
        >
          Cancel
        </button>
        }
        
        <div className="one-click-settings-animation-wrap">
          {!checked && (
            <strong className="one-click-title" onClick={handleShowCancelbtn}>1 Click Betting</strong>
          )}
          <div className={`one-click-bet-form ${checked ? "active" : ""}`}>
            <div className="select-mode-fields">
              {!showInput ? (
                <ul className="settings-list">
                  {[1, 2, 3].map((data, id) => (
                    <li
                      className="setting-select-only"
                      onClick={() => handleValueEdit(id)}
                    >
                      <button
                        type="button"
                        className={`btn selected ${editValue === id ? "active_focus" : ""}`}
                      >
                        0
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="setting-input_main">
                  {[1, 2, 3].map((item) => (
                    <li className="setting-input-wrap ">
                      <input className="setting-input" type="number" />
                    </li>
                  ))}
                </ul>
              )}

              <button className="apl-btn-primary" onClick={handleShowInput}>
                {showInput ? "Save" : "Edit"}
              </button>
            </div>
           
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default ClickBetting;
