import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeading from '../../../Component/PageHeading'

const ProfitandLossMob = () => {
    return (
        <Box
            sx={{
                paddingInline: "12px",
                paddingTop: "12px",
            }}
        >
            <PageHeading name="Betting Profit & Loss" />


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