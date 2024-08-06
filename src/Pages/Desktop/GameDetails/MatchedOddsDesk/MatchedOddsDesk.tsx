import { Box } from "@mui/material";
import React from "react";
import { CiStar } from "react-icons/ci";
import stopatch from "../../../../img/stop_watch.png";
import zero from "../../../../img/zero.png";

const MatchedOddsDesk = () => {
  return (
    <Box className="ng-isolate-scope">
      <table className="market-listing-table apl-table">
        <thead>
          <tr>
            <th className="market-name title">
              <span className="ng-binding">
                <CiStar />
                Match 0dds
              </span>
              <span className="market-indicators-container">
                <Box className="market-indicators" ng-version="14.3.0">
                 
                  <div className="icon-box">
                    <img src={zero} alt="" className="icon icon-going" />
                    <div className="popover">Going in-play</div>
                  </div>
                  <div className="icon-box">
                    <img src={stopatch} alt="" className="icon icon-going" />
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
              <div className="event-name ng-binding">London Spirit Women</div>
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
              <div className="event-name ng-binding">Welsh Fire Women</div>
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
  );
};

export default MatchedOddsDesk;
