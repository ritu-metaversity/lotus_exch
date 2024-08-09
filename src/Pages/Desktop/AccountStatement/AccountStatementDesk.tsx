import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import AccDataDesk from './AccDataDesk'

const AccountStatementDesk = () => {
  return (
    <div className="app-casino-main">
    <HeadingCasinoCesk name="Account Statement" />
    <Box sx={{height: "99px"}}><StartDateEndDate /></Box>
    <AccDataDesk />
</div>
  )
}

export default AccountStatementDesk