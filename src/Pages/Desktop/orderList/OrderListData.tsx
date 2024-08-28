import { Box } from "@mui/material";
import type { FC } from "react";
import React from "react";
import "./style.scss";
import moment from "moment";

interface Props {
  pastActive: number;
  betHistory: betHistory[];
}

const OrderListData: FC<Props> = ({ pastActive, betHistory }) => {
  return (
    <Box>
      <table className="listing order_list">
        <thead>
          <tr>
            <th style={{ width: "10%", textAlign: "left" }}>
              {pastActive === 0 ? "Placed" : "Settled"}
            </th>
            <th style={{ width: "45%", textAlign: "left" }}>Description</th>
            <th style={{ width: "7%" }}>Type</th>
            <th style={{ width: "7%" }} className="numeric ">
              Odds
            </th>
            <th style={{ width: "7%" }} className="numeric ">
              Stake
            </th>
            {pastActive === 0 ? (
              <>
                <th style={{ width: "7%" }} className="numeric  ">
                  Liability
                </th>
                <th style={{ width: "17%" }} className="numeric ">
                  Potential Profit
                </th>
              </>
            ) : (
              <>
                <th style={{ width: "17%" }} className="numeric  ">
                  Profit/Loss
                </th>
                <th style={{ width: "7%", textAlign: "left" }} >
                  Status
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {betHistory?.map((items, id: number) => {
            const name = items?.Description.split(">");
            console.log(items, "Cxvfvfdvfsddfsfsd");
            return (
              <tr key={id}>
                <td>
                  {moment(items?.MstDate).format("DD/MM/YYYY")} <br />{" "}
                  <span className="order-time">
                    {moment(items?.MstDate).format("HH:mm:ss")}
                  </span>
                </td>
                <td>
                  <span className="order-event">{items?.matchName}</span> <br />{" "}
                  <span style={{fontWeight:"600"}}>{items?.selectionName} - </span> <span className="order-time">{items?.marketName}</span> <br />
                  <span >Bet ID: {items?.MarketId} | </span> <span >Placed: {moment(items?.MstDate).format("DD/MM/YYYY HH:mm:ss")}</span>
                </td>
                <td style={{ textAlign: "center" }}>{items?.Type}</td>
                <td style={{ textAlign: "right" }}>{items?.Odds}</td>
                <td style={{ textAlign: "right" }}>{items?.Stack}</td>
                {pastActive === 0 && (
                  <td style={{ textAlign: "right" }}>{items?.Liability}</td>
                )}

                <td
                  style={{
                    textAlign: "right",
                    color: Number(items?.P_L) > 0 ? "#2aa033" : "red",
                  }}
                >
                  {items?.P_L}
                </td>
                {pastActive === 1 && (
                  <td style={{ textAlign: "left" }}>{items?.STATUS}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default OrderListData;
