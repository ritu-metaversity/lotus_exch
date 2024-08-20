import { Box } from '@mui/material';
import type { Dispatch, FC, SetStateAction} from 'react';
import  React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { GameCategory } from '../LiveCasino/LiveCasino';

const tabData = [
  { name: 'All', image: '/imges/all.png' },
  { name: 'Roulette', image: '/imges/roulete.png' },
  { name: 'Baccarat', image: '/imges/bacc.png' },
  { name: 'Instant Games', image: '/imges/instant.png' },
  { name: 'Dragon Tiger', image: '/imges/dragan.png' },
  { name: 'Blackjack', image: '/imges/black.png' },
  { name: 'Teen Patti', image: '/imges/teenpatti.png' },
  { name: 'Indian Games', image: '/imges/indian.png' },
  { name: 'Board Games', image: '/imges/board.png' },
  { name: 'Slots', image: '/imges/slot.png' },
  { name: 'Exchange', image: '/imges/exchange.png' },
];


interface Props{
  setValue: Dispatch<SetStateAction<number>>,
  value:number,
  casinoData: GameCategory
}


const CasinoTabs:FC<Props> = ({setValue, value, casinoData}) => {

    const handleActiveClass = (val:number)=>{
        setValue(val);
    }

  return (
    <Box className="sticky-on-top">
      <div className="tabs-container">
        {tabData.map((tab, index) => (
          <Link key={index} className={`tab-item ${index === value ? 'selected' : ''}`} to="#" onClick={()=>handleActiveClass(index)}>
            <div className="icon-container">
              <img src={tab.image} alt={tab.name} className="icon" />
            </div>
            <div className="title-container">
              <span>{tab.name}</span>
            </div>
          </Link>
        ))}

        {
          Object.keys(casinoData)?.map((item)=>{
            const data = tabData.filter((res)=>res?.name.toLowerCase() == item.toLowerCase());
            return(
              <>
              </>
            )
          })
        }

      </div>
    </Box>
  );
};

export default CasinoTabs;
