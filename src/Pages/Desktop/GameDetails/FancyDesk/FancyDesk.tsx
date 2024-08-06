import { Box } from "@mui/material";
import React from "react";
import FancyTabs from "./FancyTabs";

const FancyDesk = () => {
  return (
    <div className="market-group fancy_group">
     <FancyTabs />
          <div className="markets-rows ">
            <div className="">
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <thead className="">
                      <tr>
                        <th className="market-name">
                          <Box>
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
                              <i className="icon icon-pre-match" />
                              <div className="popover">
                                Pre-match betting only
                              </div>
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
                              Ball 0.1 Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={6}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          1
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            330
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          1
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            250
                                          </span>
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
                                        Max Mkt: 385,125
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Ball 0.1 Runs SUR
                            </div>
                            <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          1
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            340
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          1
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            260
                                          </span>
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
                                        Max Mkt: 385,125
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
                </div>
              </Box>
            </div>
            
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              50 Over Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          278
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          282
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              50 Over Runs SUR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          277
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          281
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              1 Over Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          3
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          4
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              1 Over Runs SUR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          3
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          4
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            ></div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              10 Over Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          50
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          52
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              10 Over Runs SUR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          48
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          50
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 1,540,500
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Rob Yates Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          30
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            120
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          30
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">90</span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Ed Barnard Runs WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          31
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            120
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          31
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">90</span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Dom Sibley Runs SUR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          26
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            120
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          26
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">90</span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Ryan Patel Runs SUR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          27
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            120
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          27
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">90</span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Rob Yates Boundaries WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          4
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          5
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
            <div
              className=""
              
            >
              <Box className=" ">
                <div>
                  <table className="market-listing-table apl-table">
                    <tbody>
                      <tr>
                        <td className="market-name">
                          <div className="container">
                            <div className="event-name ng-binding">
                              Ed Barnard Boundaries WAR
                            </div>
                           <img src="/imges/ladder-black.png" alt="" width={"8px"}/>
                            <Box className="">
                              <div className="selection-pnl">
                                <span className=""></span>
                              </div>
                            </Box>
                          </div>
                        </td>
                        <td className="main-container" colSpan={1}>
                          <div className="">
                            <div className="odds-container">
                              <table className="market-listing-table apl-table">
                                <tbody>
                                  <tr className="">
                                    <td
                                      className="odds-placeholder"
                                      colSpan={2}
                                    ></td>
                                    <td className="lay show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          4
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="back show-size">
                                      <div className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          5
                                        </strong>
                                        <div className="size">
                                          <span className="ng-binding">
                                            100
                                          </span>
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
                                        Max Mkt: 770,250
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
                  <div
                    className="ladder-component-container "
                    ng-className="{'visible': vm.isLadderVisible}"
                  >
                    <Box className="">
                      <div className="ladder-container">
                        <div
                          className="ladder-loader "
                          ng-if="vm.loading"
                        ></div>
                      </div>
                    </Box>
                  </div>
                  <div className="clear" />
                </div>
              </Box>
            </div>
          </div>
      <hr
        className="line-market-separator "
       
      />
    </div>
  );
};

export default FancyDesk;
