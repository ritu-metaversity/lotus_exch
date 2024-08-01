import { Box } from "@mui/material";
import "./style.scss";
import GameDetailsHeadDesk from "./GameDetailsHead/GameDetailsHeadDesk";
import '../../Mobile/Gamedetails/Matchodds/style.scss'
import React from "react";

const GameDetailsDesk = () => {
  return (
    <div className="group-event">
      <GameDetailsHeadDesk />
      <Box className="ng-isolate-scope">
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div>
                  <Box className="ng-isolate-scope">
                    <table className="market-listing-table apl-table">
                      <thead>
                        <tr>
                          <th className="market-name title">
                            <span className="ng-binding">
                              <i />
                              Match 0dds
                            </span>
                            <span className="market-indicators-container">
                              <Box
                                className="market-indicators"
                                ng-version="14.3.0"
                              >
                                <div className="icon-box">
                                  <i className="icon icon-going" />
                                  <div className="popover">Going in-play</div>
                                </div>
                                <div className="bet-delay">
                                  <i className="icon-stopwatch" />
                                  <span className="label">5s</span>
                                </div>
                              </Box>
                            </span>
                          </th>
                          <th className="back " colSpan={2}>
                            <div className="two-cells-header" />
                          </th>
                          <th className="back ">
                            <div className="one-cells-header ">Back</div>
                          </th>
                          <th
                            className="lay "
                            ng-if="!vm.isSuspended && !isBetSideEmpty('lay')"
                          >
                            <div className="one-cells-header ">Lay</div>
                          </th>
                          <th
                            className="lay "
                            colSpan={2}
                            ng-if="!vm.isSuspended && !vm.isMatchOddsSportsBookFootball() && !isBetSideEmpty('lay')"
                          >
                            <div className="two-cells-header" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">
                              London Spirit Women
                            </div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.22</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.23</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.24</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.25</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.26</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">1.27</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">
                              Welsh Fire Women
                            </div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">4.70</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">4.80</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">5.00</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">5.10</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">5.20</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">5.30</strong>
                              <div className="size">
                                <span className="ng-binding">500,000+</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div>
                  <Box className="ng-isolate-scope">
                    <table className="market-listing-table apl-table">
                      <thead>
                        <tr>
                          <th className="market-name title">
                            <span className="ng-binding">
                              <i />
                              Match Odds (Bookmaker)
                            </span>
                            <span className="market-indicators-container">
                              <Box
                                className="market-indicators"
                                ng-version="14.3.0"
                              >
                                <div className="icon-box">
                                  <i className="icon icon-fast" />
                                  <div className="popover">
                                    Faster bet acceptance
                                  </div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-zero" />
                                  <div className="popover">No commission</div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-going" />
                                  <div className="popover">Going in-play</div>
                                </div>
                              </Box>
                            </span>
                          </th>
                          <th className="back " colSpan={2}>
                            <div className="two-cells-header" />
                          </th>
                          <th className="back ">
                            <div className="one-cells-header ">Back</div>
                          </th>
                          <th
                            className="lay "
                            ng-if="!vm.isSuspended && !isBetSideEmpty('lay')"
                          >
                            <div className="one-cells-header ">Lay</div>
                          </th>
                          <th className="lay " colSpan={2}>
                            <div className="two-cells-header" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">
                              London Spirit Women
                            </div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">23</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">25</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">
                              Welsh Fire Women
                            </div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">400</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">435</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div></div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div>
                  <Box className="ng-isolate-scope">
                    <table
                      className="market-listing-table apl-table"
                      ng-className="{'hide-border': vm.isPinnacle && !vm.isMatchOddsSportsBookFootball}"
                    >
                      <thead>
                        <tr>
                          <th className="market-name title">
                            <span className="ng-binding">
                              <i />1 to 5 Ball Runs Odd/Even WFW
                            </span>
                            <span className="market-indicators-container">
                              <Box
                                className="market-indicators"
                                ng-version="14.3.0"
                              >
                                <div className="icon-box">
                                  <i className="icon icon-fast" />
                                  <div className="popover">
                                    Faster bet acceptance
                                  </div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-zero" />
                                  <div className="popover">No commission</div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-going" />
                                  <div className="popover">Going in-play</div>
                                </div>
                              </Box>
                            </span>
                          </th>
                          <th className="back " colSpan={2}>
                            <div className="two-cells-header" />
                          </th>
                          <th className="back ">
                            <div className="one-cells-header ">Back</div>
                          </th>
                          <th
                            className="lay "
                            ng-if="!vm.isSuspended && !isBetSideEmpty('lay')"
                          >
                            <div className="one-cells-header ">Lay</div>
                          </th>
                          <th
                            className="lay "
                            colSpan={2}
                            ng-if="!vm.isSuspended && !vm.isMatchOddsSportsBookFootball() && !isBetSideEmpty('lay')"
                          >
                            <div className="two-cells-header" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">Odd</div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">90</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                          <td className="event-row -with-pnl">
                            <div className="event-name ng-binding">Even</div>
                            <Box className="ng-isolate-scope">
                              <div
                                className="selection-pnl"
                                ng-className="{'racing-pnl': vm.isRacing}"
                                ng-switch="vm.isDiscrete"
                              >
                                <span ng-switch-default=""></span>
                              </div>
                            </Box>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="back show-size">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding">90</strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                          <td className="lay unhighlighted empty-price show-size betting-disabled">
                            <div className="bet-button-wrapper">
                              <strong className="odds ng-binding"></strong>
                              <div className="size">
                                <span className="ng-binding"></span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div>
                  <Box className="ng-isolate-scope">
                    <div>
                      <table className="market-listing-table apl-table">
                        <thead ng-if="vm.isFirstMarket">
                          <tr>
                            <th className="market-name">
                              <Box ng-version="14.3.0">
                                <div className="icon-box">
                                  <i className="icon icon-fast" />
                                  <div className="popover">
                                    Faster bet acceptance
                                  </div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-zero" />
                                  <div className="popover">No commission</div>
                                </div>
                                <div className="icon-box">
                                  <i className="icon icon-going" />
                                  <div className="popover">Going in-play</div>
                                </div>
                              </Box>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="market-name">
                              <div className="container">
                                <div className="event-name ng-binding">
                                  Tied Match?
                                </div>
                                <Box
                                  className="ng-isolate-scope"
                                  market-betting-type="vm.market.btype"
                                  market-type="vm.market.mtype"
                                  runner-id="vm.market.runners[0].id"
                                >
                                  <div
                                    className="selection-pnl"
                                    ng-className="{'racing-pnl': vm.isRacing}"
                                    ng-switch="vm.isDiscrete"
                                  >
                                    <span ng-switch-default=""></span>
                                  </div>
                                </Box>
                              </div>
                            </td>
                            <td
                              className="main-container"
                              colSpan={1}
                              ng-className="vm.getMainContainerClass()"
                            >
                              <div ng-if="vm.market.status !== 'SUSPENDED'">
                                <div className="odds-container">
                                  <table className="market-listing-table apl-table">
                                    <tbody>
                                      <tr ng-if="vm.isFancyProvider(vm.market.providerId) || vm.isArtemisProvider(vm.market.providerId)">
                                        <td
                                          className="odds-placeholder"
                                          colSpan={2}
                                        ></td>
                                        <td className="lay show-size betting-disabled">
                                          <div className="bet-button-wrapper">
                                            <strong className="odds ng-binding"></strong>
                                            <div className="size">
                                              <span className="ng-binding"></span>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="back show-size">
                                          <div className="bet-button-wrapper">
                                            <strong className="odds ng-binding">
                                              2,500
                                            </strong>
                                            <div className="size">
                                              <span className="ng-binding"></span>
                                            </div>
                                          </div>
                                        </td>
                                        <td
                                          className="odds-placeholder "
                                          colSpan={2}
                                          ng-if="!isPinnacleLineMarket"
                                        >
                                          <span
                                            className="max-liability ng-binding "
                                            ng-if="vm.maxPerMarket > 0"
                                          >
                                            Max Mkt: 3,081,000
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="clear" />
                    </div>
                  </Box>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
        <div className="market-group ">
          <div>
            <Box className="ng-isolate-scope">
              <div className="markets-rows ">
                <div></div>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default GameDetailsDesk;
