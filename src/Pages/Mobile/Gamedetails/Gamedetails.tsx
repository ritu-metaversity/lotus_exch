import { Box } from "@mui/material";
import React from "react";
import HeadingGame from "./GameHeading/HeadingGame";
import SportTabs from "./SportTabs/SportTabs";
import Matchodds from "./Matchodds/Matchodds";
import Fancy from "./Fancy/Fancy";
import MobileBetList from "./MobileBetList/MobileBetList";

const Gamedetails = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <HeadingGame />
      <SportTabs handleChange={handleChange} value={value} />
      <Box
        sx={{
          p: 1,
          mt: 2,
        }}
      >
        {
          value === "four" && <MobileBetList />
        }
        
        <Matchodds />
        <Fancy />
      </Box>
    </Box>
  );
};

export default Gamedetails;
