import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import casino from '../../../img/casino.png';
import bat from '../../../img/cricket.png';
import football from '../../../img/football.png';
import tennis from '../../../img/tennis-ball.png';
import sports_basketball from '../../../img/basketball.png';
import sports_golf from '../../../img/golf-ball.png';
import sports_horse from '../../../img/horse-head.png';
import sports_mma from '../../../img/greyhound.png';
import esports from '../../../img/multiplayer.png';
import public_p from '../../../img/documents.png';
import whatshot from '../../../img/genie.png';
import './side.scss';

const menuItems = [
  // { href: '#/display/FAVORITES', icon: 'star_border', text: 'Favourites' },
  { icon: casino, text: 'Live Casino', className: 'exchangegame', href:"/d/super-casino" },
  { icon: bat, text: 'Cricket', className: 'cricket', href:"/d/cricket/4" },
  { icon: football, text: 'Football', className: 'football', href:"/d/football/1" },
  { icon: tennis, text: 'Tennis', className: 'tennis' },
  { icon: sports_basketball, text: 'Basketball', className: 'basketball' },
  { icon: sports_golf, text: 'Golf', className: 'golf' },
  { icon: sports_horse, text: 'Horse Racing', className: 'horseracing', href:"/d/horseracing/7" },
  { icon: sports_mma, text: 'Greyhound Racing', className: 'greyhoundracing' },
  { icon: esports, text: 'E-Sports', className: 'esports' },
  { icon: public_p, text: 'Politics', className: 'politics' },
  { href: '#/genie-bet', icon: whatshot, text: 'Genie Bet' },
];

const SideDesk = () => {
  const [isActive, setIsActive] = useState<number>(0)
  // const location = useLocation();


  const handleActive = (index:number)=>{
    setIsActive(index);
  }
  
  return (
    <List className="left-menu-container">
      {menuItems.map((item, index) => {
        // const isActive = location.hash === item.href;

        return (
          <Link 
            key={index} 
            to={item.href || '#'} 
            className={`group-name sport-type  ${isActive === index ? item.className : ''}`}
            onClick={()=>handleActive(index)}
          >
            <ListItem button={true} sx={{
              minHeight:"60px"
            }}>
              <ListItemIcon sx={{ minWidth: 0 }}>
                <img src={item.icon} alt={item.text} className='side_image' />
              </ListItemIcon>
              <ListItemText primary={item.text} />
              {/* {item.label && <div className="label_new">{item.label}</div>} */}
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default SideDesk;
