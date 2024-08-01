import type { FC } from "react";
import type React from "react";
import '../../SportTabs/Style.scss'
import { Box, Tab, Tabs } from "@mui/material";

interface SportTabsProps{
    handleChange: (event: React.SyntheticEvent, newValue: string) => void
    value: string
}

const tabItems = [
    { value: "1", label: "14:30 Mysore (IND)" },
    { value: "2", label: "15:00 Mysore (IND)" },
    { value: "3", label: "15:30 Mysore (IND)" },
  ];

const HorseracingTab: FC<SportTabsProps> = ({ value, handleChange }) => {
  
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

export default HorseracingTab;
