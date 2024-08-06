import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DateArea = () => {
    const [active, setActive] = useState(false)

    const handleActive = ()=>{
        setActive(!active)
    }
  return (
    <>
      <Box className=" ">
        <Box className="ng-binding ">Aug 2, 2024</Box>
      </Box>
      <Box className="time  ">
        <Box className="ng-binding ">13:29:14</Box>
      </Box>
      <div className="clock-timezone-settings">
        (
        <div className="wrap-dd-menu ">
          <Link to="#" className="">
            <span className="ng-binding" onClick={handleActive}>
              +05:30 <KeyboardArrowDownIcon  sx={{
                verticalAlign:"middle"
              }}/>
            </span>
          </Link>
          <ul className={`dropdown ${active?"active":""}`}>
            <li className="dropdown-item ">
              <Link to="#" className="dropdown-item ng-binding ">
                System time - (GMT +00:00)
              </Link>
            </li>
            <li className="dropdown-item ">
              <Link to="#" className="dropdown-item ng-binding ">
                Your computer time - (GMT +05:30)
              </Link>
            </li>
            <li className="dropdown-item ">
              <Link to="#" className="dropdown-item ng-binding ">
                India Standard time - (GMT +05:30)
              </Link>
            </li>
          </ul>
        </div>
        )
      </div>
    </>
  );
};

export default DateArea;
