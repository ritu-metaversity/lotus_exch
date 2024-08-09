import React, { useState } from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import Matched from './Matched'
import { Grid } from '@mui/material'
import OrderListData from './OrderListData'

const OrderList = () => {
  const [pastActive, setPastActive] = useState(0);

  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk name="My Bets" />
      <Grid container sx={{
        height:"99px"
      }}>
        <Matched setPastActive={setPastActive} pastActive={pastActive}/>
        <StartDateEndDate />
      </Grid>

      <OrderListData  pastActive={pastActive}/>
    </div>
  )
}

export default OrderList