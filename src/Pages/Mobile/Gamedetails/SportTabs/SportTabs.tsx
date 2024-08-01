import type React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import type { FC } from "react";
import { Tabs } from "@mui/material";

interface SportTabsProps{
    handleChange: (event: React.SyntheticEvent, newValue: string) => void
    value: string
}

const tabItems = [
  { value: "one", label: "MARKET" },
  { value: "two", label: "MATCH INFO" },
  { value: "three", label: "LIVE VEDEO" },
  { value: "four", label: "OPEN BET (0)" },
];

const SportTabs:FC<SportTabsProps> = ({handleChange, value}) => {
  
  return (
    <Box sx={{ width: '100%', background:"#0d0d0d" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#ffc629",
            height:"3px"
          },
        }}
        sx={{
           "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
          },
        }}
      >
       {tabItems.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            sx={{
              color: value === tab.value ? "#ffffff" : "#737373",
              fontSize: "11px",

              '&.Mui-selected':{
                color:"#ffffff",
                fontSize: "11px",
                fontWeight:600
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SportTabs;
