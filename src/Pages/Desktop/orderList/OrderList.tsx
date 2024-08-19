import type { FC } from 'react';
import React, { useEffect, useState } from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import Matched from './Matched'
import { Grid } from '@mui/material'
import OrderListData from './OrderListData'
import { useGetBetHistoryMutation } from '../../../utils/Services/authService/sportApi';
import moment from 'moment';
export interface Props {
  userData: User
}

const OrderList: FC<Props> = ({ userData }) => {
  const [pastActive, setPastActive] = useState(0);
  const [date, setData] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })
  const [getBetHistory, { data: betHistory }] = useGetBetHistoryMutation()


  const handleSearch = () => {
    getBetHistory({
      page_no: 1,
      sport_id: "4",
      from_date: moment(date?.startDate).format("YYYY-MM-DD"),
      to_date: moment(date?.endDate).format("YYYY-MM-DD"),
      bet_type: pastActive == 0 ?"M":"P",
      type: 1
    });
  }


console.log(pastActive, "pastActivepastActive")

  return (
    <div className="app-casino-main">
      <HeadingCasinoCesk name="My Bets" userData={userData} />
      <Grid container sx={{
        height: "99px"
      }}>
        <Matched setPastActive={setPastActive} pastActive={pastActive} />
        <StartDateEndDate setData={setData} date={date} handleSearch={handleSearch} />
      </Grid>

      <OrderListData pastActive={pastActive} betHistory={betHistory?.data?.data}/>
    </div>
  )
}

export default OrderList