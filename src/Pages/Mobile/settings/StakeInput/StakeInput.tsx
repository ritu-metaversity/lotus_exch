import { Box } from "@mui/material";
import React, { useState } from "react";
import "../Authentication/style.scss";

const StakeInput = () => {
  const [showInput, setShowInput] = useState(false);
  const [active, setActive] = useState(0);

  const handleEdit = () => {
    setShowInput(!showInput);
  };

  const handleActive = (val: number) => {
    setActive(val);
  };

  return (
    <Box>
      {showInput ? (
        <div className="ng-touched  ">
          <div className="stakes-group-edit">
            <div className="stake-input">
              <input type="number" className="stake stake-0" value="0" />
            </div>
            <div className="stake-input">
              <input type="number" className="stake stake-1   " value="0" />
            </div>
            <div className="stake-input">
              <input type="number" className="stake stake-2   " value="0" />
            </div>
          </div>
        </div>
      ) : (
        <div className="stakes-group">
          <div
            className={`${active === 0 ? "active" : ""} readonly stake`}
            onClick={() => handleActive(0)}
          >
            <div className="wrapper">
              <p>0</p>
              {active === 0 && <span>Active Stake</span>}
            </div>
          </div>
          <div
            className={`${active === 1 ? "active" : ""} readonly stake`}
            onClick={() => handleActive(1)}
          >
            <div className="wrapper">
              <p>0</p>
              {active === 1 && <span>Active Stake</span>}
            </div>
          </div>
          <div
            className={`${active === 2 ? "active" : ""} readonly stake`}
            onClick={() => handleActive(2)}
          >
            <div className="wrapper">
              <p>0</p>
              {active === 2 && <span>Active Stake</span>}
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
  );
};

export default StakeInput;
