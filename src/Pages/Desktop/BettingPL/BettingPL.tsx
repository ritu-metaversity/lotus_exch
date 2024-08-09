import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import BattingPLData from './BattingPLData'
import { Box } from '@mui/material'

const BettingPL = () => {
    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Betting Profit and Loss" />
            <Box sx={{
                height: "99px"
            }}>

                <StartDateEndDate />
            </Box>
            <BattingPLData />
        </div>
    )
}

export default BettingPL