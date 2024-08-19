/* eslint-disable @typescript-eslint/no-restricted-imports */
import { Box } from "@mui/material";
import video from '../../../../img/videoplay.png'
import zero from '../../../../img/zero.png'
import stopwatch from '../../../../img/stop_watch.png'
import "./style.scss";
import Betslip from "../Betslip/Betslip";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { betSelector } from "../../../../utils/slice/betSlice";
interface Props {
  // matchedRunners: any;
  bets: any;
  moduleOpenHandler: any;
  state: any;
  marketData: any;
  sportId: string;
  getBalance:any
}

const Matchodds: FC<Props> = ({ bets,
  moduleOpenHandler,
  state,
  marketData,
  sportId,
  getBalance }) => {
  const [mergeData, setMergeData] = useState<any[]>([]);
  const [matchedRunners, setMatchedRunners] = useState<any[]>([]);

  useEffect(() => {
    if (state) {
      const processedData = state.map((item) => {
        const runners = item.runner_json ? JSON.parse(item.runner_json) : []; // Parse the JSON string
        const extractedRunners = runners.map((runner) => ({
          id: runner.id,
          name: runner.name,
        }));
        return {
          matchName: item.matchName,
          matchid: item.matchid,
          MstDate: item.MstDate,
          sportid: sportId,
          series_name: item.series_name,
          runners: extractedRunners,
          market_name: item?.market_name,
          marketid: item?.marketid,
          minStack: item?.min_stack,
          maxStack: item?.max_stack
        };
      });
      setMatchedRunners(processedData);
    }
  }, [state, marketData]);

  useEffect(() => {
    function mergeData(data1: any[], data2: any[]): any[] {
      return data2?.map((match2) => {
        const match1 = data1?.find((match1) =>
          match1?.runners?.some(
            (runner1) =>
              runner1?.id == match2?.marketDefinition?.runners[0]?.id ||
              runner1?.id == match2?.marketDefinition?.runners[1]?.id ||
              runner1?.id == match2?.marketDefinition?.runners[2]?.id,
          ),
        );
        if (match1) {
          const mergedRunners = match2?.marketDefinition?.runners?.map(
            (runner2) => {
              const runner1 = match1?.runners?.find(
                (runner) => runner?.id == runner2?.id,
              );
              return { ...runner1, ...runner2 };
            },
          );

          // Extract names from rc array and assign to corresponding runners
          const runnersWithNames = mergedRunners?.map((runner) => {
            const matchedRunner = match2?.rc?.find(
              (rcRunner) => rcRunner?.id == runner?.id,
            );
            return { ...runner, name: matchedRunner?.name }; // Assign name if found
          });

          return {
            ...match2,
            ...match1,
            marketDefinition: {
              ...match2?.marketDefinition,
              runners: runnersWithNames,
            },
          };
        } else {
          return data1 && data1[0] && data1[0];
        }
      });
    }

    const mergedData = mergeData(matchedRunners, marketData);
    const sortedMergedData = mergedData.sort((a, b) => {
      if (a?.market_name === "Match Odds" || a?.market_name === "Bookmaker")
        return -1;
      if (b?.market_name === "Match Odds" || b?.market_name === "Bookmaker")
        return 1;
      return 0;
    });
    setMergeData(sortedMergedData);
  }, [state, marketData]);

  const betData = useSelector(betSelector);


  return (
    <div className="market-group">
      {
        (mergeData?.length == 0 ? matchedRunners : mergeData)?.map((matches) => {
          return (
            <Box>
              <section className="market-list-item">
                <div className="heading">
                  <div className="title">
                    <div className="header">{matches?.market_name}</div>
                    <Box className="icon_box">
                      <p className="block"></p>

                      <p className="block">
                        <img src={video} alt="video player" width={"25px"} />
                      </p>

                      <p className="block">
                        <img src={stopwatch} alt="stop watch" width={"25px"} />

                      </p>

                      <p className="block">
                        <img src={zero} alt="zero" width={"25px"} />
                      </p>
                    </Box>
                  </div>
                  <div className="right-title-box">
                    <div className="markets__action">Back</div>
                    <div className="markets__action">Lay</div>
                  </div>
                </div>

                <div className="list-body distinct market-wrap">
                  <Box className="list-item">
                    {
                      (matches?.rc == undefined ? matches?.runners : matches?.rc)?.map(
                        (res: any, id: number) => {
                          // const filteredBets = bets?.filter(
                          //   (el: any) => el?.MarketId === matches?.marketid,
                          // );
                          // let updatedBets = [...filteredBets];
                          // let profitLossValue = 0;
                          // updatedBets.forEach((b) => {
                          //   const stack =
                          //     b.Stack === "" ? 0 : parseFloat(b.Stack.toString());
                          //   const pl = b.P_L === "" ? 0 : parseFloat(b.P_L.toString());
                          //   if (b.isBack.toString() === "0") {
                          //     if (b.SelectionId.toString() === res?.id?.toString()) {
                          //       profitLossValue += pl;
                          //     } else {
                          //       profitLossValue -= stack;
                          //     }
                          //   } else {
                          //     if (b.SelectionId.toString() === res?.id?.toString()) {
                          //       profitLossValue -= pl;
                          //     } else {
                          //       profitLossValue += stack;
                          //     }
                          //   }
                          // });

                          const matchName = matches?.runners?.filter(
                            (resp) => resp?.id == res?.id,
                          );
                          return (
                            <Box sx={{
                              border: "1px solid #f2f2f2"
                            }}>
                              <div className="market">
                                <Box className="market-title">
                                  <div className="runner-details">
                                    <span className="runner-name">{(matchName &&
                                      matchName[0]?.name &&
                                      matchName[0]?.name) ||
                                      res?.name}</span>

                                    <Box className="pnl" _nghost-hos-c146="">
                                      <span />
                                    </Box>
                                  </div>
                                </Box>

                                <div className="odds market-odds">
                                  <div className="odds-wrap">
                                    <Box className="odds-line">
                                      <div className="market-odds__container">
                                        {
                                          res?.batb
                                            ?.map((items, index) => {
                                              // console.log(res?.id, "res?.idres?.idres?.id")
                                              return (
                                                <Box className={`${betData?.isBack == 0 && betData?.selectionId == res?.id ?"selected":"not-selected"} ${index !== 0?"more-odds":""}`} onClick={() =>
                                                  moduleOpenHandler(
                                                    0,
                                                    matches.marketid,
                                                    matches.matchName,
                                                    matchName[0]?.name,
                                                    items[1],
                                                    res?.id?.toString(),
                                                    matches.matchid,
                                                    matches.minStack,
                                                    matches.maxStack,
                                                  )
                                                }>
                                                  <div className={`bet-button back ${index !==0?"disabled":""}`}>
                                                    <div className="price"> {items[1]} </div>
                                                  </div>
                                                </Box>
                                              )
                                            }).reverse()
                                        }
                                        {
                                          res?.batl
                                            ?.map((items, index) => {
                                              return (
                                                <Box className={`${betData?.isBack == 1 && betData?.selectionId == res?.id?"selected":"not-selected"} ${index !== 0?"more-odds":""}`} onClick={() =>
                                                  moduleOpenHandler(
                                                    1,
                                                    matches.marketid,
                                                    matches.matchName,
                                                    matchName[0]?.name,
                                                    items[1],
                                                    res?.id?.toString(),
                                                    matches.matchid,
                                                    matches.SportId,
                                                    matches?.minStack,
                                                    matches?.maxStack
                                                  )
                                                }>
                                                  <div className={`bet-button lay ${index !==0?"disabled":""}`}>
                                                    <div className="price"> {items[1]} </div>
                                                  </div>
                                                </Box>
                                              )
                                            }).reverse()
                                        }
                                      </div>
                                    </Box>
                                  </div>
                                </div>
                              </div>
                              {
                                betData?.selectionId == res?.id?.toString()  && <Betslip betData={betData} getBalance={getBalance}/>
                              }
                              
                            </Box>
                          )
                        })
                    }


                  </Box>

                </div>
              </section>
            </Box>
          )
        })
      }



    </div>
  );
};

export default Matchodds;
