import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import type React from "react";
import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const MobileBetList = () => {
  const [active, setActive] = useState<number>(0);

  const handleActive = (val: number) => {
    setActive(val);
  };

  const AccordionSection = ({
    title,
    content,
    bcolor,
    icon
  }: {
    title: string;
    content: string;
    bcolor:string;
    icon: React.ReactNode;
  }) => (
    <Box sx={{ p: "5px 0px" }}>
      <Accordion
        defaultExpanded
        sx={{
          "&.Mui-expanded": { margin: "0px 0" },
          margin: 0,
          background: bcolor,
          color: "#fff",
          "&:last-of-type": { borderRadius: "0px" },
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${title}-content`}
          id={`${title}-header`}
          sx={{
            minHeight: "unset",
            "&.Mui-expanded": { minHeight: "30px", margin: "0" },
            "& .MuiAccordionSummary-content": {
              margin: "5px 0px !important",
             
            },
          }}
        >
         {icon} <strong style={{paddingLeft:"5px"}}>{title}</strong>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            background: "#f6f6f6",
            color: "#000",
            transformOrigin: "center top",
            boxShadow: "none",
          }}
        >
          <Typography >{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <div className="bet-manager">
      <Box className="content-open-bets " sx={{
        pb:3
      }}>
        <AccordionSection
          title="Unmatched Bets"
          content="You have no unmatched bets"
          bcolor="#c8592c"
          icon={<AccessTimeIcon />}
        />
        <AccordionSection
          title="Matched Bets"
          content="You have no matched bets"
          bcolor="#7b9b1e"
          icon={<DoneIcon/>}
        />
        <AccordionSection
          title="Voided Bets"
          content="You have no voided bets"
          bcolor="#888888"
          icon={<ErrorOutlineIcon/>}
        />
      </Box>
    </div>
  );
};

export default MobileBetList;
