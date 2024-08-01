import { Box } from '@mui/material';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

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

const CasinoTabDesk = () => {
    const [value, setValue] = useState<number>(0);

    const handleActiveClass = (val:number)=>{
        setValue(val);
    }

  return (
    <Box className="">
      <div className="menu">
        {tabData.map((tab, index) => (
          <Link key={index} className={`menu-item  ${index === value ? 'active' : ''}`} to="#" onClick={()=>handleActiveClass(index)}>
            <div className="icon-container">
              <img src={tab.image} alt={tab.name} className="icon" />
            </div>
            <div className="title-container">
              <span>{tab.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </Box>
  );
};

export default CasinoTabDesk;
