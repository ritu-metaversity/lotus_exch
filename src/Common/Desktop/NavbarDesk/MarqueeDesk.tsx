import { Box } from "@mui/material";
import type { FC } from "react";
import React from "react";

interface Props {
  message: string;
}

const MarqueeDesk: FC<Props> = ({ message }) => {
  return (
    <Box className="marquee_head">
      <section className="marquee">
        <div className="marquee__notifications--wrapper">
          <span
            className="span-marque"
            style={{
              backgroundImage:
                'url("https://d2eb1cys5jgnub.cloudfront.net/d/ball.gif")',
            }}
          ></span>
          <div className="marquee__notifications">
            <ul className="marquee__list marquee__list--scroll">
              <li className="marquee__list-item">{message}</li>
            </ul>
          </div>
          <span
            className="span-marque-right"
            style={{
              backgroundImage:
                'url("https://d2eb1cys5jgnub.cloudfront.net/d/ball.gif")',
            }}
          ></span>
        </div>
      </section>
    </Box>
  );
};

export default MarqueeDesk;
