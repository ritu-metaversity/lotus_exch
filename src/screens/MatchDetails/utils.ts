import { ProfitInterface } from "../../state/features/client/clientSlice.types";

export const createProfits = ({
    fancyOdds,
    pnl,
    betDetails,
    rechange,
    fancyPnl,
    setProfits,
  }: any) => {
    console.log(pnl,betDetails,fancyOdds,"sushant");
    if (!fancyOdds) return;
    const pnlsOdds = pnl?.find(
      (element:any) => element?.marketId == betDetails?.marketId
    );
    const plnOddsArray = pnlsOdds
      ? [
          { pnl: pnlsOdds.pnl1, selectionId: pnlsOdds.selection1 },
          { pnl: pnlsOdds.pnl2, selectionId: pnlsOdds.selection2 },
          { pnl: pnlsOdds.pnl3, selectionId: pnlsOdds.selection3 },
        ]
      : [];
    if (betDetails?.stake != null && !rechange) {
      const isBack = betDetails?.color==="blue" || false,
        odds = betDetails?.vl || 0,
        stake = betDetails?.stake || 0;
      if (betDetails?.marketName === "Bookmaker") {
        const Bookmaker: any[] = [];
        const pnlsBookmaker = pnl?.find(
          (element:any) => element?.marketId == betDetails?.allData?.mid
        );
        const plnBookmakerArray = pnlsBookmaker
          ? [
              { pnl: pnlsBookmaker.pnl1, selectionId: pnlsBookmaker.selection1 },
              { pnl: pnlsBookmaker.pnl2, selectionId: pnlsBookmaker.selection2 },
              { pnl: pnlsBookmaker.pnl3, selectionId: pnlsBookmaker.selection3 },
            ]
          : [];
        
        fancyOdds?.Bookmaker.forEach((odd: any) => {
          if (odd.mid !== betDetails?.allData?.mid) return;
          const current = plnBookmakerArray.find(
            (item: any) => item.selectionId == odd.sid
          );
          if (odd.sid == betDetails?.SelectionIdForAll) {
            Bookmaker.push({
              title: odd.nation,
              value:
                (current?.pnl || 0) + ((isBack ? 1 : -1) * odds * stake) / 100,
              sid: odd.sid,
              mid: odd.mid,
            });
          } else {
            Bookmaker.push({
              title: odd.nation,
              value: (current?.pnl || 0) + (isBack ? -1 : 1) * stake,
              sid: odd.sid,
              mid: odd.mid,
            });
          }
        });
        setProfits((profits: any) => ({
          ...profits,
          Bookmaker,
        }));
      } else if (!betDetails?.isFancy) {

        setProfits((profits: any) => ({
          ...profits,
          Odds: {
            ...profits.Odds,
            [betDetails?.allData?.marketId || "really"]: [
              ...(fancyOdds?.Odds?.find(
                (i: any) => i.marketId === betDetails?.allData?.marketId
              )?.runners?.map((element: any) => {
                const currentProfit: any = {
                  title: element.name,
                  sid: element.selectionId,
                  value:
                    plnOddsArray.find(
                      (item) => item.selectionId == element.selectionId
                    )?.pnl ||
                     0,
                };
                if (element.selectionId === betDetails?.SelectionIdForAll?.selectionId) {
                  currentProfit.value =
                    currentProfit.value + (isBack ? 1 : -1) * (odds - 1) * stake;
                } else {
                  currentProfit.value =
                    currentProfit.value + (isBack ? -1 : 1) * stake;
                }
                return currentProfit;
              })||[]),
            ],
          },
        }));
      } else {
        setProfits((profits:any)=>({
          ...profits,
          Fancy:[...profits?.Fancy?.filter((i:ProfitInterface)=>i.sid!=betDetails?.SelectionIdForAll),
            {
              title: betDetails?.SelectionIdForAll,
              sid: betDetails?.SelectionIdForAll,
              value: (profits?.Fancy?.find((item:ProfitInterface)=>item.sid==betDetails.SelectionIdForAll)?.value||0)  - (stake || 0),
            }]
        }))
      }
    } else {
      const newItem = {
        Odds: {
          ...(fancyOdds?.Odds?.reduce((accu: any, current: any) => {
            const pnlsOddCurrent = pnl?.find(
              (element:any) => element?.marketId == current?.marketId
            );
            if (!pnlsOddCurrent) return accu;
            const plnArrayCurrent = pnlsOddCurrent
              ? [
                  {
                    pnl: pnlsOddCurrent.pnl1,
                    selectionId: pnlsOddCurrent.selection1,
                  },
                  {
                    pnl: pnlsOddCurrent.pnl2,
                    selectionId: pnlsOddCurrent.selection2,
                  },
                  {
                    pnl: pnlsOddCurrent.pnl3,
                    selectionId: pnlsOddCurrent.selection3,
                  },
                ]
              : [];
            accu[current.marketId] = current?.runners?.map((element: any) => {
              const currentProfit: any = {
                title: element.name,
                sid: element.selectionId,
                value:
                  plnArrayCurrent.find(
                    (item) => item.selectionId == element.selectionId
                  )?.pnl || 0,
              };
              return currentProfit;
            });
            return accu;
          }, {}) || {}),
        },
        Bookmaker: fancyOdds?.Bookmaker?.map((element: any) => {
          const pnlsBookmaker = pnl?.find((pnl:any) => pnl?.marketId == element.mid);
          if (!pnlsBookmaker) return null;
          const plnBookmakerArray = [
            {
              pnl: pnlsBookmaker.pnl1,
              selectionId: pnlsBookmaker.selection1,
            },
            {
              pnl: pnlsBookmaker.pnl2,
              selectionId: pnlsBookmaker.selection2,
            },
            {
              pnl: pnlsBookmaker.pnl3,
              selectionId: pnlsBookmaker.selection3,
            },
          ];
          const currentProfit: any = {
            title: element.nation,
            sid: element.sid,
            mid: element.mid,
            value:
              plnBookmakerArray.find((item) => item.selectionId == element.sid)
                ?.pnl || 0,
          };
          return currentProfit;
        }),
        Fancy:
          fancyPnl?.map((element: any) => {
            const currentProfit: any = {
              title: element.marketId,
              sid: element.marketId,
              value: element.pnl || 0,
            };
            return currentProfit;
          }) || [],
      };
      setProfits(newItem);
    }
  };