import { Box, Typography } from '@mui/material'
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
                        <th style={{ textAlign: "left" }}>Date</th>
                        <th>Description</th>
                        <th>P&L</th>
                        <th className="numeric">Credit Limit</th>
                        <th className="numeric ">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accData?.map((items) => {
                            return (
                                <tr>
                                    <td>{items?.Sdate}</td>
                                    <td style={{ textAlign: "center" }}>{items?.Narration}</td>
                                    <td style={{ textAlign: "right" }}>0</td>
                                    <td style={{ textAlign: "right" }}>{items?.Credit}</td>
                                    <td style={{ textAlign: "right" }}>{items?.balance}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </Box>
    )
}

export default AccDataDesk