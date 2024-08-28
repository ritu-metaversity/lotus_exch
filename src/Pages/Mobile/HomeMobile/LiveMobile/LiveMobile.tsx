/* eslint-disable @typescript-eslint/no-restricted-imports */
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import type { FC, TouchEvent } from "react";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { selectHomeSwipe, setHomeSwipe } from "../../../../utils/slice/homeSlice";

// Component for displaying event information
const EventInfo = ({ date, competitors, matchName }) => {

  return (
    <Box className="market-title">
      <div className="info-box">
        <div className="icon-fire-wrapper" />
        <div className="info">
          {
            matchName?.data?.marketDefinition?.inPlay ? <div className="inplay_label"> In Play
            </div> : <div className="line date">
              <span className="date-info__item date-info__item--open-date">
                {date}
              </span>
            </div>
          }

        </div>
      </div>
      <div className="competitors">
        <div className="width-wrapper">
          {/* {competitors.map((name, index) => ( */}
          <div className="line" >
            <div className="name">{matchName?.matchName}</div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </Box>
  )
};

const Odds = ({ date }) => {
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
  return (
    <div className="odds market-odds custom-width">
      <div ref={containerRef} onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd} className={`odds-wrap ${isSwiped ? "scrollable" : ""}`}>
        {
          date?.data !== null ?
            <div className="market-odds__container">
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button back`}>
                      <div className="price">{date?.data?.rc[0]?.batb[0][1]}</div>
                    </div>
                  </Box>
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button back`}>
                      <div className="price">-</div>
                    </div>
                  </Box>
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button back`}>
                      <div className="price">{date?.data?.rc[1]?.batb[0][1]}</div>
                    </div>
                  </Box>
              
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button lay`}>
                      <div className="price">{date?.data?.rc[0]?.batl[0][1]}</div>
                    </div>
                  </Box>
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button lay`}>
                      <div className="price">-</div>
                    </div>
                  </Box>
                  <Box className="not-selected scrollable" >
                    <div className={`bet-button lay`}>
                      <div className="price">{date?.data?.rc[1]?.batl[0][1]}</div>
                    </div>
                  </Box>
                
            </div> :
            <div  className="more full-width">
              <div  className="inner">
                See more markets
              </div>
              <i  className="icon icon-angle-right" />
            </div>
        }

      </div>
    </div>
  )
};

interface Props {
  activeData: any
}

// Main component
const LiveMobile: FC<Props> = ({ activeData }) => {
  const nav = useNavigate();

  const handleNav = (id:any, matchid:any) => {
    nav(`/m/sport/${id}/${matchid}`);
  };

  const MarketItem = ({ date, competitors, odds }: any) => {
    return (
      <div className="market-list-item" onClick={()=>handleNav(date?.sportid, date?.matchid)}>
        <div className="market">
          <EventInfo date={date?.MstDate} matchName={date} competitors={competitors} />
          <Odds date={date} />
        </div>
      </div>
    )
  };

  return (
    <section className="section in-play">
      <div className="section-title">
        <i className="icon icon-in-play-simple" />
        <span className="label">Live</span>
        <span className="open-bets-link">
          Open Bets
          <span className="count">0</span>
        </span>
      </div>
      <div className="events-list">
        <Box>
          {
            Object.keys(activeData)?.map((sportName) => {
              const dataLength = activeData[sportName]?.filter((item)=>{
                if(item?.data !== null && item?.data?.marketDefinition?.inPlay ) return  item
              })
              return (
                <>
                {dataLength?.length > 1 && 
                <Box>
                  <div className="consolidated-events-group-title">
                    <div className="title">
                      <i className="icon-sport-cricket sport-icon" title="Cricket" />
                      <span>{sportName}</span>
                    </div>
                    <div className="odds-header">
                      <div className="odds-col">1</div>
                      <div className="odds-col">X</div>
                      <div className="odds-col">2</div>
                      <div className="odds-col visible-on-wide-screen">1</div>
                      <div className="odds-col visible-on-wide-screen">X</div>
                      <div className="odds-col visible-on-wide-screen">2</div>
                    </div>
                  </div>
                  <div className="consolidated-events">
                    <div className="app-list">
                      {activeData[sportName]?.map((event, index) => {
                        const competitors = JSON.parse(event?.runner_json);
                        if (!event?.data?.marketDefinition?.inPlay) return null
                        return (
                          <MarketItem
                            key={index}
                            date={event}
                            competitors={competitors}

                          />
                        )
                      })}
                    </div>
                  </div>
                </Box>
                }
                </>
              )
            }
            )
          }

        </Box>
      </div>
    </section>
  );
};

export default LiveMobile;
