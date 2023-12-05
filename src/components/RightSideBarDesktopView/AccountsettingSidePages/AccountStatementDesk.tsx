import { DatePicker } from "antd"
import "./AccountStatementDesk.css"
import dayjs from "dayjs"
import moment from "moment";
import { useEffect, useState } from "react";
import { useAccountStatmentMutation, useSearchBetMarketAndUserMutation } from "../../../state/apis/main/apiSlice";
const dateFormat = "YYYY-MM-DD";
import { Dialog, IconButton, Tooltip } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
const AccountStatementDesk = () => {
  const date = new Date();
  const [trigerrrrr, { data: BetMarket }] = useSearchBetMarketAndUserMutation()

  const futureDate = date.getDate() - 60;
  date.setDate(futureDate);
  const [open, setOpen] = useState(false);
  const [accountResultDetails, setAccountResultDetails] = useState({ vl1: "", vl2: "" })
  const [accountResultMatchId, setAccountResultMatchId] = useState()
  const [radiobtnnnn, setRadiobtnnnn] = useState("1")
  const [accountResult, setAccountResult] = useState([])

  const [accountResultDatatotalWin, setAccountResultDatatotalWin] = useState()
  const [accountResultDatatotalBets, setAccountResultDatatotalBets] = useState()
  console.log();

  const defaultValue = moment().subtract(7, "days").format("YYYY-MM-DD");
  const currentValue = moment().format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(defaultValue);
  const [endDate, setEndDate] = useState(currentValue);
  console.log(startDate, endDate, "sdffdsfewfew");
  useEffect(() => {
    setAccountResult(BetMarket?.data?.betList)

  }, [BetMarket])
  useEffect(() => {
    setAccountResult(BetMarket?.data?.betList)
    setAccountResultDatatotalBets(BetMarket?.data?.totalBets)
    setAccountResultDatatotalWin(BetMarket?.data?.totalStake)
  }, [])
  const [triger, { data: AccountStatementRespone }] = useAccountStatmentMutation()
  console.log(AccountStatementRespone?.data?.dataList, "AccountStatementRespone");
  useEffect(() => {
    let data = {
      "noOfRecords": 100,
      "index": 0,
      "fromDate": startDate,
      "toDate": endDate,
      "type": 1,
    }
    triger(data)
  }, [])

  const StartDateValue = (date: any, dateString: any) => {
    console.log(date, dateString, "dffssdfsdfsd");

    setStartDate(dateString);
  };

  const EndDateValue = (date: any, dateString: any) => {
    console.log(date, dateString, "dffssdfsdfsd");
    setEndDate(dateString);
  };
  const handleSearch = () => {
    let data = ({
      // fromDate: startDate,
      // index: 0,
      // isdeleted: false,
      // noOfRecords: 100,
      // toDate: endDate,
      // sportType: "1"
      "noOfRecords": 100,
      "index": 0,
      "fromDate": startDate,
      "toDate": endDate,
      "type": 1
    })
    triger(data)

  }
  const handleradiobtn = async (vl: any) => {
    setRadiobtnnnn(vl)
    let dataaaa = {
      betType: vl,
      marketId: accountResultMatchId,
      userId: ""
    }
    trigerrrrr(dataaaa);
    // if (response) {
    //     setAccountResult(response?.data?.betList)
    // }
  }
  const handleChangeesss = async (vl: any, vl1: any, vl2: any) => {
    setOpen(true)
    setAccountResultMatchId(vl)
    let dataaaa = {
      betType: 1,
      marketId: vl,
      userId: ""
    }
    trigerrrrr(dataaaa);
    // if (response) {
    //     console.log(response?.data, "dfsdffasdfa");

    //     setAccountResult(response?.data?.betList)
    //     setAccountResultDatatotalBets(response?.data?.totalBets)
    //     setAccountResultDatatotalWin(response?.data?.totalStake)
    // }
    setAccountResultDetails({ vl1: vl1, vl2: vl2 })
  }

  return (
    <div className="maindiv_for_accountstatment">
      <div className="mindiv_for_accountStatment_name">
        <span className="annount_statement">Account Statement</span>
      </div>
      <div className="betHeading_datepickerDesk">
        <div className="mybetsssss">
          <div className="date_piker_from_tooooo">

            <label className="datePicker_from">From:</label>
            <div className="datePicker_from_wrapper" aria-disabled="true">
              <DatePicker
                className=" startDateNew"
                defaultValue={dayjs(startDate)}
                format={dateFormat}
                onChange={StartDateValue}
                disabledDate={(d) =>
                  !d ||
                  d.isBefore(dayjs().subtract(2, "month")) ||
                  d.isAfter(dayjs())
                }
              />
            </div>
          </div>
          <div className=" date_piker_from_tooooo" style={{ marginLeft: "-18px" }}>
            <label className="datePicker_tooo">To:</label>
            <div className="datepicker_toooo_wrapper">
              <DatePicker
                className=" startDateNew"
                defaultValue={dayjs(endDate)}
                format={dateFormat}
                onChange={EndDateValue}
                disabledDate={(d) =>
                  !d ||
                  d.isBefore(dayjs().subtract(2, "month")) ||
                  d.isAfter(dayjs())
                }
              />

            </div>
          </div>

          <button className="MyOpenBets__page-menu" onClick={handleSearch}>
            <SearchIcon /> Search
          </button>

        </div>
      </div>
      <div className="total_amount_amount">
        {/* <div className="total_amount_amount_pnl">Total P&L: <span className="total_PandL"> 0.00</span></div> */}
      </div>
      <section className="OpenBetsTable">
        <div className="OpenBetsTable__table">
          <div className="table-responsive withdrow-table" >
            <table
              role="table"
              className="table b-table table-bordered">
              <thead>
                <tr role="row" className="account-detail">
                  <th
                    role="columnheader"
                    className="text-left ">
                    Date
                  </th>
                  <th
                    role="columnheader"
                    className="text-left ">
                    Description
                  </th>
                  <th
                    role="columnheader"
                    className="text-left" style={{ textAlign: "end" }}>
                    P&L
                  </th>
                  <th
                    role="columnheader"
                    className="text-left" style={{ textAlign: "center" }}>
                    Credit Limit
                  </th>
                  <th
                    role="columnheader"
                    className="text-left"
                  //  style={{ textAlign: "end" }}
                  >
                    Balance
                  </th>
                </tr>
              </thead>

              <tbody className="my_bet">
                {AccountStatementRespone?.data?.dataList?.length ?
                  AccountStatementRespone?.data?.dataList?.map((item: any) => {
                    return (
                      <tr role="row " onClick={() => handleChangeesss(item?.marketid, item?.remark, item?.date)}>
                        <td style={{ height: "30px" }}
                          className="text-left withdraw-data">
                          {item?.date}
                        </td>
                        <td style={{ height: "30px", width: "443px" }}
                          className="text-left withdraw-data">
                          {item?.remark}
                          {item?.date}
                        </td>
                        {/* <td style={{ height: "30px" }}
                                                        className="text-left withdraw-data">
                                                        N/A
                                                    </td> */}
                        <td

                          style={{
                            textAlign: "end",
                            height: "30px"
                          }}
                          className="text-left withdraw-data">
                          {item?.debit < 0 ?

                            <span style={{ color: "red" }}>{item?.debit}</span>
                            :
                            <span style={{ color: "green" }}>{item?.credit}</span>
                          }

                        </td>
                        <td style={{ textAlign: "center" }}
                          className="text-left withdraw-data" >

                          -
                        </td>
                        <td
                          style={{ color: "green" }}
                          className="text-left withdraw-data">
                          {item?.pts < 0 ?
                            <span style={{ color: "red" }}>
                              {item?.pts}
                            </span>
                            :
                            <span style={{ color: "green" }}>
                              {item?.pts}
                            </span>
                          }
                        </td>
                      </tr>
                    )
                  })

                  :
                  <tr role="row ">
                    <td style={{
                      height: "30px", textAlign: "center",
                      color: "red",
                      fontWeight: "600"
                    }} colSpan={5}
                      className="text-left withdraw-data">
                      NO DATA FOUND
                    </td>
                  </tr>
                }
              </tbody>

            </table>
          </div>
        </div>
      </section >
      <Dialog
        onClose={() => {{
          setOpen(false),setRadiobtnnnn("1")}
        }}
        open={open}
        fullWidth
        maxWidth={"md"}
      >
        <div className="modall_pageeee">

          <div className="modalll_title" >
            <span>Result</span>
            <span onClick={() => {
              setOpen(false)
            }} style={{ cursor: "pointer" }}>X</span>

          </div>
          <div className="modalll_bodyyy">
            <div className="modalll_bodyyy_title">{accountResultDetails?.vl1}</div>
            <div className="modalll_bodyyy_title"><b >Game Time:</b> <span>{accountResultDetails?.vl2}</span></div>
            <div className="modalll_bodyyy_title">
              <input type="radio" onChange={() => handleradiobtn("1")} checked={radiobtnnnn === "1" ? true : false} />
              <label>All</label>
              <input type="radio" onChange={() => handleradiobtn("2")} checked={radiobtnnnn === "2" ? true : false} />
              <label>Back</label>
              <input type="radio" onChange={() => handleradiobtn("3")} checked={radiobtnnnn === "3" ? true : false} />
              <label>Lay</label>
              {/* <input type="radio" onChange={() => handleradiobtn("4")} />
              <label>Deleted</label> */}
            </div>
            <div className="modalll_bodyyy_title">
              <span>Total Bets: <span style={{ color: "green" }}>{BetMarket?.data?.totalBets}</span></span>
              <span>Total Amount: <span style={{ color: "green" }}>{BetMarket?.data?.totalStake}</span></span>
            </div>
          </div>
          <div className="modal_table_container">

            <table style={{ width: "100%", border: "1px solid" }}>
              <thead>
                <tr className="modal_table_header_title">
                  <th className="modal_table_head">Nation</th>
                  <th className="modal_table_head width_for_head">Rate</th>
                  <th className="modal_table_head width_for_head">Bhav</th>
                  <th className="modal_table_head width_for_head">Amount</th>
                  <th className="modal_table_head width_for_head">Win</th>
                  <th className="modal_table_head width_for_head">Date</th>
                  <th className="modal_table_head width_for_head">Ip Address</th>
                  <th className="modal_table_head width_for_head">Browser Details</th>
                </tr>
              </thead>
              <tbody>
                {accountResult?.length > 0 ?

                  accountResult?.map((item: any) => {
                    return (<tr onClick={() => setOpen(true)}>
                      <>
                        {item?.isback === true ?
                          <td className="modal_table_headdddddblck" >{item?.selectionname}</td>
                          :

                          <td className="modal_table_headdddddlay" >{item?.selectionname}</td>
                        }
                        <td className="modal_table_head" >
                          {Number(item?.pricevalue).toFixed(2)}
                        </td>
                        <td className="modal_table_head" >{Number(item?.odds).toFixed(2)}</td>
                        <td className="modal_table_head" >{item?.stack}</td>
                        <td className="modal_table_head" ><span style={{ color: item?.netpnl <= 0 ? "red" : "green" }}>{Number(item?.netpnl).toFixed(2)}</span></td>
                        <td className="modal_table_head" >{item?.matchedtime}</td>
                        <td className="modal_table_head" >{item?.ipAddress === null ? <span style={{ fontWeight: 600 }}>N/A</span> : item?.ipAddress}</td>


                        <td className="modal_table_head" >
                          {item?.deviceInfo === null ? <span style={{ fontWeight: 600 }}>N/A</span> :
                            <Tooltip title={item?.deviceInfo}>
                              <IconButton style={{
                                fontSize: "18px",
                                color: "black"
                              }}>
                                Detail
                              </IconButton>
                            </Tooltip>
                          }
                        </td>
                      </>
                    </tr>
                    )
                  }) :
                  <tr>
                    <td colSpan={8} className="ldg-tbl-td match-value-box-color" style={{ color: "red", textAlign: "center" }}>

                      No data found
                    </td>
                  </tr>


                }
              </tbody>



            </table>
          </div>

        </div>
      </Dialog>
    </div >
  )
}

export default AccountStatementDesk