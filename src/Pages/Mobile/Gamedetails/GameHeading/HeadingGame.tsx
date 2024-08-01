import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './style.scss'

const HeadingGame = () => {
  return (
    <Box className="event-details">
      <Box className="other-event-details ignore-content-spacing in-play">
        <Box className="details">
          <Box className="main-detail-header">
            <Grid container alignItems="center" className="clock-title-box">
              <Grid item className="icon">
                <Box className="label">In Play</Box>
              </Grid>
              <Grid item className="event-title-box">
                <Typography variant="h5" className="event-title">
                  Surrey v Gloucestershire
                </Typography>
                <Typography variant="subtitle1" className="competition">
                  Metro Bank One Day Cup
                </Typography>
              </Grid>
            </Grid>
            {/* <Box className="match-stats-info">
              <Typography variant="body1" className="team" sx={{
                fontSize:"10px"
              }}>
                Gloucestershire: 51-0 (10.4 Ovs)
              </Typography>
              <Typography variant="body2" className="info">
                Surrey opt to bowl
              </Typography>
            </Box> */}
          </Box>
        </Box>
        <Box className="actions">
          <IconButton>
            <InfoOutlinedIcon className="show-rules icon-outline-info" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadingGame;
