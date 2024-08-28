import { Box, Typography } from '@mui/material'
import moment from 'moment';
import type { FC } from 'react';
import React from 'react'

interface Props {
    accData: Acc[]
}

const AccDataDesk: FC<Props> = ({ accData }) => {


    return (
        <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Total P&L: <span className='-positive'> 0.00</span></Typography>
            <table className="listing order_list">
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", width:"20%" }}>Date</th>
                        <th style={{ textAlign: "left" }} colSpan={2}>Description</th>
                        <th>P&L</th>
                        <th className="numeric">Credit Limit</th>
                        <th className="numeric ">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accData?.map((items) => {
                            const desData = items?.Narration?.split(" | ")
                            return (
                                <>
                                    <tr className="group">
                                        <td>{moment(items?.Sdate).format("DD/MM/YYYY")}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td style={{color:"#909090", marginLeft:"45px"}}>{moment(items?.Sdate).format("HH:MM:SS")}</td>
                                        <td style={{ textAlign: "left", width:"20%" }}>{desData[0]}</td>
                                        <td style={{ textAlign: "left" }}>{desData[1]} - {desData[2]} - {desData[3]}</td>
                                        <td style={{ textAlign: "right" }}>0</td>
                                        <td style={{ textAlign: "right" }}>{items?.Credit}</td>
                                        <td style={{ textAlign: "right" }}>{items?.balance}</td>
                                    </tr>
                                </>

                            )
                        })
                    }

                </tbody>
            </table>
        </Box>
    )
}

export default AccDataDesk