import { Box, Button } from "@mui/material";
import "./style.scss";
import Switch from "react-switch";
import { useState } from "react";

const Betslip = () => {
  const [checked, setChecked] = useState(false);
  const [checkedSec, setCheckedSec] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  const handleChangeSec = (nextChecked: boolean) => {
    setCheckedSec(nextChecked);
  };
  return (
    <Box className="single-bet lay">
      <div className="bets-group">
        <div className="event-group lay">
          <Box>
            <form className="bet ng-untouched ng-pristine ng-invalid">
              <div className="controls">
                <div className="odds-group">
                  <div className="odds-group-title">
                    <label className="label">Odds (H-J)</label>
                  </div>
                  <div className="odds-group-value">
                    <div className="odds lay">
                      <label className="pre-match-label">Pre-match Only</label>
                      <span>162</span>
                    </div>
                  </div>
                </div>
                <div className="stake-group">
                  <div className="stake-title">
                    <label className="label">Stake</label>
                    <label className="limit-label">
                      Max. Mkt:{" "}
                      <span className="info-stake-value"> 500,000+ </span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="text-input input-stake ng-untouched ng-pristine ng-invalid"
                  />
                  <div className="stake-bottom">
                    <label className="limit-label">
                      Max. Bet:{" "}
                      <span className="info-stake-value"> 38037 </span>
                    </label>

                    <label className="limit-label">
                      Min. Bet: <span className="info-stake-value"> 100 </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="stake-buttons-box">
                <Button className="stake-button">+ 6000</Button>
                <Button className="stake-button">+ 30000</Button>
                <Button className="stake-button">+ 60000</Button>
                <Button className="stake-button">+ 150000</Button>
                <Button className="stake-button">+ 210000</Button>
                <Button className="stake-button">+ 300000</Button>
                <Button className="stake-button max">Max</Button>
              </div>
            </form>
          </Box>
        </div>
      </div>

      <div className="confirmation-buttons">
        <Button className="button cancel -middle -secondary">Remove</Button>
        <Button
          type="submit"
          disabled
          className="button submit -middle -primary"
        >
          <span>Place</span>
          <span className="btn-pnl">Liability: 0.00</span>
        </Button>
      </div>
      <Box className="preferences">
        <div className="confirmation-control">
          Confirm bet before placing
          <Box className="toggle">
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
                    color: "#666666",
                    fontWeight:600,
                    paddingRight: 2,
                    textTransform:"uppercase",
                    marginTop:"-2px"
                  }}
                >
                  Off
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
                    color: "#fff",
                    fontWeight:600,
                    textTransform:"uppercase",
                    marginTop:"-2px"
                  }}
                >
                  ON
                </div>
              }
            />
          </Box>
        </div>
        <div className="confirmation-control">
          Auto accept better odds
          <Box className="toggle">
            <Switch
              onChange={handleChangeSec}
              checked={checkedSec}
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
                    color: "#666666",
                    fontWeight:600,
                    paddingRight: 2,
                    textTransform:"uppercase",
                    marginTop:"-2px"
                  }}
                >
                  Off
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
                    color: "#fff",
                    fontWeight:600,
                    textTransform:"uppercase",
                    marginTop:"-2px"
                  }}
                >
                  ON
                </div>
              }
            />
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default Betslip;
