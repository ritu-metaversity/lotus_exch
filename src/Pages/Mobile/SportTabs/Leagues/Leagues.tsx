import { Box } from "@mui/material";
import './style.scss';

const Leagues = () => {
  return (
    <div className="sport_leagues">
      <div>
        <Box>
          <ul className="menu">
            <li className="menu-item">
              <span> The Hundred</span>
              <span className="menu-number">5</span>
            </li>
            <li className="menu-item">
              <span> The Hundred - Womens</span>
              <span className="menu-number">5</span>
            </li>
            <li className="menu-item">
              <span> Global T20 Canada</span>
              <span className="menu-number">3</span>
            </li>
            <li className="menu-item">
              <span> Metro Bank One Day Cup</span>
              <span className="menu-number">6</span>
            </li>
            <li className="menu-item">
              <span> Tamil Nadu Premier League</span>
              <span className="menu-number">1</span>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Leagues;
