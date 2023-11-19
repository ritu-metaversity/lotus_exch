import { DatePicker } from "antd"
import "./AccountStatementDesk.css"
import dayjs from "dayjs"
import moment from "moment";
import { useEffect, useState } from "react";
import { useAccountStatmentMutation } from "../../../state/apis/main/apiSlice";
const dateFormat = "YYYY-MM-DD";
import SearchIcon from '@mui/icons-material/Search';
const AccountStatementDesk = () => {
  const date = new Date();
  const futureDate = date.getDate() - 60;
  date.setDate(futureDate);
  const defaultValue = moment().subtract(7, "days").format("YYYY-MM-DD");
  const currentValue = moment().format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(defaultValue);
  const [endDate, setEndDate] = useState(currentValue);
  console.log(startDate, endDate, "sdffdsfewfew");

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
        <div className="total_amount_amount_pnl">Total P&L: <span className="total_PandL"> 0.00</span></div>
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
                    className="text-left">
                    P&L
                  </th>
                  <th
                    role="columnheader"
                    className="text-left">
                    Credit Limit
                  </th>
                  <th
                    role="columnheader"
                    className="text-left">
                    Balance
                  </th>
                </tr>
              </thead>

              <tbody>
                {AccountStatementRespone?.data?.dataList?.length &&
                  AccountStatementRespone?.data?.dataList?.map((item: any) => {
                    return (
                      <tr role="row">
                        <td style={{ height: "30px" }}
                          className="text-left withdraw-data">
                          {item?.date}
                        </td>
                        <td style={{ height: "30px" }}
                          className="text-left withdraw-data">
                          {item?.remark}
                        </td>
                        <td style={{ height: "30px" }}
                          className="text-left withdraw-data">
                          {item?.pts}
                        </td>
                        <td
                          style={{ height: "30px" }}
                          className="text-left withdraw-data">
                          N/A
                        </td>
                        <td style={{}}
                          className="text-left withdraw-data">
                          N/A
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </section>

    </div >
  )
}

export default AccountStatementDesk