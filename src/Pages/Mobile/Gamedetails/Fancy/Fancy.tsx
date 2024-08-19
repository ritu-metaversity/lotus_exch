import { Box } from "@mui/material";
import video from '../../../../img/videoplay.png'
import zero from '../../../../img/zero.png'
import stopwatch from '../../../../img/stop_watch.png'
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import useBooks from "../../../Desktop/GameDetails/FancyDesk/UseBook";


interface Props {
  fancyData: any;
  fancyDataTabs: any;
  moduleFancyOpenHandler: any;
  bets: any;
}

const Fancy: FC<Props> = ({
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

  const { books } = useBooks(mergedData, bets);

  return (
    <div className="market-group">
      <Box className="stroke-group">
        <div className="nav-tabs-group-container not-stretched-tabs">
          {
            fancyDataTabs?.priorities?.map((tabs) => {
              return (
                <div onClick={() => handleChange(tabs?.value)} className={`nav-tab  ${value === tabs?.value ? "active" : ""}`}>{tabs?.name}</div>
              )
            })
          }
        </div>

      </Box>

      <div>
        <Box>

          <section className="market-list-item">
            <div className="heading">
              <div className="title indicators-icon" style={{
                justifyContent: "flex-end"
              }}>
                <Box className="icon_box" >
                  <p className="block"></p>
                  <p className="block">
                    <img src={video} alt="video player" width={"25px"} />
                  </p>

                  <p className="block">
                    <img src={stopwatch} alt="video player" width={"25px"} />
                  </p>

                  <p className="block">
                    <img src={zero} alt="video player" width={"25px"} />
                  </p>
                </Box>
              </div>
              <div className="right-title-box" />
            </div>

            <div className="list-body distinct market-wrap">
              {
                mergedData
                  .filter((item: any) => item.in_priority === value)
                  .map((item: any) => {
                    return (<Box className="list-item">
                      <Box >
                        <div className="market">
                          <Box className="market-title">
                            <div className="runner-details with-ladder">
                              <span className="runner-name">{item?.RunnerName}</span>

                              <Box className="pnl">
                                <span />
                              </Box>

                              <Box className="icon">
                                <i className="icon-ladder disabled" />
                              </Box>
                            </div>
                          </Box>

                          <div className="odds market-odds">
                            <div className="odds-wrap">
                              <Box>
                                <div className="market-odds__container line-market">
                                  <Box className="not-selected more-odds">
                                    <div className="bet-button disabled back"></div>
                                  </Box>

                                  <Box className="not-selected more-odds">
                                    <div className="bet-button disabled back"></div>
                                  </Box>

                                  <Box className="not-selected" onClick={() =>
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
                                    <div className="bet-button back">
                                      <div className="price">{item?.BackPrice1}</div>

                                      <div className="price">{item?.BackSize1}</div>
                                    </div>
                                  </Box>

                                  <Box className="not-selected" onClick={() =>
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
                                    <div className="bet-button lay">
                                      <div className="price">{item?.LayPrice1}</div>

                                      <div className="price">{item?.LaySize1}</div>
                                    </div>
                                  </Box>

                                  <Box className="not-selected more-odds">
                                    <div className="bet-button disabled lay"></div>
                                  </Box>

                                  <Box className="not-selected more-odds">
                                    <div className="bet-button disabled lay"></div>
                                  </Box>
                                </div>
                              </Box>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Box>)
                  })
              }

            </div>
          </section>

        </Box>
      </div>

      <hr className="line-market-separator" />
    </div>
  );
};

export default Fancy;
