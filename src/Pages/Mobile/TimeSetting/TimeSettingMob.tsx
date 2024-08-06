import React from 'react'
import PageHeading from '../../../Component/PageHeading'
import { Box } from '@mui/material'
import './style.scss'

const TimeSettingMob = () => {
    return (
        <Box
            sx={{
                paddingInline: "12px",
                paddingTop: "12px",
            }}
        >
            <PageHeading name="Time Setting" />


            <Box className="content-open-bets time_setting" >
                <div  className="page-content-box">
                    <div  className="clock">
                        <span  className="date">
                            August 6, 2024
                        </span>
                        <span  className="time">
                            13:31:35
                        </span>
                    </div>
                    <div  className="options">
                        <div  className="app-list">
                            <div  className="app-list-item">
                                <label  className="">
                                    {" "}
                                    System time - (GMT +00:00){" "}
                                    <input
                                        
                                        type="radio"
                                        name="zone"
                                        className="radio"
                                        defaultValue="server"
                                    />
                                </label>
                            </div>
                            <div  className="app-list-item">
                                <label  className="">
                                    {" "}
                                    Your device time - (GMT +05:30){" "}
                                    <input
                                        
                                        type="radio"
                                        name="zone"
                                        className="radio"
                                        defaultValue="browser"
                                    />
                                </label>
                            </div>
                            <div  className="app-list-item">
                                <label  className="-checked">
                                    {" "}
                                    India Standard time - (GMT +05:30){" "}
                                    <input
                                        
                                        type="radio"
                                        name="zone"
                                        className="radio"
                                        defaultValue="india"
                                    />
                                </label>
                            </div>
                            {/**/}
                        </div>
                    </div>
                </div>

            </Box>
        </Box>
    )
}

export default TimeSettingMob