import type { FC } from 'react';
import React, { useEffect, useState } from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import StartDateEndDate from '../../../Common/Desktop/StartDateEndDate/StartDateEndDate'
import AccDataDesk from './AccDataDesk'
import type { Props } from '../orderList/OrderList'
import { useGetAccontStatementMutation } from '../../../utils/Services/authService/sportApi';

const AccountStatementDesk:FC<Props> = ({userData}) => {
  const [date, setData] = useState({
    startDate:new Date(), 
    endDate:new Date(),
  })

  const [getAccontStatement, {data:accStatement}] = useGetAccontStatementMutation();

  useEffect(()=>{
    getAccontStatement(date);
  }, [])

  const handleSearch = ()=>{
    getAccontStatement(date);
  }



  return (
    <div className="app-casino-main">
    <HeadingCasinoCesk name="Account Statement" userData={userData}/>
    <Box sx={{height: "99px"}}><StartDateEndDate setData={setData} date={date} handleSearch={handleSearch}/></Box>
    <AccDataDesk accData={accStatement?.data}/>
</div>
  )
}

export default AccountStatementDesk