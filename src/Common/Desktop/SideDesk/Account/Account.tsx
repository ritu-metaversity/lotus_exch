import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import type { FC } from 'react';
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props{
  userData: User
}

const Account:FC<Props> = ({userData}) => {
  return (
    <div className="account-overview">
          <Accordion
            sx={{"&.Mui-expanded": {margin: "0px 0"},
              margin: 0,
              background: "#ffc629",
              color: "#fff",
              "&:last-of-type": {borderRadius: "0px"},
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                minHeight: "unset",
                "&.Mui-expanded": {minHeight: "12px",margin: "0"},
                "& .MuiAccordionSummary-content": {margin: "5px 0px !important",display: "block",textAlign: "center"},
              }}
            >
              <strong>Available Credit:</strong> <span>{userData?.balance}</span>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#fff",
                color: "#000",
                border: "1px solid #ffc629",
                transformOrigin: "center top",
              }}
            >
              <ul className="list-wrap">
                <li>
                  <strong>Credit Limit:</strong>
                  0
                </li>
                <li>
                  <strong>Winnings:</strong>
                  <span className="negative">{userData?.profit_loss}</span>
                </li>
                <li>
                  <strong>Total Net Exposure:</strong>
                  <span>{userData?.liability}</span>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
  )
}

export default Account