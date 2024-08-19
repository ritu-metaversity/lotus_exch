import type { FC } from 'react';
import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import ChangePasswordMob from '../../Mobile/ChangePassword/ChangePasswordMob'
import type { Props } from '../orderList/OrderList'

const SettingsDesk:FC<Props> = ({userData}) => {
    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Settings" userData={userData}/>
            <Box sx={{
                height: "99px",
                width:"350px",
            }}>
                <ChangePasswordMob />

            </Box>
        </div>
    )
}

export default SettingsDesk