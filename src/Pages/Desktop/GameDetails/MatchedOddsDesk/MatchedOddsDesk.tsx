import { Box } from "@mui/material";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import stopatch from "../../../../img/stop_watch.png";
import zero from "../../../../img/zero.png";

interface Props {
  // matchedRunners: any;
  bets: any;
  moduleOpenHandler: any;
  state: any;
  marketData: any;
  sportId: string;
}

const MatchedOddsDesk: FC<Props> = ({
  bets,
  moduleOpenHandler,
  state,
  marketData,
  sportId,
}) => {
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

  return (
    <Box className="ng-isolate-scope">
      {(mergeData?.length == 0 ? matchedRunners : mergeData)?.map((matches) => {
        return (
          <table className="market-listing-table apl-table">
            <thead>
              <tr>
                <th className="market-name title">
                  <span className="ng-binding">
                    <CiStar />
                    {matches?.market_name}
                  </span>
                  <span className="market-indicators-container">
                    <Box className="market-indicators" ng-version="14.3.0">
                      <div className="icon-box">
                        <img src={zero} alt="" className="icon icon-going" />
                        <div className="popover">Going in-play</div>
                      </div>
                      <div className="icon-box">
                        <img
                          src={stopatch}
                          alt=""
                          className="icon icon-going"
                        />
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
              {(matches?.rc == undefined ? matches?.runners : matches?.rc)?.map(
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
                    <tr ng-repeat="runner in vm.market.runners | orderBy: 'sort' track by runner.id">
                      <td className="event-row -with-pnl">
                        <div className="event-name ng-binding">
                          {(matchName &&
                            matchName[0]?.name &&
                            matchName[0]?.name) ||
                            res?.name}
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
                      {matches?.marketDefinition?.status !== "OPEN" ?
                      <td colSpan={6} className={`-status  ${matches?.marketDefinition?.status?.toLowerCase()}`} >
                        <div className="status-label " >
                          {matches?.marketDefinition?.status}
                        </div>
                      </td> : <>
                        {res?.batb
                          ?.map((items, index) => {
                            return (
                              <td
                                className={`back ${index == 0 ? "" : "unhighlighted"} show-size`}
                                onClick={() =>
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
                                }
                              >
                                <div className="bet-button-wrapper">
                                  <strong className="odds ng-binding">
                                    {items[1]}
                                  </strong>
                                  <div className="size">
                                    <span className="ng-binding">{items[2]}</span>
                                  </div>
                                </div>
                              </td>
                            );
                          })
                          .reverse()}
                        {res?.batl?.map((items, index) => {
                          return (
                            <td
                              className={`lay ${index == 0 ? "" : "unhighlighted"} show-size`}
                              onClick={() =>
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
                              }
                            >
                              <div className="bet-button-wrapper">
                                <strong className="odds ng-binding">
                                  {items[1]}
                                </strong>
                                <div className="size">
                                  <span className="ng-binding">{items[2]}</span>
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </>}

                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        );
      })}
    </Box>
  );
};

export default MatchedOddsDesk;
