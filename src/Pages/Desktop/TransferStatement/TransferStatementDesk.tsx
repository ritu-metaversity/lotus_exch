import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'

const TransferStatementDesk = () => {
    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Transfer Statement" />
            <Box sx={{height: "99px"}}>
                {/* <StartDateEndDate /> */}
                <span >There have been no transfers in the last 180 days.</span>
                </Box>
            
        </div>
    )
}

export default TransferStatementDesk