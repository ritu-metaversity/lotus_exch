/* eslint-disable @typescript-eslint/no-restricted-imports */
import { Box, Button } from "@mui/material";
import "../Betslip/style.scss";
import Switch from "react-switch";
import type { FC} from "react";
import { useEffect, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { useGetFancyPlacedMutation } from "../../../../utils/Services/authService/sportApi";
import { Flip, toast } from "react-toastify";
import { setBetData } from "../../../../utils/slice/betSlice";
import { setFancyBetData } from "../../../../utils/slice/fancySlice";

interface Props{
  betData: any,
//   getBalance:any
}

const FancyBetSlip:FC<Props> = ({betData}) => {
  const [checked, setChecked] = useState(false);
  const [checkedSec, setCheckedSec] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };
  const handleChangeSec = (nextChecked: boolean) => {
    setCheckedSec(nextChecked);
  };

  const dispatch = useDispatch();
  const [GetbetPlace, { data: betPlace, isLoading }] = useGetFancyPlacedMutation()
  const [stack, setStack] = useState(null)

  const handleStackValue = (val:number)=>{
    setStack(val)
  }


  const handleBetPlace = (e)=>{
    e.preventDefault();
    GetbetPlace({...betData, stake:stack})

  }


  useEffect(() => {
    if (betPlace?.status) {
    //   getBalance()
      toast.success(betPlace?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
      dispatch(setBetData(null))
    }else{
      toast.error(betPlace?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  }, [betPlace]);


  return (
    <Box className={`single-bet ${betData?.isBack == 0?"back1":"lay"}`}>
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
                    <div className={`odds ${betData?.isBack == 0?"back":"lay"}`}>
                      {/* <label className="pre-match-label">Pre-match Only</label> */}
                      <span>{betData?.price}</span>
                    </div>
                  </div>
                </div>
                <div className="stake-group">
                  <div className="stake-title">
                    <label className="label">Stake</label>
                    <label className="limit-label">
                      Max. Mkt:{" "}
                      <span className="info-stake-value"> {betData?.maxStack} </span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="text-input input-stake ng-untouched ng-pristine ng-invalid"
                    value={stack}
                    onChange={(e)=>setStack(e.target.value)}
                  />
                  <div className="stake-bottom">
                    <label className="limit-label">
                      Max. Bet:{" "}
                      <span className="info-stake-value"> {betData?.maxStack} </span>
                    </label>

                    <label className="limit-label">
                      Min. Bet: <span className="info-stake-value"> {betData?.minStack} </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="stake-buttons-box">
                <Button onClick={()=>handleStackValue(100)} className="stake-button">+ 100</Button>
                <Button onClick={()=>handleStackValue(500)} className="stake-button">+ 500</Button>
                <Button onClick={()=>handleStackValue(1000)} className="stake-button">+ 1000</Button>
                <Button onClick={()=>handleStackValue(2000)} className="stake-button">+ 2000</Button>
                <Button onClick={()=>handleStackValue(5000)} className="stake-button">+ 5000</Button>
                <Button onClick={()=>handleStackValue(10000)} className="stake-button">+ 10000</Button>
                <Button onClick={()=>handleStackValue(betData?.maxStack)} className="stake-button max">Max</Button>
              </div>
            </form>
          </Box>
        </div>
      </div>

      <div className="confirmation-buttons">
        <Button className="button cancel -middle -secondary" onClick={()=>dispatch(setFancyBetData(null))}>Remove</Button>
        <Button
          type="submit"
          disabled={stack  == 0 || stack == null}
          className="button submit -middle -primary"
          onClick={handleBetPlace}
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

export default FancyBetSlip;
