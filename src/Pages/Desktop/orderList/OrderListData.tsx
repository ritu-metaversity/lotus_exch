import { Box } from "@mui/material";
import type { FC } from "react";
import React from "react";
import "./style.scss";

interface Props {
  pastActive: number;
  betHistory: betHistory[]
}

const OrderListData: FC<Props> = ({ pastActive, betHistory }) => {
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
          {
            betHistory?.map((items)=>{
              console.log(items, "itemsitemsitemsitems")
              return(
                <tr>
                  <td style={{textAlign:"center"}}>{items?.MstDate}</td>
                  <td style={{textAlign:"center"}}>{items?.Description}</td>
                  <td style={{textAlign:"center"}}>{items?.Type}</td>
                  <td style={{textAlign:"right"}}>{items?.Odds}</td>
                  <td style={{textAlign:"right"}}>{items?.Stack}</td>
                  {
                    pastActive === 0 &&<td style={{textAlign:"right"}}>{items?.Liability}</td>
                  }
                  
                  <td style={{textAlign:"right"}}>{items?.P_L}</td>
                  {
                    pastActive === 1 &&  <td style={{textAlign:"center"}}>{items?.STATUS}</td>
                  }
                 
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Box>
  );
};

export default OrderListData;
