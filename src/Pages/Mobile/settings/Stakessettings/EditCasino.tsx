import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const EditCasino = () => {
  const [showInput, setShowInput] = useState(false);

  const handleEdit = () => {
    setShowInput(!showInput);
  };

  return (
    <Box sx={{
        my:2
    }}>
      <Box>
        <Typography
          sx={{
            fontSize: "18px",
          }}
        >
          Edit Casino Exchange Games Stakes
        </Typography>
        <Box>
          {showInput ? (
            <div>
              <div className="stakes-group-edit">
                <div className="stake-input">
                  <input type="number" className="stake stake-0" value="6000" />
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
            </div>
          )}

          <div className="buttons_stack">
            <button className="button -primary" onClick={handleEdit}>
              {showInput ? "Save" : "Edit"}
            </button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default EditCasino;
