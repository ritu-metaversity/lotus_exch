import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { FC } from "react";
import "./style.scss";

interface Props {
  icon: any;
  name: string;
  genieIcon: any;
}

const Genie: FC<Props> = ({ icon, name, genieIcon }) => {
  return (
    <Box className="genie_bet">
      <div className="genie ng-star-inserted">
        <div className="top-genie-panel">
          <h1>
            Genie Bet Events
            <i className="icon-info-second" />
          </h1>
          <i className="show-rules">
            <span>Rules</span>
          </i>
        </div>

        <Box sx={{ p: "5px 0px" }}>
          <Accordion
            defaultExpanded
            sx={{
              "&.Mui-expanded": { margin: "0px 0" },
              margin: 0,
              background: "#fff",
              color: "#000",
              "&:last-of-type": { borderRadius: "0px" },
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#000",
                  }}
                />
              }
              aria-controls={`genie-content`}
              id={`genie-header`}
              sx={{
                minHeight: "unset",
                "&.Mui-expanded": { minHeight: "50px", margin: "0" },
                "& .MuiAccordionSummary-content": {
                  margin: "5px 0px !important",
                },
              }}
            >
              <div className="ng-tns-c112-1 toggle genie-bet-page">
                <img src={icon} alt="" width={"20px"} />

                <span className="title ng-tns-c112-1">{name}</span>

                <i className="next ng-tns-c112-1 ng-star-inserted icon-next-down" />
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#f6f6f6",
                color: "#000",
                transformOrigin: "center top",
                boxShadow: "none",
                p:0
              }}
            >
              <section className="content-wrapper">
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box">
                      <i className="icon-fire ng-star-inserted" />
                    </div>
                    <div className="event-box">
                      <span className="name">
                        Brazil Olympic (W) v Spain Olympic (W)
                      </span>
                      <span className="open-date">Today 20:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box">
                      <i className="icon-fire ng-star-inserted" />
                    </div>
                    <div className="event-box">
                      <span className="name">
                        Japan Olympic (W) v Nigeria Olympic (W)
                      </span>
                      <span className="open-date">Today 20:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Australia Olympic (W) v USA Olympic (W)
                      </span>
                      <span className="open-date">Today 22:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Zambia Olympic (W) v Germany Olympic (W)
                      </span>
                      <span className="open-date">Today 22:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box">
                      <i className="icon-fire ng-star-inserted" />
                    </div>
                    <div className="event-box">
                      <span className="name">
                        Rigas Futbola Skola v Bodo Glimt
                      </span>
                      <span className="open-date">Today 22:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box">
                      <i className="icon-fire ng-star-inserted" />
                    </div>
                    <div className="event-box">
                      <span className="name">
                        Midtjylland v UE Santa Coloma
                      </span>
                      <span className="open-date">Today 22:45</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Atletico Grau v Comerciantes Unidos
                      </span>
                      <span className="open-date">Today 23:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box">
                      <i className="icon-fire ng-star-inserted" />
                    </div>
                    <div className="event-box">
                      <span className="name">Maccabi Tel Aviv v FCSB</span>
                      <span className="open-date">Today 23:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Partizan Belgrade v Dynamo Kiev
                      </span>
                      <span className="open-date">Today 23:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Jagiellonia Bialystock v Panevezys
                      </span>
                      <span className="open-date">Tomorrow 00:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Dinamo Minsk v Ludogorets</span>
                      <span className="open-date">Tomorrow 00:15</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Colombia Olympic (W) v Canada Olympic (W)
                      </span>
                      <span className="open-date">Tomorrow 00:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        New Zealand Olympic (W) v France Olympic (W)
                      </span>
                      <span className="open-date">Tomorrow 00:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Borac Banja Luka v PAOK</span>
                      <span className="open-date">Tomorrow 00:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        CD Los Chankas v Sporting Cristal
                      </span>
                      <span className="open-date">Tomorrow 01:45</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Union Santa Fe v Rosario Central
                      </span>
                      <span className="open-date">Tomorrow 03:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Boca Juniors v Banfield</span>
                      <span className="open-date">Tomorrow 05:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Charlotte FC v Cruz Azul</span>
                      <span className="open-date">Tomorrow 05:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Santos Laguna v DC Utd</span>
                      <span className="open-date">Tomorrow 05:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Carlos Mannucci v Asociacion Deportiva Tarma
                      </span>
                      <span className="open-date">Tomorrow 06:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Melgar v Universitario de Deportes
                      </span>
                      <span className="open-date">Tomorrow 06:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">FC Dallas v FC Juarez</span>
                      <span className="open-date">Tomorrow 06:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Nashville SC v Mazatlan FC</span>
                      <span className="open-date">Tomorrow 06:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Ind Medellin v Boyaca Chico</span>
                      <span className="open-date">Tomorrow 06:40</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Tigres v Puebla</span>
                      <span className="open-date">Tomorrow 07:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        San Jose Earthquakes v LA Galaxy
                      </span>
                      <span className="open-date">Tomorrow 08:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Cercle Brugge v Kilmarnock</span>
                      <span className="open-date">Tomorrow 23:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Newells v Estudiantes</span>
                      <span className="open-date">03/08/2024 04:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Karlsruhe v Nurnberg</span>
                      <span className="open-date">04/08/2024 00:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Criciuma v Atletico MG</span>
                      <span className="open-date">04/08/2024 04:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Djurgardens v IFK Goteborg</span>
                      <span className="open-date">04/08/2024 17:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Fluminense v Bahia</span>
                      <span className="open-date">05/08/2024 00:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">Internacional v SE Palmeiras</span>
                      <span className="open-date">05/08/2024 01:30</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="genie-accordion ng-star-inserted">
                  <div className="event">
                    <div className="hot-icon-box"></div>
                    <div className="event-box">
                      <span className="name">
                        Deportivo Riestra v Central Cordoba (SdE)
                      </span>
                      <span className="open-date">05/08/2024 23:00</span>
                    </div>
                    <div className="icons-box">
                      <div className="genie-bet-box">
                        <img src={genieIcon} alt="" width={"30px"} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>
    </Box>
  );
};

export default Genie;
