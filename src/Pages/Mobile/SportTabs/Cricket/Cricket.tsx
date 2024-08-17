/* eslint-disable @typescript-eslint/no-restricted-imports */
import React, { useEffect } from "react";
import { useRef } from "react";
import type { FC, TouchEvent } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import "./style.scss";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { selectHomeSwipe, setHomeSwipe } from "../../../../utils/slice/homeSlice";
import moment from "moment";

interface Props {
  activeData: any,
  name:string
}


const Cricket: FC<Props> = ({ activeData, name }) => {
  const nav = useNavigate();

  const {id} = useParams()

  const dispatch = useDispatch();
  const isSwiped = useAppSelector(selectHomeSwipe);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchXRef = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    lastTouchXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    lastTouchXRef.current = null;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const shouldApplyAnimation = window.innerWidth < 1024;


    if (!shouldApplyAnimation) return;

    if (lastTouchXRef.current !== null) {
      const diffX = e.touches[0].clientX - lastTouchXRef.current;

      const threshold = 70;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          dispatch(setHomeSwipe({ isSwiped: false }));
        } else {
          dispatch(setHomeSwipe({ isSwiped: true }));
        }
      }
    }
  };


  const handleNav = (matchid:string) => {
    nav(`/m/sport/${id}/${matchid}`);
  };



  return (
    <section className="inplay-upcoming-container app-content ignore-content-spacing">
      <section className="section in-play">
        <Box>
          <div
            className="section-title in-play"
            style={{
              padding: "3px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <PlayArrowRoundedIcon
                sx={{
                  fontSize: "30px",
                  color: "#257b23",
                }}
              />

              <p
                className="label"
                style={{
                  margin: "0",
                }}
              >
                Live
              </p>
            </div>
          </div>
        </Box>
        <Box >
          {
            Object.keys(activeData)?.map((items) => {
              const dataLength = activeData[items]?.filter((item) => {
                if (item?.data !== null && item?.data?.marketDefinition?.inPlay) return item
              })
              return (
                <>
                  {
                    dataLength?.length !== 0 &&

                    <div className="sport-events-group-container">
                      <div className="sport-group-header first">
                        <div className="group-title">
                          <span className="title-item">{name}</span>
                          <span className="title-item">{items}</span>
                        </div>
                        <div className="group-odds-title">
                          <div>1</div>
                          <div>X</div>
                          <div>2</div>
                        </div>
                        <div className="group-odds-title hidden-on-short-screen">
                          <div>1</div>
                          <div>X</div>
                          <div>2</div>
                        </div>
                      </div>
                      <div className="event-item first">
                        {
                          activeData[items]?.map((matches) => {
                            return (
                              <Box >
                                <div className="market" >
                                  <Box className="market-title" onClick={()=>handleNav(matches?.matchid)}>
                                    <div className="info-box">
                                      <div className="info">
                                        <Box _nghost-bfg-c169="">
                                          <div _ngcontent-bfg-c169="" className="label">
                                            In Play
                                          </div>
                                        </Box>
                                      </div>
                                    </div>
                                    <div className="competitors">
                                      <div className="width-wrapper">
                                        <div className="line">
                                          <div className="name">{matches?.matchName?.split(' v ')[0]}</div>
                                        </div>
                                        <div className="line">
                                          <div className="name">{matches?.matchName?.split(' v ')[1]}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Box>
                                  <div className="odds market-odds custom-width">
                                    {
                                      matches?.data === null ? <div className="more full-width">
                                        <div className="inner">See more markets</div>
                                        <i className="icon icon-angle-right" />
                                      </div>
                                        :
                                        <div ref={containerRef} onTouchStart={handleTouchStart}
                                          onTouchMove={handleTouchMove}
                                          onTouchEnd={handleTouchEnd} className={`odds-wrap ${isSwiped ? "scrollable" : ""}`}>
                                          <Box >
                                            <div className="market-odds__container">
                                              <Box className="not-selected scrollable">
                                                <div className="bet-button back">
                                                  <div className="price">{matches?.data?.rc[0]?.batb[0][1]}</div>
                                                </div>
                                              </Box>

                                              <Box>
                                                <div className="bet-button has-no-runner disabled back">
                                                  -
                                                </div>
                                              </Box>

                                              <Box className="not-selected more-odds scrollable">
                                                <div className="bet-button back">
                                                  <div className="price">{matches?.data?.rc[1]?.batb[0][1]}</div>
                                                </div>
                                              </Box>

                                              <Box className="not-selected scrollable">
                                                <div className="bet-button lay">
                                                  <div className="price">{matches?.data?.rc[0]?.batl[0][1]}</div>
                                                </div>
                                              </Box>

                                              <Box>
                                                <div className="bet-button has-no-runner disabled lay">
                                                  -
                                                </div>
                                              </Box>

                                              <Box className="not-selected more-odds scrollable">
                                                <div className="bet-button lay">
                                                  <div className="price">{matches?.data?.rc[1]?.batb[0][1]}</div>
                                                </div>
                                              </Box>
                                            </div>
                                          </Box>
                                        </div>
                                    }

                                  </div>
                                </div>
                              </Box>
                            )
                          })
                        }

                      </div>
                    </div>
                  }
                </>
              )
            })
          }

        </Box>
      </section>

      <section className="section in-play">
        <Box>
          <div className="section-title upcoming">
            <div>
              <span className="label">Upcoming</span>
            </div>
          </div>
        </Box>
        {
          Object.keys(activeData)?.map((items) => {
            const dataLength = activeData[items]?.filter((item) => {
              if (item?.data !== null && !item?.data?.marketDefinition?.inPlay) return item
            })
            return (
              <>
                {
                  dataLength?.length !== 0 &&

                  <div className="sport-events-group-container">
                    <div className="sport-group-header first">
                      <div className="group-title" >
                        <span className="title-item">{name}</span>
                        <span className="title-item">{items}</span>
                      </div>
                      <div className="group-odds-title">
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                      </div>
                      <div className="group-odds-title hidden-on-short-screen">
                        <div>1</div>
                        <div>X</div>
                        <div>2</div>
                      </div>
                    </div>
                    <div className="event-item first">
                      {
                        activeData[items]?.map((matches) => {
                          const date = moment(matches?.MstDate).local();
                          let formattedDate;
                          const startOfDay = moment().startOf('day');
                          const endOfEarlyMorning = moment().startOf('day').add(5, 'hours').add(30, 'minutes');

                          if (date.isSame(moment(), 'day')) {
                            if (date.isBetween(startOfDay, endOfEarlyMorning, null, '[)')) {
                              formattedDate = date.format('Today ');
                            } else {
                              formattedDate ="Today" + date.format(' HH:mm');
                            }
                          } else if (date.isSame(moment().add(1, 'day'), 'day')) {
                            formattedDate ="Tomorrow " + date.format('HH:mm');
                          } else {
                            formattedDate = date.format('DD/MM/YYYY HH:mm');
                          }
                          return (
                            <Box >
                              <div className="market" >
                                <Box className="market-title" onClick={()=>handleNav(matches?.matchid)}>
                                  <div className="info-box">
                                    <div className="info">
                                      {formattedDate}
                                    </div>
                                  </div>
                                  <div className="competitors">
                                    <div className="width-wrapper">
                                      <div className="line">
                                        <div className="name">{matches?.matchName?.split(' v ')[0]}</div>
                                      </div>
                                      <div className="line">
                                        <div className="name">{matches?.matchName?.split(' v ')[1]}</div>
                                      </div>
                                    </div>
                                  </div>
                                </Box>
                                <div className="odds market-odds custom-width">
                                  {
                                    matches?.data === null ? <div className="more full-width">
                                      <div className="inner">See more markets</div>
                                      <i className="icon icon-angle-right" />
                                    </div>
                                      :
                                      <div ref={containerRef} onTouchStart={handleTouchStart}
                                        onTouchMove={handleTouchMove}
                                        onTouchEnd={handleTouchEnd} className={`odds-wrap ${isSwiped ? "scrollable" : ""}`}>
                                        <Box >
                                          <div className="market-odds__container">
                                            <Box className="not-selected scrollable">
                                              <div className="bet-button back">
                                                <div className="price">{matches?.data?.rc[0]?.batb[0][1]}</div>
                                              </div>
                                            </Box>

                                            <Box>
                                              <div className="bet-button has-no-runner disabled back">
                                                -
                                              </div>
                                            </Box>

                                            <Box className="not-selected more-odds scrollable">
                                              <div className="bet-button back">
                                                <div className="price">{matches?.data?.rc[1]?.batb[0][1]}</div>
                                              </div>
                                            </Box>

                                            <Box className="not-selected scrollable">
                                              <div className="bet-button lay">
                                                <div className="price">{matches?.data?.rc[0]?.batl[0][1]}</div>
                                              </div>
                                            </Box>

                                            <Box>
                                              <div className="bet-button has-no-runner disabled lay">
                                                -
                                              </div>
                                            </Box>

                                            <Box className="not-selected more-odds scrollable">
                                              <div className="bet-button lay">
                                                <div className="price">{matches?.data?.rc[1]?.batb[0][1]}</div>
                                              </div>
                                            </Box>
                                          </div>
                                        </Box>
                                      </div>
                                  }

                                </div>
                              </div>
                            </Box>
                          )
                        })
                      }

                    </div>
                  </div>
                }
              </>
            )
          })
        }
      </section>
    </section>
  );
};

export default Cricket;
