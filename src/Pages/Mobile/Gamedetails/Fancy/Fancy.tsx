import { Box } from "@mui/material";
import video from '../../../../img/videoplay.png'
import zero from '../../../../img/zero.png'
import stopwatch from '../../../../img/stop_watch.png'

const Fancy = () => {
  return (
    <div className="market-group">
      <Box className="stroke-group">
        <div className="nav-tabs-group-container not-stretched-tabs">
          <div className="nav-tab 33452602-1-0 active">Fancy</div>
        </div>
      </Box>

      <div>
        <Box>
          <section className="market-list-item">
            <div className="heading">
              <div className="title indicators-icon" style={{
                    justifyContent:"flex-end"
                }}>
                <Box className="icon_box" >
                  <p className="block"></p>
                  <p className="block">
                  <img src={video} alt="video player" width={"25px"}/>
                  </p>

                  <p className="block">
                  <img src={stopwatch} alt="video player" width={"25px"}/>
                  </p>

                  <p className="block">
                  <img src={zero} alt="video player" width={"25px"}/>
                  </p>
                </Box>
              </div>
              <div className="right-title-box" />
            </div>

            <div className="list-body distinct market-wrap">
              <Box className="list-item">
                <Box >
                  <div className="market">
                    <Box className="market-title">
                      <div className="runner-details with-ladder">
                        <span className="runner-name">1 Over Runs CSG</span>

                        <Box className="pnl">
                          <span />
                        </Box>

                        <Box className="icon">
                          <i className="icon-ladder disabled" />
                        </Box>
                      </div>
                    </Box>

                    <div className="odds market-odds">
                      <div className="odds-wrap">
                        <Box>
                          <div className="market-odds__container line-market">
                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button back">
                                <div className="price">7</div>

                                <div className="price">100</div>
                              </div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button lay">
                                <div className="price">6</div>

                                <div className="price">100</div>
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
          <section className="market-list-item">
            <div className="list-body distinct market-wrap">
              <Box className="list-item">
                <Box >
                  <div className="market" id="selection-9.2173366-2690721">
                    <Box className="market-title">
                      <div className="runner-details with-ladder">
                        <span className="runner-name">1 Over Runs DD</span>

                        <Box className="pnl">
                          <span />
                        </Box>

                        <Box className="icon">
                          <i className="icon-ladder disabled" />
                        </Box>
                      </div>
                    </Box>

                    <div className="odds market-odds">
                      <div className="odds-wrap">
                        <Box>
                          <div className="market-odds__container line-market">
                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected more-odds">
                              <div className="bet-button disabled back"></div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button back">
                                <div className="price">7</div>

                                <div className="price">100</div>
                              </div>
                            </Box>

                            <Box className="not-selected">
                              <div className="bet-button lay">
                                <div className="price">6</div>

                                <div className="price">100</div>
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

      <hr className="line-market-separator" />
    </div>
  );
};

export default Fancy;
