import { Box } from "@mui/material";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import FancyTabs from "./FancyTabs";
import useBooks from "./UseBook";

interface Props {
  fancyData: any;
  fancyDataTabs: any;
  moduleFancyOpenHandler: any;
  bets: any;
}

const FancyDesk: FC<Props> = ({
  moduleFancyOpenHandler,
  fancyData,
  fancyDataTabs,
  bets
}) => {
  const [value, setValue] = useState<number>(1);
  const [mergedData, setMergedData] = useState<any[]>([]);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (fancyData && fancyDataTabs) {
      const merged = fancyData.map((item2: any) => {
        const matchedItem = fancyDataTabs?.data?.find(
          (item: any) => item.ind_fancy_selection_id === item2.SelectionId
        );
        return matchedItem
          ? { ...item2, ...matchedItem, in_priority: matchedItem.in_priority }
          : item2;
      });
      setMergedData(merged);
    }
  }, [fancyData, fancyDataTabs]);

  // const { books } = useBooks(mergedData, bets);

  return (
    <div className="market-group fancy_group">
      <FancyTabs tabsData={fancyDataTabs?.priorities} handleChange={handleChange} value={value} />
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
                          <div className="popover">Faster bet acceptance</div>
                        </div>
                        <div className="icon-box">
                          <i className="icon icon-zero" />
                          <div className="popover">No commission</div>
                        </div>
                        <div className="icon-box">
                          <i className="icon icon-pre-match" />
                          <div className="popover">Pre-match betting only</div>
                        </div>
                      </Box>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    mergedData
                      .filter((item: any) => item.in_priority === value)
                      .map((item: any) => {
                        return (
                          <tr>
                            <td className="market-name">
                              <div className="container">
                                <div className="event-name ng-binding">
                                  {item?.RunnerName}
                                </div>
                                <img
                                  src="/imges/ladder-black.png"
                                  alt=""
                                  width={"8px"}
                                />
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
                                       
                                        {item?.GameStatus === "SUSPENDED" || item?.GameStatus === "Result Awaiting" ? <td colSpan={2} className={`-status  ${item?.GameStatus.toLowerCase()}`} >
                                          <div className="status-label " >
                                            {item?.GameStatus}
                                          </div>
                                        </td> :
                                          <>
                                           <td
                                          className="odds-placeholder"
                                          colSpan={2}
                                        ></td>
                                            <td className="lay show-size">
                                              <div className="bet-button-wrapper" onClick={() =>
                                                moduleFancyOpenHandler(
                                                  item?.LayPrice1,
                                                  item?.TypeID,
                                                  item.MatchID,
                                                  item?.ID,
                                                  item.SelectionId,
                                                  item.HeadName,
                                                  item.SessInptYes,
                                                  item.SessInptNo,
                                                  item?.SprtId,
                                                  item?.pointDiff,
                                                  item?.YesValume,
                                                  item?.NoValume,
                                                  0,
                                                  true,
                                                  item?.min_stack,
                                                  item?.max_stack,
                                                  1
                                                )
                                              }>
                                                <strong className="odds ng-binding">
                                                  {item?.LayPrice1}
                                                </strong>
                                                <div className="size">
                                                  <span className="ng-binding">{item?.LaySize1}</span>
                                                </div>
                                              </div>
                                            </td>
                                            <td className="back show-size">
                                              <div className="bet-button-wrapper" onClick={() =>
                                                moduleFancyOpenHandler(
                                                  item?.BackPrice1,
                                                  item?.TypeID,
                                                  item.MatchID,
                                                  item?.ID,
                                                  item.SelectionId,
                                                  item.HeadName,
                                                  item.SessInptYes,
                                                  item.SessInptNo,
                                                  item?.SprtId,
                                                  item?.pointDiff,
                                                  item?.YesValume,
                                                  item?.NoValume,
                                                  0,
                                                  true,
                                                  item?.min_stack,
                                                  item?.max_stack,
                                                  0
                                                )
                                              }>
                                                <strong className="odds ng-binding">
                                                  {item?.BackPrice1}
                                                </strong>
                                                <div className="size">
                                                  <span className="ng-binding">{item?.BackSize1}</span>
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
                                            Max Mkt: {item?.MaxStake}
                                          </span>
                                        </td>
                                          </>}

                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                  }

                </tbody>
              </table>

            </div>
          </Box>
        </div>
      </div>
      <hr className="line-market-separator " />
    </div>
  );
};

export default FancyDesk;
