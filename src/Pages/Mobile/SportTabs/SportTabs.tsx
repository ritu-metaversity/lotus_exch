import type { FC } from "react";
import type React from "react";
import './Style.scss'

interface Props {
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>,
}

const SportTabs: FC<Props> = ({ active, setActive }) => {
  const handleActive = (val: number) => {
    setActive(val);
  }
  return (
    <div className="live_tab-group-container">
      <div className={`live_tab  ${active === 0 && "active"}`} onClick={() => handleActive(0)}>
        <span>Live &amp; Upcoming </span>
      </div>
      <div className={`live_tab  ${active === 1 && "active"}`} onClick={() => handleActive(1)}>
        <span>Leagues </span>
      </div>
      <b
        className="active-tab-indicator"
        style={
          {
            left: `${active === 0 ? "0%" : "50%"}`,
            width: "50%"
          }
        }
      />
    </div>
  );
};

export default SportTabs;
