import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./LiveUpcoming.scss";
import MenuHeading from "../../../Common/Desktop/ManuHeading/MenuHeading";
import { Link, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { useGetDashboardDataQuery } from "../../../utils/Services/authService/sportApi";
import { RiArrowRightSLine } from "react-icons/ri";
import moment from "moment";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { sportSelector } from "../../../utils/slice/sportSlice";

const teamName = {
  4: "Cricket",
  1: "Football",
  2: "Tennis",
};

const LiveUpcomingEvent = () => {
  const { id } = useParams();
  const { data } = useGetDashboardDataQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [activeData, setActiveData] = useState<any>({})

  const groupMatchesBySportAndSeries = (matches: any[]): any => {
    const groupedMatches: any = {};
    matches?.forEach((match) => {
      const seriesName = match.series_name;
      if (!groupedMatches[seriesName]) {
        groupedMatches[seriesName] = [];
      }
      groupedMatches[seriesName].push({ ...match });
    });


    return groupedMatches;
  };
  const { matchName } = useSelector(sportSelector);


  useEffect(() => {
    const groupedMatches = groupMatchesBySportAndSeries(data?.data);
    setActiveData(groupedMatches);
  }, [data]);

  return (
    <>
      {
        matchName ? <Box className="event_details">
          <Box className="sport-wrapper ">
            <Box className="events  ">
              <MenuHeading name={matchName} />

              <Box className="event_data">
                <table className="market-listing-table ">
                  <thead>
                    <tr>
                      <th className="title ng-binding">Live &amp; Upcoming</th>
                      <th className="_align-center col-first-player" colSpan={2}>
                        <Box className="two-cells-header">1</Box>
                      </th>
                      <th className="_align-center col-second-player" colSpan={2}>
                        <Box className="two-cells-header">2</Box>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeData[matchName]?.map((items, index) => {
                      console.log(
                        items,
                        "hui",
                      );
                      const date = moment(items?.MstDate).local();

                      let formattedDate = date.format("DD/MM/YYYY HH:mm");
                      return (
                        <tr key={index}>
                          <td className="event-row">
                            <Box className="event-flex-row">
                              <Box className="event-col">
                                <CiStar />
                                <Link
                                  className="event-name ng-binding"
                                  to={`/d/display/EVENT/${id}/${items?.matchid}`}
                                >
                                  {items?.matchName}
                                </Link>
                              </Box>
                              <Box className="event-col">
                                {items?.data?.marketDefinition?.inPlay ? (
                                  <small className="in-play-content">
                                    <PlayCircleFilledWhiteIcon />
                                    <Box className="">In-Play</Box>
                                  </small>
                                ) : (
                                  <small className="event-time ">
                                    <Box className="">{formattedDate}</Box>
                                  </small>
                                )}
                              </Box>
                            </Box>
                          </td>

                          <td colSpan={6} className="inner-table-container ">
                            <table className="inner-table">
                              <tbody>
                                {items?.data !== null ? (
                                  <tr>
                                    <td className="back">
                                      <Box className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          {items?.data?.rc[0]?.batb[0][1]}
                                        </strong>
                                        <Box className="size">
                                          <span className="ng-binding"></span>
                                        </Box>
                                      </Box>
                                    </td>
                                    <td className="lay">
                                      <Box className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          {items?.data?.rc[0]?.batl[0][1]}
                                        </strong>
                                        <Box className="size">
                                          <span className="ng-binding"></span>
                                        </Box>
                                      </Box>
                                    </td>

                                    
                                    <td className="back">
                                      <Box className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          {items?.data?.rc[1]?.batb[0][1]}
                                        </strong>
                                        <Box className="size">
                                          <span className="ng-binding"></span>
                                        </Box>
                                      </Box>
                                    </td>
                                    <td className="lay">
                                      <Box className="bet-button-wrapper">
                                        <strong className="odds ng-binding">
                                          {items?.data?.rc[1]?.batl[0][1]}
                                        </strong>
                                        <Box className="size">
                                          <span className="ng-binding"></span>
                                        </Box>
                                      </Box>
                                    </td>
                                  </tr>
                                ) : (
                                  <tr className="-status more">
                                    <Link
                                      className="status-label status-label-more back"
                                      to="#/display/EVENT/4/9.33076_1"
                                    >
                                      <span className="status-label-more-text">
                                        See more markets
                                      </span>
                                      <RiArrowRightSLine
                                        style={{ fontSize: "22px" }}
                                      />
                                    </Link>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Box>
            </Box>
          </Box>
        </Box> :

          <Box className="event_details">
            <Box className="sport-wrapper ">
              <Box className="events  ">
                <MenuHeading name={teamName[id]} />
                <Box className="event_data">
                  <table className="market-listing-table ">
                    <thead>
                      <tr>
                        <th className="title ng-binding">Live &amp; Upcoming</th>
                        <th className="_align-center col-first-player" colSpan={2}>
                          <Box className="two-cells-header">1</Box>
                        </th>

                        <th className="_align-center col-second-player" colSpan={2}>
                          <Box className="two-cells-header">X</Box>
                        </th>
                        <th className="_align-center col-second-player" colSpan={2}>
                          <Box className="two-cells-header">2</Box>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.map((items, index) => {
                        const date = moment(items?.MstDate).local();

                        let formattedDate = date.format("DD/MM/YYYY HH:mm");
                        return (
                          <tr key={index}>
                            <td className="event-row">
                              <Box className="event-flex-row">
                                <Box className="event-col">
                                  <CiStar />
                                  <Link
                                    className="event-name ng-binding"
                                    to={`/d/display/EVENT/${id}/${items?.matchid}`}
                                  >
                                    {items?.matchName}
                                  </Link>
                                </Box>
                                <Box className="event-col">
                                  {items?.data?.marketDefinition?.inPlay ? (
                                    <small className="in-play-content">
                                      <PlayCircleFilledWhiteIcon />
                                      <Box className="">In-Play</Box>
                                    </small>
                                  ) : (
                                    <small className="event-time ">
                                      <Box className="">{formattedDate}</Box>
                                    </small>
                                  )}
                                </Box>
                              </Box>
                            </td>

                            <td colSpan={6} className="inner-table-container ">
                              <table className="inner-table">
                                <tbody>
                                  {items?.data !== null ? (
                                    <tr>
                                      <td className="back">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            {items?.data?.rc[0]?.batb[0][1]}
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>
                                      <td className="lay">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            {items?.data?.rc[0]?.batl[0][1]}
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>

                                      <td className="empty betting-disabled">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            -
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>
                                      <td className="empty betting-disabled">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            -
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>

                                      <td className="back">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            {items?.data?.rc[1]?.batb[0][1]}
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>
                                      <td className="lay">
                                        <Box className="bet-button-wrapper">
                                          <strong className="odds ng-binding">
                                            {items?.data?.rc[1]?.batl[0][1]}
                                          </strong>
                                          <Box className="size">
                                            <span className="ng-binding"></span>
                                          </Box>
                                        </Box>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr className="-status more">
                                      <Link
                                        className="status-label status-label-more back"
                                        to="#/display/EVENT/4/9.33076_1"
                                      >
                                        <span className="status-label-more-text">
                                          See more markets
                                        </span>
                                        <RiArrowRightSLine
                                          style={{ fontSize: "22px" }}
                                        />
                                      </Link>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </Box>
          </Box>
      }
    </>
  );
};

export default LiveUpcomingEvent;
