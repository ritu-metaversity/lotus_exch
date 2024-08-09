import { Box, Typography } from '@mui/material'
import React from 'react'

const BattingPLData = () => {
    return (
        <Box>
            <Typography sx={{fontSize:"16px", fontWeight: "bold"}}>Total P&L: <span className='-positive'> 0.00</span></Typography>
            <table className="listing order_list">
                <thead>
                    <tr>
                        <th style={{textAlign:"left"}}>Market</th>
                        <th>Start time</th>
                        <th>Settled time</th>
                        <th className="numeric">Comm.</th>
                        <th className="numeric ">Net Win</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </Box>
    )
}

export default BattingPLData