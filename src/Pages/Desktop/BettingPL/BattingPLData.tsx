import { Box, Typography } from '@mui/material'
import moment from 'moment';
import type { FC } from 'react';
import React from 'react'

interface Props {
    profitLoss: ProfitLoss[]
}

const BattingPLData: FC<Props> = ({ profitLoss }) => {
    return (
        <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>Total P&L: <span className='-positive'> 0.00</span></Typography>
            <table className="listing order_list">
                <thead>
                    <tr>
                        <th style={{ textAlign: "left" }}>Market</th>
                        <th>Start time</th>
                        <th>Settled time</th>
                        <th className="numeric">Comm.</th>
                        <th className="numeric ">Net Win</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        profitLoss?.map((items) => {
                            return (
                                <tr>
                                    <td>{items?.EventName}</td>
                                    <td></td>
                                    <td>{moment(items?.settle_date).format("DD-MM-YYYY HH:MM:SS p")}</td>
                                    <td>{items?.Comm}</td>
                                    <td style={{ color: Number(items?.PnL) < 0 ? "red" : "green" }}>{items?.PnL}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Box>
    )
}

export default BattingPLData