import { Box } from '@mui/material'
import GameHeading from '../GameHeading/GameHeading'
import SportTabs from '../SportTabs/SportTabs'
import Cricket from '../SportTabs/Cricket/Cricket'
import type { FC} from 'react';
import { useState } from 'react'
import Leagues from '../SportTabs/Leagues/Leagues'

interface Props{
  icon:any,
  name:string
}

const Sports:FC<Props> = ({icon, name}) => {
  const [active, setActive] = useState(0);
  return (
    <Box>
        <GameHeading icon={icon} name={name}/>
        <SportTabs active={active} setActive={setActive}/>
        {
          active === 0 ?<Cricket />:<Leagues />
        }
        
    </Box>
  )
}

export default Sports