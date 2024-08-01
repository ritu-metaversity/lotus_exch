import { Box } from "@mui/material";
import video from '../../../../img/videoplay.png'
import zero from '../../../../img/zero.png'
import stopwatch from '../../../../img/stop_watch.png'
import "./style.scss";
import Betslip from "../Betslip/Betslip";

const Matchodds = () => {
  return (
    <div className="market-group">
      <div>
        <Box>
          <section className="market-list-item">
            <div className="heading">
              <div className="title">
                <div className="header">Match Odds (Bookmaker)</div>
                <Box className="icon_box">
                  <p className="block"></p>

                  <p className="block">
                   <img src={video} alt="video player" width={"25px"}/>
                  </p>

                  <p className="block">
                   <img src={stopwatch} alt="stop watch" width={"25px"}/>
                    
                  </p>

                  <p className="block">
                  <img src={zero} alt="zero" width={"25px"}/>
                  </p>
                </Box>
              </div>
              <div className="right-title-box">
                <div className="markets__action">Back</div>
                <div className="markets__action">Lay</div>
              </div>
            </div>

            <div className="list-body distinct market-wrap">
              <Box className="list-item">
                <Box sx={{
                  border:"1px solid #f2f2f2"
                }}>
                  <div className="market">
                    <Box className="market-title">
                      <div className="runner-details">
                        <span className="runner-name">Surrey</span>

                        <Box className="pnl" _nghost-hos-c146="">
                          <span  />
                        </Box>
                      </div>
                    </Box>

                    <div className="odds market-odds">
                      <div className="odds-wrap">
                        <Box className="odds-line">
                          <div className="market-odds__container">
                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button back">
                                <div className="price"> 303 </div>
                              </div>
                            </Box>

                            <Box className="selected">
                              <div className="bet-button lay">
                                <div className="price"> 345 </div>
                              </div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled lay"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled lay"></div>
                            </Box>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <Betslip />
                </Box>
                <Box sx={{
                  border:"1px solid #f2f2f2"
                }}>
                  <div className="market">
                    <Box className="market-title">
                      <div className="runner-details">
                        <span className="runner-name">Gloucestershire</span>

                        <Box className="pnl" _nghost-hos-c146="">
                          <span  />
                        </Box>
                      </div>
                    </Box>

                    <div className="odds market-odds">
                      <div className="odds-wrap">
                        <Box>
                          <div className="market-odds__container">
                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button back">
                                <div className="price"> 29 </div>
                              </div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button lay">
                                <div className="price"> 33 </div>
                              </div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled lay"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled lay"></div>
                            </Box>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
              
            </div>
          </section>
        </Box>
      </div>
    </div>
  );
};

export default Matchodds;
