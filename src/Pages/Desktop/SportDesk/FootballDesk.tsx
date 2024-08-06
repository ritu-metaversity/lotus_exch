import { Box } from "@mui/material";
import MenuHeading from "../../../Common/Desktop/ManuHeading/MenuHeading";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const events = [
  {
    name: "Morocco Olympic v USA Olympic",
    time: "23/07/24 14:00",
    odds: [
      { back: "5.75", lay: "6.75" },
      { back: "", lay: "" },
      { back: "1,481", lay: "1,740" },
    ],
  },
  {
    name: "Japan Olympic v Spain Olympic",
    time: "23/07/24 19:00",
    odds: [
      { back: "0.5", lay: "1.5" },
      { back: "", lay: "" },
      { back: "6,666", lay: "20,000" },
    ],
  },
  {
    name: "Egypt Olympic v Paraguay Olympic",
    time: "23/07/24 19:15",
    odds: [
      { back: "78", lay: "84" },
      { back: "", lay: "" },
      { back: "119", lay: "129" },
    ],
  },
  {
    name: "France Olympic v Argentina Olympic",
    time: "23/07/24 19:15",
    odds: [],
    moreMarkets: true,
  },
  {
    name: "Gold Coast Knights v Moreton City Excelsior",
    time: "23/07/24 19:15",
    odds: [
      { back: "161", lay: "189" },
      { back: "", lay: "" },
      { back: "53", lay: "62" },
    ],
  },
  {
    name: "Union Deportivo Las Palmas v Al Shabab Riyadh",
    time: "23/07/24 23:00",
    odds: [
      { back: "88", lay: "93" },
      { back: "", lay: "" },
      { back: "107", lay: "114" },
    ],
  },
];

const FootballDesk = () => {
  return (
    <Box className="event_details">
      <Box className="sport-wrapper ">
        <Box className="events  ">
          <MenuHeading name="Football" />

          <Box className="event_data">
            <table className="market-listing-table ">
              <thead>
                <tr>
                  <th className="title ng-binding">Live &amp; Upcoming</th>
                  <th className="_align-center col-first-player" colSpan={2}>
                    <Box className="two-cells-header">1</Box>
                  </th>

                  <th className="_align-center player-draw " colSpan={2}>
                    <Box className="two-cells-header">X</Box>
                  </th>

                  <th className="_align-center col-second-player" colSpan={2}>
                    <Box className="two-cells-header">2</Box>
                  </th>
                </tr>
              </thead>
              <tbody>
                {events?.map((items, id) => {
                  return (
                    <tr  key={id}>
                      <td className="event-row">
                        <Box className="event-flex-row">
                          <Box className="event-col">
                            <CiStar />
                            <Link
                              className="event-name ng-binding"
                              to="/display/EVENT/4/33433288"
                            >
                              {items?.name}
                            </Link>
                          </Box>
                          <Box className="event-col">
                            <small className="event-time ">
                              <Box className="">
                                <time className="ng-binding ">
                                  {items?.time}
                                </time>
                              </Box>
                            </small>
                          </Box>
                        </Box>
                      </td>

                      <td colSpan={6} className="inner-table-container ">
                        <table className="inner-table">
                          <tbody>
                           
                                <tr>
                                  <td className="back">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">
                                        {items?.odds[0]?.back}
                                      </strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>
                                  <td className="lay">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">
                                      {items?.odds[0]?.lay}
                                      </strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>

                                  <td className="back">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">-</strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>

                                  <td className="lay">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">-</strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>

                                  <td className="back">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">
                                      {items?.odds[2]?.lay}
                                      </strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>
                                  <td className="lay">
                                    <Box className="bet-button-wrapper">
                                      <strong className="odds ng-binding">
                                      {items?.odds[2]?.lay}
                                      </strong>
                                      <Box className="size">
                                        <span className="ng-binding"></span>
                                      </Box>
                                    </Box>
                                  </td>
                                </tr>
                              
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  );
                })}
                <tr  >
                      <td className="event-row">
                        <Box className="event-flex-row">
                          <Box className="event-col">
                          <CiStar />
                            <Link
                              className="event-name ng-binding"
                              to="#/display/EVENT/4/33433288"
                            >
                              Who will win The Hundred Womens 2024?
                            </Link>
                          </Box>
                          <Box className="event-col">
                            <small className="event-time ">
                              <Box className="">
                                <time className="ng-binding ">
                                  23/07/24 19:15
                                </time>
                              </Box>
                            </small>
                          </Box>
                        </Box>
                      </td>

                      <td colSpan={6} className="status more ">
                        <Link to="#/display/EVENT/4/9.33076_1" className="status-label-more">
                        <span className="status-label-more-text">See more markets</span>
                        <IoIosArrowForward  style={{
                                fontSize: "18px"
                        }}/>
                        </Link>
                      </td>
                    </tr>
              </tbody>
            </table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FootballDesk;
