import { Box } from "@mui/material";
import "./style.scss";
import GameDetailsHeadDesk from "./GameDetailsHead/GameDetailsHeadDesk";
import React from "react";
import MatchedOddsDesk from "./MatchedOddsDesk/MatchedOddsDesk";
import BookmakerDesk from "./Bookmaker/BookmakerDesk";
import { CiStar } from "react-icons/ci";
import FancyDesk from "./FancyDesk/FancyDesk";

const GameDetailsDesk = () => {
  return (
    <div className="group-event">
      <GameDetailsHeadDesk />
      <Box className="ng-isolate-scope">
        <div className="market-group ">
          <div className="markets-rows ">
            <div>
              <MatchedOddsDesk />
            </div>
          </div>
        </div>
       <BookmakerDesk />
       
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
                              <CiStar /> 1 to 5 Ball Runs Odd/Even WFW
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
        
        <FancyDesk />
        
       
      </Box>
    </div>
  );
};

export default GameDetailsDesk;
