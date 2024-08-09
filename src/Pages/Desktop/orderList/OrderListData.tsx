import { Box } from "@mui/material";
import type { FC } from "react";
import React from "react";
import "./style.scss";

interface Props {
  pastActive: number;
}

const OrderListData: FC<Props> = ({ pastActive }) => {
  return (
    <Box>
      <table className="listing order_list">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Placed</th>
            <th style={{ width: "45%" }}>Description</th>
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
                <th style={{ width: "7%" }} className="numeric  ">
                  Status
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </Box>
  );
};

export default OrderListData;
