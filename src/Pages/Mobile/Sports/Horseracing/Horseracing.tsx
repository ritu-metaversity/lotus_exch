import { Box } from '@mui/material';
import type React from 'react';
import type { FC} from 'react';
import { useState } from 'react'
import GameHeading from '../../GameHeading/GameHeading';
import HorseracingTab from './HorseracingTab';
import Horse from './Horse';


interface Props{
  icon:any,
  name:string
}

const Horseracing:FC<Props> = ({icon, name}) => {
    const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
    return (
      <Box>
          <GameHeading icon={icon} name={name}/>
          <HorseracingTab handleChange={handleChange} value={value}/>
        <Horse />
          
          
      </Box>
    )
}

export default Horseracing