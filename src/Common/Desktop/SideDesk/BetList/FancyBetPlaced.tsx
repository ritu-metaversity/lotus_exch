import type { FC } from "react";
import React, { useEffect, useState } from "react";
import "./style.scss";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from "react-redux";
import { setBetData } from "../../../../utils/slice/betSlice";
import { useGetFancyPlacedMutation } from "../../../../utils/Services/authService/sportApi";
import { Flip, toast } from "react-toastify";
import { setFancyBetData } from "../../../../utils/slice/fancySlice";


interface Props {
  betData: any,
  trigger: any
}

const FancyBetPlaced: FC<Props> = ({ betData, trigger }) => {
  const dispatch = useDispatch();
  const [GetbetPlace, { data: betPlace, isLoading }] = useGetFancyPlacedMutation()
  const [stack, setStack] = useState(null)

  const handleStackValue = (val: number) => {
    setStack(val)
  }


  console.log(betData, "betDatabetDatabetData")

  const handleBetPlace = (e) => {
    e.preventDefault();
    GetbetPlace({ ...betData, stake: stack })

  }

  useEffect(() => {
    if (betPlace?.status) {
      trigger();
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
    } else {
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
  }, [betPlace, trigger]);

  return (
    <form
      className="bet_slip_desk"
      name="betslipForm"
    >
      <div  >
        <div className="betslipContent">
          <ul
            className="fail-messages generic-error "

          ></ul>
          <div

          >
            <h6 className={`bet-type-info  ${betData?.isBack == 0 ? "back" : "lay"}`}>{betData?.isBack == 0 ? "Back" : "Lay"}</h6>
            <ul className="market-list">
              <li

                ng-repeat="event in bets[side + 's'].collection | orderMap:'updatedAt':'desc'"
              >
                <a className="event-name" href="#/display/EVENT/4/33455059">
                  <span className=" ng-isolate-scope">
                    {betData?.matchName}
                  </span>
                </a>
                <ul className="bets-list">
                  <li >
                    <div className={`bet ${betData?.isBack == 0 ? "back" : "lay"}`}>
                      <div className="bet-header">
                        <div className="section-name-label ">
                          <span className="selection-name  ">
                            {betData?.runnerName}
                          </span>
                          <span className="pre-match-label  ">
                            Pre-match Only
                          </span>
                        </div>
                        <div className="max-market  ">
                          Max Market: {betData?.maxStack}
                        </div>
                      </div>
                      <div className="bet-fields">
                        <div className="odds-field session-runs placeholder-wrapper ng-isolate-scope">
                          <div className="placeholder " />
                          <div ng-transclude="">
                            <div className="info-field runs-label ">
                              <div className=" ">
                                Odds (H-J)
                              </div>
                              <div className="line-value  ">
                                {betData?.price}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="betslip__input placeholder-wrapper ng-isolate-scope">
                          <div className="placeholder " />
                          <div ng-transclude="">
                            <input
                              className="ng-invalid "
                              step="0.01"
                              type="text"
                              value={stack}
                              onChange={(e) => setStack(e.target.value)}
                            />

                            <div className="betslip__placeholder-label  ">
                              Stake
                            </div>
                          </div>
                        </div>
                        <div className="info-field ">
                          <span className="title ">
                            Profit
                          </span>
                          <span className="value ">0.00</span>
                        </div>
                        <div className="control-fields">
                          <button
                            className="apl-btn apl-btn-mini apl-btn-remove"
                            type="button"
                          >
                            {/* <i className="icon-remove" /> */}
                          </button>
                        </div>
                      </div>

                      <div className="six-stakes back">
                        <div className="first-row">
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(100)}

                          >
                            100
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(500)}
                          >
                            +500
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(1000)}
                          >
                            +1,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt"
                            type="button"
                            onClick={() => handleStackValue(betData?.maxStack)}
                          >
                            MAX
                          </button>
                        </div>
                        <div className="second-row">
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(2000)}
                          >
                            +2,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(5000)}
                          >
                            +5,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt  "
                            type="button"
                            onClick={() => handleStackValue(10000)}
                          >
                            +10,000
                          </button>
                          <button
                            className="clear_btn"
                            type="button"
                            onClick={() => handleStackValue(0)}
                          >
                            Clear
                          </button>
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p className="summary-info ">Liability: 0.00</p>
          <div className="summary-buttons _align-right ">
            <button className={stack > 0 ? "btn_placebet" : "btn_btn_primary"} onClick={(e) => handleBetPlace(e)}>
              Place bets
            </button>
            <button className="apl-btn-remove" type="button" onClick={() => dispatch(setFancyBetData(null))}>
              Remove All
            </button>
          </div>
          <div className="confirmation-checkbox-wrapper">
            <label className="confirmation-checkbox ">
              <input
                className="check_box"
                type="checkbox"
              />
              Confirm bets before placing
            </label>
          </div>
          <div className="confirmation">
            <label className="confirmation-checkbox">
              <input
                className="check_box"
                type="checkbox"
              />
              Auto accept better odds
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FancyBetPlaced;
