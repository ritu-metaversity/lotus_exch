import { Box } from "@mui/material";
import React from "react";
import './style.scss'

const HorseDataDesk = () => {
  return (
    <div className="race-rows horse_data">
      <table className="market-listing-table apl-table ">
        <thead>
          <tr>
            <th className="title ng-binding">
              Race Odds
              <Box className="">
                {/* <div className="icon-box">
                  <i className="icon icon-zero" />
                  <div className="popover">No commission</div>
                </div>
                <div className="icon-box">
                  <i className="icon icon-going" />
                  <div className="popover">Going in-play</div>
                </div> */}
              </Box>
            </th>
            <th className="_align-center" colSpan={3}>
              <div className="three-cells-header ">Back</div>
            </th>
            <th className="_align-center" colSpan={3}>
              <div className="three-cells-header ">Lay</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">6</span>
                    <span className="ng-binding ">(5)</span>
                  </div>
                  <div className="runner-image column ">
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDA2LnBuZw"
                          alt=""
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span className="main ng-binding">Hazlo Grande</span>
                    <span className="secondary ng-binding ">
                      Philasande Mxoli
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.00</strong>
                <div className="size">
                  <span className="ng-binding">61,620</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.05</strong>
                <div className="size">
                  <span className="ng-binding">38,667</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.10</strong>
                <div className="size">
                  <span className="ng-binding">7,240</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.30</strong>
                <div className="size">
                  <span className="ng-binding">17,870</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.35</strong>
                <div className="size">
                  <span className="ng-binding">44,366</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.40</strong>
                <div className="size">
                  <span className="ng-binding">38,975</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">7</span>
                    <span className="ng-binding ">(4)</span>
                  </div>
                  <div className="runner-image column ">
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDA3LnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span className="main ng-binding">Fifth Of July</span>
                    <span className="secondary ng-binding ">
                      Marco V'Rensburg
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.60</strong>
                <div className="size">
                  <span className="ng-binding">27,729</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.70</strong>
                <div className="size">
                  <span className="ng-binding">41,131</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">3.75</strong>
                <div className="size">
                  <span className="ng-binding">26,959</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">4.00</strong>
                <div className="size">
                  <span className="ng-binding">2,311</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">4.10</strong>
                <div className="size">
                  <span className="ng-binding">17,562</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">4.20</strong>
                <div className="size">
                  <span className="ng-binding">41,439</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">3</span>
                    <span className="ng-binding ">(8)</span>
                  </div>
                  <div className="runner-image column ">
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDAzLnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span className="main ng-binding">Diesel's Shadow</span>
                    <span className="secondary ng-binding ">
                      G Lerena
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.40</strong>
                <div className="size">
                  <span className="ng-binding">55,920</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.60</strong>
                <div className="size">
                  <span className="ng-binding">24,494</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.80</strong>
                <div className="size">
                  <span className="ng-binding">14,173</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">7.40</strong>
                <div className="size">
                  <span className="ng-binding">3,235</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">7.60</strong>
                <div className="size">
                  <span className="ng-binding">37,588</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">7.80</strong>
                <div className="size">
                  <span className="ng-binding">45,753</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">2</span>
                    <span className="ng-binding ">(3)</span>
                  </div>
                  <div
                    className="runner-image column "
                    title="Dark blue, yellow hoop, yellow and dark blue hooped sleeves, yellow and black striped cap"
                  >
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDAyLnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span
                      className="main ng-binding"
                      title="Trainer: Lorenzo KarriemAge/Weight: 6 / 9-5Form: 304101-Days since last run: 16Jockey claim: N/AWearing: N/A"
                    >
                      Thambi
                    </span>
                    <span className="secondary ng-binding ">
                      Kaidan Brewer
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">5.30</strong>
                <div className="size">
                  <span className="ng-binding">53,147</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">5.40</strong>
                <div className="size">
                  <span className="ng-binding">30,040</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">5.50</strong>
                <div className="size">
                  <span className="ng-binding">3,081</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.00</strong>
                <div className="size">
                  <span className="ng-binding">29,270</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.20</strong>
                <div className="size">
                  <span className="ng-binding">10,475</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">6.40</strong>
                <div className="size">
                  <span className="ng-binding">49,604</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">5</span>
                    <span className="ng-binding ">(6)</span>
                  </div>
                  <div
                    className="runner-image column "
                    title="White,old gold band,hooped sleeves,old gold cap"
                  >
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDA1LnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span
                      className="main ng-binding"
                      title="Trainer: Weichong MarwingAge/Weight: 4 / 9-3Form: 542210-Days since last run: 9Jockey claim: N/AWearing: Blinkers"
                    >
                      Japanese Maple
                    </span>
                    <span className="secondary ng-binding ">
                      Wesley Marwing
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">20</strong>
                <div className="size">
                  <span className="ng-binding">19,256</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">21</strong>
                <div className="size">
                  <span className="ng-binding">7,086</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">22</strong>
                <div className="size">
                  <span className="ng-binding">4,622</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">27</strong>
                <div className="size">
                  <span className="ng-binding">7,548</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">28</strong>
                <div className="size">
                  <span className="ng-binding">7,240</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">29</strong>
                <div className="size">
                  <span className="ng-binding">18,640</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">1</span>
                    <span className="ng-binding ">(2)</span>
                  </div>
                  <div
                    className="runner-image column "
                    title="Yellow, purple stars, yellow cap, purple star"
                  >
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDAxLnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span
                      className="main ng-binding"
                      title="Trainer: Heather AdamsonAge/Weight: 6 / 9-10Form: 96/1880-Days since last run: 23Jockey claim: N/AWearing: Blinkers"
                    >
                      Princess Kesh
                    </span>
                    <span className="secondary ng-binding ">
                      P Strydom
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">19.0</strong>
                <div className="size">
                  <span className="ng-binding">16,329</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">19.5</strong>
                <div className="size">
                  <span className="ng-binding">8,473</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">20</strong>
                <div className="size">
                  <span className="ng-binding">4,930</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">27</strong>
                <div className="size">
                  <span className="ng-binding">5,546</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">28</strong>
                <div className="size">
                  <span className="ng-binding">6,008</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">29</strong>
                <div className="size">
                  <span className="ng-binding">12,016</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="event-row -with-pnl">
              <Box className="ng-isolate-scope">
                <div className="race-runner-info">
                  <div className="runner-numbers column ">
                    <span className="ng-binding ">4</span>
                    <span className="ng-binding ">(7)</span>
                  </div>
                  <div
                    className="runner-image column "
                    title="Yellow, green stars, black sleeves, yellow cap"
                  >
                    <Box>
                      <div className="race-symbol horse-racing">
                        <img
                          alt=""
                          className="symbol-img"
                          src="https://www.goexch247.com/api/media/jockeysilk/YzIwMjQwODAzdHJmLzIwMjQwODAzdHJmMTI1MDA0LnBuZw"
                        />
                      </div>
                    </Box>
                  </div>
                  <div className="name column">
                    <span
                      className="main ng-binding"
                      title="Trainer: Fabian HabibAge/Weight: 5 / 9-4Form: 909865-Days since last run: 14Jockey claim: N/AWearing: N/A"
                    >
                      Black Lightning
                    </span>
                    <span className="secondary ng-binding ">
                      Jason Gates
                    </span>
                  </div>
                </div>
              </Box>
              <Box className=" ng-isolate-scope">
                <div className="selection-pnl racing-pnl">
                  <span className=""></span>
                </div>
              </Box>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">30</strong>
                <div className="size">
                  <span className="ng-binding">15,405</span>
                </div>
              </div>
            </td>
            <td className="back unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">32</strong>
                <div className="size">
                  <span className="ng-binding">10,784</span>
                </div>
              </div>
            </td>
            <td className="back show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">34</strong>
                <div className="size">
                  <span className="ng-binding">3,389</span>
                </div>
              </div>
            </td>
            <td className="lay show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">40</strong>
                <div className="size">
                  <span className="ng-binding">4,159</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">42</strong>
                <div className="size">
                  <span className="ng-binding">4,930</span>
                </div>
              </div>
            </td>
            <td className="lay unhighlighted show-size">
              <div className="bet-button-wrapper">
                <strong className="odds ng-binding">46</strong>
                <div className="size">
                  <span className="ng-binding">10,629</span>
                </div>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default HorseDataDesk;
