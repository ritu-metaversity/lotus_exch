import { Box, Typography } from '@mui/material'
import React from 'react'
import PageHeading from '../../../Component/PageHeading'

const TransferStatement = () => {
    return (
        <Box
            sx={{
                paddingInline: "12px",
                paddingTop: "12px",
            }}
        >
            <PageHeading name="Transfer Statement" />


            <Box className="content-open-bets " sx={{
                pb: 3
            }}>
                <Typography sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Lato,sans-serif"
                }}> There have been no transfers in the last 14 days.</Typography>
            </Box>
        </Box>
    )
}

export default TransferStatement