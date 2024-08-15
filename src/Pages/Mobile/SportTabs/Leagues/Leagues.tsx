import { Box } from "@mui/material";
import './style.scss';
import type { FC } from "react";
import React from "react";

interface Props {
  activeData: any
}

const Leagues: FC<Props> = ({ activeData }) => {
  return (
    <div className="sport_leagues">
      <div>
        <Box>
          <ul className="menu">
            {
              Object.keys(activeData)?.map((items) => {
                return (
                  <li className="menu-item">
                    <span>{items}</span>
                    <span className="menu-number">{activeData[items]?.length}</span>
                  </li>
                )
              })
            }

          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Leagues;
