import type { FC } from "react";
import React, { useEffect, useState } from "react";
import HeadingCasinoCesk from "../LiveCasinoDesk/HeadingCasinoCesk/HeadingCasinoCesk";
import StartDateEndDate from "../../../Common/Desktop/StartDateEndDate/StartDateEndDate";
import BattingPLData from "./BattingPLData";
import { Box } from "@mui/material";
import type { Props } from "../orderList/OrderList";
import { useGetProfitLossMutation } from "../../../utils/Services/authService/sportApi";
import moment from "moment";

const BettingPL: FC<Props> = ({ userData }) => {
    const [date, setData] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });

    const [getProfitLoss, { data: profitLoss }] = useGetProfitLossMutation();


    useEffect(() => {
        getProfitLoss({
            page: 1,
            sportId: 0,
            fromDate: moment(date?.startDate).format("YYYY-MM-DD"),
            toDate: moment(date?.endDate).format("YYYY-MM-DD"),
        })
    }, [])

    const handleSearch = () => {
        getProfitLoss({
            page: 1,
            sportId: 0,
            fromDate: moment(date?.startDate).format("YYYY-MM-DD"),
            toDate: moment(date?.endDate).format("YYYY-MM-DD"),
        });
    };

    return (
        <div className="app-casino-main">
            <HeadingCasinoCesk name="Betting Profit and Loss" userData={userData} />
            <Box
                sx={{
                    height: "99px",
                }}
            >
                <StartDateEndDate
                    setData={setData}
                    date={date}
                    handleSearch={handleSearch}
                />
            </Box>
            <BattingPLData  profitLoss={profitLoss?.data}/>
        </div>
    );
};

export default BettingPL;