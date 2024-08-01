import './style.scss';
import type { FC } from 'react';
interface Props{
  icon:any,
  name:string
}

const GameHeading:FC<Props> = ({icon, name}) => {
  return (
    <div  className="sport-name-wrap ignore-content-spacing">
    <img alt='' src={icon}  style={{marginRight: "14px"}}/>
    <span >{name}</span>
  </div>
  )
}

export default GameHeading