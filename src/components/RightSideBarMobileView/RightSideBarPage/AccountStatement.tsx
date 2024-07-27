import { useEffect, useState } from "react"
import "./AccountStatement.css"
import moment from "moment";
import { useAccountStatmentMutation, useSearchBetMarketAndUserMutation } from "../../../state/apis/main/apiSlice";
import { Dialog, IconButton, Tooltip } from "@mui/material";


const AccountStatement = () => {


    const defaultValue = moment().subtract(7, "days").format("YYYY-MM-DD");
    const currentValue = moment().format("YYYY-MM-DD");
    const [toDate, setToData] = useState(currentValue)
    const [formData, setFormData] = useState(defaultValue)

    const [showFilter, setShowFilter] = useState(false)

    // modal
    const [open, setOpen] = useState(false);
    const [radiobtnnnn, setRadiobtnnnn] = useState("1")
    const [accountResultMatchId, setAccountResultMatchId] = useState()
    const [accountResult, setAccountResult] = useState([])
    const [accountResultDetails, setAccountResultDetails] = useState({ vl1: "", vl2: "" })
    const [accountResultDatatotalWin, setAccountResultDatatotalWin] = useState()
    const [accountResultDatatotalBets, setAccountResultDatatotalBets] = useState()



    const [trigerrrrr, { data: BetMarket }] = useSearchBetMarketAndUserMutation()

    useEffect(() => {
        setAccountResult(BetMarket?.data?.betList)

    }, [BetMarket])
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


    useEffect(() => {
        setAccountResult(BetMarket?.data?.betList)
        setAccountResultDatatotalBets(BetMarket?.data?.totalBets)
        setAccountResultDatatotalWin(BetMarket?.data?.totalStake)
    }, [])

    const date = new Date();
    const futureDate = date.getDate() - 60;
    date.setDate(futureDate);


    const handleFilterShow = () => {
        if (showFilter === false) {
            setShowFilter(true)
        } else {
            setShowFilter(false)

        }
    }
    const [triger, { data: AccountStatementRespone }] = useAccountStatmentMutation()
    console.log(AccountStatementRespone?.data?.dataList, "AccountStatementRespone");
    useEffect(() => {
        let data = {
            "noOfRecords": 100,
            "index": 0,
            "fromDate": formData,
            "toDate": toDate,
            "type": 1
        }
        triger(data)
    }, [])

    const handleApplyFilter = () => {
        let data = {
            "noOfRecords": 100,
            "index": 0,
            "fromDate": formData,
            "toDate": toDate,
            "type": 1
        }
        triger(data)
        setShowFilter(false)
    }
    // https://api.247365.exchange/admin-new-apis/enduser/account-statement
    // {"noOfRecords":100,"index":0,"fromDate":"2023-10-03","toDate":"2023-10-17","type":1}
    return (
        <div>
            <div className="page-title-wrapper">
                <h2 className="page-title">Account Statement</h2>
            </div>


            <div className="account-statement-page__filter-content">

                <button className="filter-button false" onClick={handleFilterShow}>
                    {showFilter === true ?
                        <img src="https://lotus365.co/static/media/close1.1d4a4636.svg" className="imgg_for_search_filter" />
                        :
                        <img src="https://lotus365.co/static/media/filter1.161eb676.svg" className="imgg_for_search_filter" />
                    }
                    Filter</button>
                {showFilter === true ?


                    <>
                        <div className="account-statement-page__filter-content">

                            <div className="account-statement-page__filters-date-input">
                                <span className="Date_from_accountStatment">Date from:</span>
                                <input type="date" value={formData} className="input_fielDate_from_accountStatment"
                                    onChange={(e) => setFormData(e.target.value)}

                                />
                            </div>

                            <div className="account-statement-page__filters-date-input" style={{ marginTop: "16px" }}>
                                <span className="Date_from_accountStatment">Date to:</span>

                                <input type="date" value={toDate} className="input_fielDate_from_accountStatment"
                                    onChange={(e) => setToData(e.target.value)}

                                />
                            </div>
                            <button className="account-statement-page__date-search-button" onClick={handleApplyFilter}>
                                <span>Apply</span>
                            </button>
                        </div>


                    </>
                    : ""
                }
            </div>
            {
                AccountStatementRespone?.data?.dataList.map((item: any) =>

                    <div className="account-statement-page__list-row">
                        <div className="account-statement-page__content-group" onClick={() => handleChangeesss(item?.marketid, item?.remark, item?.date)}>
                            <div className="account-statement-page__item">
                                <div>
                                    <div className="account-statement-page__item__remark">
                                        {/* Karnataka vs. Tamil Nadu */}
                                        {item?.remark}
                                    </div>
                                    <div className="account-statement-page__item__right-side account-statement-page__item__balanse" style={{ fontWeight: "900" }}>
                                        Bal. {item?.pts}
                                    </div>
                                </div>
                                <div>
                                    <div className="account-statement-page__item__title">Date</div>
                                    <div className="account-statement-page__item__right-side data">
                                        <span className="date">{item?.date}</span>
                                        {/* <span className="time">13:02:23</span> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="account-statement-page__item__title">Description</div>
                                    <div className="account-statement-page__item__right-side">
                                        Betting P&L
                                    </div>
                                </div>
                                <div>
                                    <div className="account-statement-page__item__title">P&amp;L</div>
                                    {item?.debit < 0 ?


                                        <div className="account-statement-page__item__right-side" style={{ color: "red" }}>
                                            <img src="https://lotus365.co/static/media/arrow-red.89dd35bf.svg" />
                                            {item?.debit}

                                        </div>
                                        :
                                        <div className="account-statement-page__item__right-side green" >
                                            <img src="https://lotus365.co/static/media/arrow-grean.a3d12544.svg" />
                                            {item?.credit}
                                        </div>
                                    }
                                </div>
                                <div>
                                    <div className="account-statement-page__item__title">Credit Limit</div>
                                    <div className="account-statement-page__item__right-side">-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            {/* Account statement */}
            <Dialog
                onClose={() => {
                    setOpen(false)
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
                            <span>Total Bets: <span style={{ color: "green" }}>{accountResultDatatotalBets}</span></span>
                            <span>Total Amount: <span style={{ color: "green" }}>{accountResultDatatotalWin}</span></span>
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
                                        <td colSpan={8} className="ldg-tbl-td match-value-box-color" style={{ color: "red" }}>

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

export default AccountStatement