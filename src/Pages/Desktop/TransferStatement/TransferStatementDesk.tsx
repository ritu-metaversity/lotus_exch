import type { FC } from 'react';
import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import type { Props } from '../orderList/OrderList'

const TransferStatementDesk:FC<Props> = ({userData}) => {
    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Transfer Statement" userData={userData}/>
            <Box sx={{height: "99px"}}>
                {/* <StartDateEndDate /> */}
                <span >There have been no transfers in the last 180 days.</span>
                </Box>
            
        </div>
    )
}

export default TransferStatementDesk