import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeading from '../../../Component/PageHeading'
import { DateRangePicker } from 'react-date-range';

const ProfitandLossMob = () => {
    const handleSelect = (ranges) =>{
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }
    return (
        <Box
            sx={{
                paddingInline: "12px",
                paddingTop: "12px",
            }}
        >
            <PageHeading name="Betting Profit & Loss" />

            <DateRangePicker
                // ranges={[selectionRange]}
                // onChange={handleSelect}
            />
            <Box className="content-open-bets " sx={{
                pb: 3
            }}>
                <Typography sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Lato,sans-serif"
                }}>There are no settled bets in the last 7 days. </Typography>
            </Box>
        </Box>
    )
}

export default ProfitandLossMob