import React, { useState } from "react";
import './Style.scss'

const SportTabs = () => {
    const [active, setActive] = useState(0);
    const handleActive = (val:number)=>{
        setActive(val);
    }
  return (
    <div className="live_tab-group-container">
      <div className={`live_tab  ${active === 0 && "active" }`}  onClick={()=>handleActive(0)}>
        <span>Live &amp; Upcoming </span>
      </div>
      <div className={`live_tab  ${active === 1 && "active" }`}  onClick={()=>handleActive(1)}>
        <span>Leagues </span>
      </div>
      <b
        className="active-tab-indicator"
        style={
            { 
                left: `${active === 0?"0%":"50%"}`, 
                width: "50%" }
        }
      />
    </div>
  );
};

export default SportTabs;
