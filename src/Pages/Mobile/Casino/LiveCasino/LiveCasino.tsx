import { Box, useMediaQuery } from "@mui/material";
import "./style.scss";
import CasinoHeading from "../CasinoHeading/CasinoHeading";
import CasinoTabs from "../CasinoTabs/CasinoTabs";
import CasinoImage from "../CasinoImage/CasinoImage";
import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { useGetCasinoDataQuery, useGetCasinoGameUrlMutation } from "../../../../utils/Services/authService/casinoServices";
import { useParams } from "react-router-dom";

interface Game {
  game_id: string;
  game_name: string;
  category: string;
  provider_name: string;
  sub_provider_name: string;
  status: string;
  url_thumb: string;
  game_code: string;
}

export interface GameCategory {
  [category: string]: Game[];
}

interface Props {
  type: number;
}

const LiveCasino: FC<Props> = ({ type }) => {
  const [value, setValue] = useState<number>(0);
  const [casinoData, setCasinoData] = useState<GameCategory>({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const origin = window.location.href;
  const { id } = useParams()

  console.log(origin, "dsgdfgdfgdfgd")

  const { data: casinoDataRes } = useGetCasinoDataQuery();
  const [getCasinoUrl, { data: casinoUrl }] = useGetCasinoGameUrlMutation();

  const getCasinoGameData = async () => {
    const categorizedGames: GameCategory = {};

    if (casinoDataRes) {
      casinoDataRes?.data?.forEach((game: Game) => {
        if (
          !Object.prototype.hasOwnProperty.call(categorizedGames, game.category)
        ) {
          categorizedGames[game.category] = [];
        }
        categorizedGames[game.category].push(game);
      });
    }

    setCasinoData(categorizedGames);
  };

  useEffect(() => {
    getCasinoGameData();
  }, [casinoDataRes]);

  useEffect(() => {
    getCasinoUrl({
      desktop: !isMobile,
      game_code: id,
      lobby_url: origin
    });
  }, [origin, id]);

  console.log(casinoUrl?.data?.url, "Casino casinoUrlcasinoUrlcasinoUrl");

  return (
    <Box className="casino_live">
      <div className="layout-content header-with-notifications">
        <CasinoHeading type={type} />
        {type == 0 ? (
          <>
            <CasinoTabs
              setValue={setValue}
              value={value}
              casinoData={casinoData}
            />
            <CasinoImage />
          </>
        ) : (
          <div className="games-container">
            <iframe src={casinoUrl?.data?.url} title="casino"/>
          </div>
        )}
      </div>
    </Box>
  );
};

export default LiveCasino;
