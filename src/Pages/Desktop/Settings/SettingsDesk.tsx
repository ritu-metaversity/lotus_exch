import React from 'react'
import HeadingCasinoCesk from '../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk'
import { Box } from '@mui/material'
import ChangePasswordMob from '../../Mobile/ChangePassword/ChangePasswordMob'

const SettingsDesk = () => {
    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Settings" />
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