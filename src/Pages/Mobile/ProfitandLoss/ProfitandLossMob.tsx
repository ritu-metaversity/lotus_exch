import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeading from '../../../Component/PageHeading'
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import CustomDatePicker from '../../../Common/CustomDatePicker';

const ProfitandLossMob = () => {
    const [state, setState] = useState({
        selection: {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        },
        compare: {
            startDate: new Date(),
            endDate: addDays(new Date(), 3),
            key: 'compare'
        }
    });
    return (
        <Box
            sx={{
                paddingInline: "12px",
                paddingTop: "12px",
            }}
        >
            <PageHeading name="Betting Profit & Loss" />

            {/* <DateRangePicker
                onChange={item => setState({ ...state, ...item })}
                months={1}
                // minDate={addDays(new Date(), -30)}
                // maxDate={addDays(new Date(), 30)}
                direction="vertical"
                scroll={{ enabled: true }}
                ranges={[state.selection, state.compare]}
            />; */}
            <CustomDatePicker />
            <Box className="content-open-bets " sx={{
                pb: 3
            }}>
                <Typography sx={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "14px",
                    fontFamily: "Lato,sans-serif"
                }}>There are no settled bets in the last 7 days. </Typography>
            </Box>
        </Box>
    )
}

export default ProfitandLossMob