import type { FC } from "react";
import React, { useEffect, useState } from "react";
import "./style.scss";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from "react-redux";
import { setBetData } from "../../../../utils/slice/betSlice";
import { useGetBetPlacedMutation } from "../../../../utils/Services/authService/sportApi";
import { Flip, toast } from "react-toastify";

interface Props {
  betData: any;
}

const BetplacedDesk: FC<Props> = ({ betData }) => {
  const dispatch = useDispatch();
  const [GetbetPlace, { data: betPlace }] = useGetBetPlacedMutation();
  const [stack, setStack] = useState(null);

  const handleStackValue = (val: number) => {
    setStack(val);
  };

  const handleBetPlace = (e) => {
    e.preventDefault();
    GetbetPlace({ ...betData, stake: stack });
  };

  useEffect(() => {
    if (betPlace?.status) {
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
  }, [betPlace]);
  return (
    <form className="bet_slip_desk">
      <div>
        <div className="betslipContent">
          <ul className="fail-messages generic-error "></ul>
          <div>
            <h6
              className={`bet-type-info  ${betData?.isBack == 0 ? "back" : "lay"}`}
            >
              {betData?.isBack == 0 ? "Back" : "Lay"}
            </h6>
            <ul className="market-list">
              <li ng-repeat="event in bets[side + 's'].collection | orderMap:'updatedAt':'desc'">
                <a className="event-name" href="#/display/EVENT/4/33455059">
                  <span className="ng-binding ng-isolate-scope">
                    {betData?.matchName}
                  </span>
                </a>
                <ul className="bets-list">
                  <li>
                    <div
                      className={`bet ${betData?.isBack == 0 ? "back" : "lay"}`}
                    >
                      <div className="bet-header">
                        <div className="section-name-label ng-scope">
                          <span className="selection-name ng-binding ng-scope">
                            {betData?.runnerName}
                          </span>
                          <span className="pre-match-label ng-binding ng-scope">
                            Pre-match Only
                          </span>
                        </div>
                        <div className="max-market ng-binding ng-scope">
                          Max Market: {betData?.maxStack}
                        </div>
                      </div>
                      <div className="bet-fields">
                        <div className="odds-field session-runs placeholder-wrapper ng-isolate-scope">
                          <div className="placeholder ng-binding" />
                          <div ng-transclude="">
                            <div className="info-field runs-label ng-scope">
                              <div className="ng-binding ng-scope">
                                Odds (H-J)
                              </div>
                              <div className="line-value ng-binding ng-scope">
                                {betData?.price}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="betslip__input placeholder-wrapper ng-isolate-scope">
                          <div className="placeholder ng-binding" />
                          <div ng-transclude="">
                            <input
                              className="ng-invalid "
                              step="0.01"
                              type="text"
                              value={stack}
                              onChange={(e) => setStack(e.target.value)}
                            />

                            <div className="betslip__placeholder-label ng-binding ng-scope">
                              Stake
                            </div>
                          </div>
                        </div>
                        <div className="info-field ng-scope">
                          <span className="title ng-binding">Profit</span>
                          <span className="value ng-binding">0.00</span>
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
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                            onClick={() => handleStackValue(100)}
                          >
                            100
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                            onClick={() => handleStackValue(500)}
                          >
                            +500
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
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
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                            onClick={() => handleStackValue(2000)}
                          >
                            +2,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                            onClick={() => handleStackValue(5000)}
                          >
                            +5,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
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
          <p className="summary-info ng-binding">Liability: 0.00</p>
          <div className="summary-buttons _align-right ng-scope">
            <button
              className={stack > 0 ? "btn_placebet" : "btn_btn_primary"}
              onClick={(e) => handleBetPlace(e)}
            >
              Place bets
            </button>
            <button
              className="apl-btn-remove"
              type="button"
              onClick={() => dispatch(setBetData(null))}
            >
              Remove All
            </button>
          </div>
          <div className="confirmation-checkbox-wrapper">
            <label className="confirmation-checkbox ng-binding">
              <input className="check_box" type="checkbox" />
              Confirm bets before placing
            </label>
          </div>
          <div className="confirmation">
            <label className="confirmation-checkbox">
              <input className="check_box" type="checkbox" />
              Auto accept better odds
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BetplacedDesk;
