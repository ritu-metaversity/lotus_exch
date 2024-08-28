import { Box, Typography } from "@mui/material";
import moment from "moment";
import type { FC } from "react";
import React, { useEffect, useState } from "react";

interface Props {
  profitLoss: ProfitLoss[];
}

const BattingPLData: FC<Props> = ({ profitLoss }) => {
  const [profit, setProfit] = useState(0);

  console.log(profitLoss, "profitLossprofitLossprofitLoss")

  useEffect(() => {
    const totalProfit = profitLoss?.reduce((prev: number, next: ProfitLoss) => {
        return prev + Number(next.PnL);
    }, 0); // Start with 0 as the initial value
    setProfit(totalProfit);
    console.log(totalProfit,"totalProfit")
}, [profitLoss]);

  return (
    <Box>
      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
        Total P&L: <span className={profit>0?"-positive":"-negative"}> {profit}</span>
      </Typography>
      <table className="listing order_list">
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Market</th>
            <th style={{ textAlign: "left" }}>Start time</th>
            <th style={{ textAlign: "left" }}>Settled time</th>
            <th className="numeric">Comm.</th>
            <th className="numeric ">Net Win</th>
          </tr>
        </thead>
        <tbody>
          {profitLoss?.map((items) => {
            return (
              <>
                <tr className="group">
                  <td>{moment(items?.settle_date).format("DD/MM/YYYY")}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr style={{ background: "white !importent" }}>
                  <td>{items?.EventName}</td>
                  <td></td>
                  <td>
                    {moment(items?.settle_date).format("DD-MM-YYYY HH:MM:ss A")}
                  </td>
                  <td style={{ textAlign: "right" }}>{items?.Comm}</td>
                  <td
                    style={{
                      color: Number(items?.PnL) < 0 ? "red" : "green",
                      textAlign: "right",
                    }}
                  >
                    {items?.PnL}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default BattingPLData;
