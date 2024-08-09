import { Box, Typography } from '@mui/material'
import React from 'react'

const AccDataDesk = () => {
    return (
        <Box>
            <Typography sx={{fontSize:"16px", fontWeight: "bold"}}>Total P&L: <span className='-positive'> 0.00</span></Typography>
            <table className="listing order_list">
                <thead>
                    <tr>
                        <th style={{textAlign:"left"}}>Date</th>
                        <th>Description</th>
                        <th>P&L</th>
                        <th className="numeric">Credit Limit</th>
                        <th className="numeric ">Balance</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </Box>
    )
}

export default AccDataDesk