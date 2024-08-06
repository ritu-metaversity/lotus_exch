import React from "react";
import "./style.scss";

const BetplacedDesk = () => {
  return (
    <form
      className="bet_slip_desk"
      name="betslipForm"
    >
      <div className="ng-scope" ng-if="isActive">
        <div className="betslipContent">
          <ul
            className="fail-messages generic-error ng-hide"
            ng-show="genericError"
          ></ul>
          <div
            className="ng-scope"
            ng-if="bets[side + 's'].__notEmpty === true"
            ng-repeat="side in ['back', 'lay']"
          >
            <h6 className="bet-type-info ng-scope ng-binding back">Back</h6>
            <ul className="market-list">
              <li
                className="ng-scope"
                ng-repeat="event in bets[side + 's'].collection | orderMap:'updatedAt':'desc'"
              >
                <a className="event-name" href="#/display/EVENT/4/33455059">
                  <span className="ng-binding ng-isolate-scope">
                    Warwickshire v Surrey
                  </span>
                </a>
                <ul className="bets-list">
                  <li className="ng-scope">
                    <div className="bet back">
                      <div className="bet-header">
                        <div className="section-name-label ng-scope">
                          <span className="selection-name ng-binding ng-scope">
                            Surrey
                          </span>
                          <span className="pre-match-label ng-binding ng-scope">
                            Pre-match Only
                          </span>
                        </div>
                        <div className="max-market ng-binding ng-scope">
                          Max Market: 770,250
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
                                95
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="betslip__input placeholder-wrapper ng-isolate-scope">
                          <div className="placeholder ng-binding" />
                          <div ng-transclude="">
                            <input
                              className="-qa-bet-stake-input stakeRef_0 ng-empty ng-invalid ng-invalid-apl-valid-credit ng-valid-apl-max apl-form-invalid ng-valid-required"
                              step="0.01"
                              type="text"
                            />
                            <div className="betslip__placeholder ng-scope">
                              <span className="ng-binding ng-scope">
                                Min Bet: 100
                              </span>
                              <span className="ng-pristine ng-untouched ng-valid ng-binding ng-scope ng-not-empty">
                                Max: 77025.00
                              </span>
                            </div>
                            <div className="betslip__placeholder-label ng-binding ng-scope">
                              Stake
                            </div>
                          </div>
                        </div>
                        <div className="info-field ng-scope">
                          <span className="title ng-scope ng-binding">
                            Profit
                          </span>
                          <span className="value ng-binding">0.00</span>
                        </div>
                        <div className="control-fields">
                          <button
                            className="apl-btn apl-btn-mini apl-btn-remove"
                            type="button"
                          >
                            <i className="icon-remove" />
                          </button>
                        </div>
                      </div>
                      {/* <div className="fail-messages ng-hide">
                        <div className="error ng-scope">
                          Stake is exceeded max amount
                        </div>
                      </div> */}
                      <div className="six-stakes ng-scope back">
                        <div className="first-row">
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +6,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +30,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +60,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt"
                            type="button"
                          >
                            MAX
                          </button>
                        </div>
                        <div className="second-row">
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +150,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +210,000
                          </button>
                          <button
                            className="apl-btn apl-btn-secondary-alt ng-binding ng-scope"
                            type="button"
                          >
                            +300,000
                          </button>
                          <button
                            className="clear_btn"
                            type="button"
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
            <button className="btn_btn_primary" type="submit">
              Place bets
            </button>
            <button className="apl-btn-remove" type="button">
              Remove All
            </button>
          </div>
          <div className="confirmation-checkbox-wrapper">
            <label className="confirmation-checkbox ng-binding">
              <input
                className="check_box"
                type="checkbox"
              />
              Confirm bets before placing
            </label>
          </div>
          <div className="confirmation-ng-scope">
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

export default BetplacedDesk;
