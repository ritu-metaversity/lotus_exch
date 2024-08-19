import type { FC, SetStateAction } from "react";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.scss";
import { Box, Button, Typography } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import type { Dispatch } from "@reduxjs/toolkit";
interface Props{
    setData: any,
    date:any,
    handleSearch: () => void
}

const StartDateEndDate: FC<Props> = ({setData, date, handleSearch}) => {
    // const [dateRange, setDateRange] = useState({
    //     startDate: new Date(),
    //     endDate: new Date(),
    //   });

    return (
        <Box sx={{ display: "flex", marginTop:"5px"}}>
            <Box sx={{ marginRight: "20px" }}>
                <Typography sx={{ marginBottom: "10px" }}>From</Typography>
                <DatePicker
                    selected={date?.startDate}
                    onChange={(date) =>
                        setData((prev) => ({ ...prev, startDate: date || new Date() }))
                      }
                    dateFormat="dd/mm/yyyy"
                    className="custom-datepicker"
                />
            </Box>
            <Box sx={{ marginRight: "20px" }}>
                <Typography sx={{ marginBottom: "10px" }}>To</Typography>
                <DatePicker
                    selected={date?.endDate}
                    onChange={(date) =>
                        setData((prev) => ({ ...prev, endDate: date || new Date() }))
                      }
                    dateFormat="dd/mm/yyyy"
                    className="custom-datepicker"
                />
            </Box>
            <Box sx={{
                marginTop:"30px"
            }}>
                <Button
                    sx={{
                        backgroundColor: "#ffc629",
                        color: "#fff",
                        borderBottomColor: "#f5b400",
                        borderRightColor: "#f5b400",
                        borderBottom: "2px solid #f5b400",
                        borderRight: "2px solid #f5b400",
                        borderRadius: "3px",
                        fontSize: "12px",
                        minHeight: "26px",
                        padding: "0px",
                        textTransform: "capitalize",
                        '&:hover': {
                            backgroundColor: "#ffc629",
                        }
                    }}
                    onClick={handleSearch}
                >
                    <IoSearchSharp style={{
                        fontSize: "15px"
                    }} />

                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default StartDateEndDate;
