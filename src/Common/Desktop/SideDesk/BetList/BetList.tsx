import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BetList = () => {
  const [active, setActive] = useState<number>(0);

  const handleActive = (val: number) => {
    setActive(val);
  };

  const AccordionSection = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => (
    <Box sx={{ p: "10px 0px" }}>
      <Accordion
        defaultExpanded
        sx={{
          "&.Mui-expanded": { margin: "0px 0" },
          margin: 0,
          background: "#ffc629",
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
            "&.Mui-expanded": { minHeight: "12px", margin: "0" },
            "& .MuiAccordionSummary-content": {
              margin: "5px 0px !important",
              display: "block",
              textAlign: "center",
            },
          }}
        >
          <strong>{title}</strong>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            background: "#f6f6f6",
            color: "#000",
            transformOrigin: "center top",
            boxShadow: "none",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <div className="bet-manager">
      <h4 className="bet_slip_heading">Betslip</h4>
      <ul className="tabs">
        <li
          className={`tab-bet-slip ${active === 0 ? "active" : ""}`}
          onClick={() => handleActive(0)}
        >
          <Link to="#" className="mgr-betslip">
            Betslip
          </Link>
        </li>
        <li
          className={`tab-open-bets ${active === 1 ? "active" : ""}`}
          onClick={() => handleActive(1)}
        >
          <Link to="#" className="-qa-bet-mgr-unmatched">
            Open Bets
          </Link>
        </li>
        <li className="edit_btn">
          <button className="edit_btn_primary">Edit Stakes</button>
        </li>
      </ul>

      {active === 0 ? (
        <ul className="content">
          <li id="tab-betslip" className="tab-betslip" style={{ height: 469 }}>
            <div className="bets betslip ng-isolate-scope has-empty-message">
              <div className="empty-list-info ng-scope">
                Click on the odds to add selections to the betslip.
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <>
          <div
            className="bets-by-event-filter"
          >
            <label className="check_box_label">
              <input type="checkbox" className="check_box" />
              Show bet Info
            </label>
          </div>

          <Box className="content-open-bets ">
            <Box sx={{ p: "0px 0px 10px 0px" }}>
              <Accordion
                defaultExpanded
                sx={{
                  "&.Mui-expanded": { margin: "0px 0" },
                  margin: 0,
                  backgroundColor: "hsla(0, 0%, 89%, 0.95)",
                  backgroundImage:
                    "radial-gradient(at 99% 99%, hsla(204, 85%, 56%, 0.35) 0, transparent 50%), radial-gradient(at 39% 0%, hsla(348, 100%, 71%, 0.24) 0, transparent 50%), radial-gradient(at 88% 8%, hsla(39, 100%, 50%, 0.28) 0, transparent 50%);",
                  color: "#000",
                  "&:last-of-type": { borderRadius: "0px" },
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                  sx={{
                    minHeight: "unset",
                    "&.Mui-expanded": { minHeight: "12px", margin: "0" },
                    "& .MuiAccordionSummary-content": {
                      margin: "5px 0px !important",
                      display: "block",
                      textAlign: "center",
                    },
                  }}
                >
                  <strong>Pending Bets</strong>{" "}
                  <strong
                    style={{
                      float: "inline-end",
                    }}
                  >
                    0
                  </strong>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: "#f6f6f6",
                    color: "#000",
                    transformOrigin: "center top",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    You have no pending bets
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <AccordionSection
              title="Unmatched Bets"
              content="You have no unmatched bets"
            />
            <AccordionSection
              title="Matched Bets"
              content="You have no matched bets"
            />
            <AccordionSection
              title="Voided Bets"
              content="You have no voided bets"
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default BetList;
