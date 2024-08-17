import type { FC } from 'react';
import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './style.scss'

interface Props{
  marketData: any[]
}

const HeadingGame:FC<Props> = ({marketData}) => {
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
                  {marketData && marketData[0]?.matchName}
                </Typography>
                <Typography variant="subtitle1" className="competition">
                {marketData && marketData[0]?.series_name}
                </Typography>
              </Grid>
            </Grid>
            
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
