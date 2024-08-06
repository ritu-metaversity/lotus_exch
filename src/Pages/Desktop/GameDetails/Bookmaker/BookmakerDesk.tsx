import { Box } from '@mui/material'
import React from 'react'
import { CiStar } from "react-icons/ci";

const BookmakerDesk = () => {
  return (
    <div className="market-group ">
    <div className="markets-rows ">
      <div>
        <Box className="ng-isolate-scope">
          <table className="market-listing-table apl-table">
            <thead>
              <tr>
                <th className="market-name title">
                  <span className="ng-binding">
                    <CiStar />
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
  </div>
  )
}

export default BookmakerDesk