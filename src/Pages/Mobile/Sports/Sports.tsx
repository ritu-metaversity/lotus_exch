import { Box } from '@mui/material'
import GameHeading from '../GameHeading/GameHeading'
import SportTabs from '../SportTabs/SportTabs'
import Cricket from '../SportTabs/Cricket/Cricket'
import type { FC } from 'react';
import { useEffect, useState } from 'react'
import Leagues from '../SportTabs/Leagues/Leagues'
import React from 'react';

import crickt from '../../../img/cricket.png';
import football from '../../../img/football.png';
import tenis from '../../../img/tennis-ball.png';
import { useParams } from 'react-router-dom';
import { useGetDashboardDataQuery } from '../../../utils/Services/authService/sportApi';


// interface Props {
//   icon: any,
//   name: string
// }

const sportName = {
  1:"Football",
  2:"Tennis",
  4:"Cricket"
}
const icon = {
  1:football,
  2:tenis,
  4:crickt
}

const Sports = () => {
  const [active, setActive] = useState(0);
  const {id} = useParams<string>();


  const [activeData, setActiveData] = useState<any>({})
  const { data: dashBoardData } = useGetDashboardDataQuery(id, {refetchOnMountOrArgChange:true});

  const groupMatchesBySportAndSeries = (matches: any[]): any => {
    const groupedMatches: any = {};
    matches?.forEach((match) => {
      const seriesName = match.series_name;
      if (!groupedMatches[seriesName]) {
        groupedMatches[seriesName] = [];
      }
      groupedMatches[seriesName].push({ ...match });
    });

  
    return groupedMatches;
  };
  
  useEffect(() => {
    const groupedMatches = groupMatchesBySportAndSeries(dashBoardData?.data);
    setActiveData(groupedMatches);
  }, [dashBoardData]);


  

  return (
    <Box>
      <GameHeading icon={icon[id]} name={sportName[id]} />
      <SportTabs active={active} setActive={setActive} />
      {
        active === 0 ? <Cricket name={sportName[id]} activeData={activeData}/> : <Leagues activeData={activeData}/>
      }

    </Box>
  )
}

export default Sports