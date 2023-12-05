import { useEffect, useState } from "react"
import "./BettingProfitAndLoss.css"
import axios from "axios"
import { useActiveSportsListMutation, useGetAllCasionTypeQuery, useProfiteAndLossMatchWiseMutation } from "../../../state/apis/main/apiSlice"
import moment from "moment"
import { DatePicker } from "antd"
import dayjs from "dayjs"

const dateFormat = "YYYY-MM-DD";
import "./BettingProfitAndLoss.css"
const BettingProfitAndLoss = () => {

  // const [showFilter, setShowFilter] = useState(false)


  const { data: postCasion } = useGetAllCasionTypeQuery(undefined)
  const [trigerProfiteAndLossMatchWise, { data: resposeProfiteAndLossMatchWiseData }] = useProfiteAndLossMatchWiseMutation()
  const [trigerActiveSportsListData, { data: activeSportsListData }] = useActiveSportsListMutation(undefined)

  console.log(resposeProfiteAndLossMatchWiseData, activeSportsListData, postCasion, "resposeProfiteAndLossMatchWiseData");

  // const handleFilterShow = () => {
  //   if (showFilter === false) {
  //     setShowFilter(true)
  //   } else {
  //     setShowFilter(false)

  //   }
  // }
  // https://api.247365.exchange/admin-new-apis/report/profit-loss-match-wise
  // {"sportId":"4","matchId":"","fromDate":"2023-10-03","toDate":"2023-10-17","userId":"",
  // "index":1,
  // "noOfRecords":100,"totalPages":""}

  const [Active, setActive] = useState(1);
  const [gamesData, setGamesData] = useState<any>("");
  // const { activeSportsListData } = useSelector((state) => state.auth);
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [casinoList, setCasinoList] = useState<any>("");
  console.log(casinoList)
  const [casinoId, setCasinoId] = useState("");
  var curr = new Date();
  const timeBefore = moment(curr).subtract(14, "days").format("YYYY-MM-DD");
  const time = moment(curr).format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(timeBefore);
  const [endDate, setEndDate] = useState(time);
  //   const { id } = useParams();
  const token = localStorage.getItem("token");
  // const dispatch = useDispatch();
  const [sportidddd, setSportsiddd] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const [pageSports, setPageSports] = useState("");
  const [pageSportsName, setPageSportsName] = useState(false);
  const [casionMatch, setCasionMatch] = useState("");
  const [sportsMatchId, setSportsMatchId] = useState("");
  console.log(pageSportsName);

  const handleActive = (val1: any, val2: any) => {
    setActive(val1);
    setPageSports(val2);
  };

  useEffect(() => {
    if (Active === 1) {
      trigerActiveSportsListData({})
      setPageNumber(0)
    }
  }, [Active]);

  const handleSelectGame = (e: any) => {
    let inputValue = e.target.value;
    setPageSportsName(true);
    console.log(inputValue, "SCSDCDSCSDCSDC");

    setSportsiddd(inputValue);
    axios
      .get(
        `https://oddsapi.247idhub.com/betfair_api/active_match/${inputValue}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }

      )
      .then((res) => {
        setGamesData(res?.data?.data);
        console.log(res, "C2CDWEWFWE");

      });
    let d = new Date();
    d.setDate(d.getDate() - 14);

    let ProfitLossPayload = {
      sportId: inputValue,
      matchId: "",
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    trigerProfiteAndLossMatchWise(ProfitLossPayload)
  };

  const handleGameName = (e: any) => {
    let inputValue = e.target.value;
    let d = new Date();
    setSportsMatchId(inputValue);
    d.setDate(d.getDate() - 14);
    let ProfitLossPayload = {
      sportId: sportidddd,
      matchId: inputValue,
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    trigerProfiteAndLossMatchWise(ProfitLossPayload)
  };

  useEffect(() => {
    if (startDate !== "" && endDate !== "") {
      if (Active === 1) {
        let d = new Date();
        d.setDate(d.getDate() - 14);
        let ProfitLossPayload = {
          sportId: "4",
          matchId: "",
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        trigerProfiteAndLossMatchWise(ProfitLossPayload)
      } else {
        let d = new Date();
        d.setDate(d.getDate() - 14);
        let ProfitLossPayload = {
          sportId: "323334",
          matchId: "",
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        trigerProfiteAndLossMatchWise(ProfitLossPayload)
      }
    }
  }, [startDate, endDate, Active, pageNumber]);

  const StartDateValue = (dateString: any) => {
    setStartDate(dateString);
  };
  const EndDateValue = (dateString: any) => {
    setEndDate(dateString);
  };

  // const token = localStorage.getItem("TokenId");

  // const token = localStorage.getItem("TokenId");

  // useEffect(() => {
  //   const token = localStorage.getItem("TokenId");

  //   if (token) {

  //     triger();
  //   }
  // }, []);
  useEffect(() => {
    const id = {
      id: "323334",
      appUrl: window.location.hostname,
    };
    setCasinoId("323334");

    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types",

        id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }

      )
      .then((res: any) => {
        setCasinoList(res.data.data);
      });
  }, [Active]);

  useEffect(() => {
    axios
      .get(
        `https://oddsapi.247idhub.com/betfair_api/active_match/4`,
        {
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }

      )

      .then((res) => {
        console.log(res?.data?.data, "getberbrvw");
        setGamesData(res?.data?.data);
      });
  }, []);

  const handleCasino = (e: any) => {
    let inputValue = e.target.value;
    setCasinoId(inputValue);
    const id = {
      id: inputValue,
      appUrl: window.location.hostname,


    };
    axios
      .post(
        "https://api.247365.exchange/admin-new-apis/casino/casino-tables-by-types",
        id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }

      )
      .then((res) => {
        setCasinoList(res.data.data);
      });
    let ProfitLossPayload = {
      sportId: inputValue,
      matchId: "",
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    trigerProfiteAndLossMatchWise(ProfitLossPayload)
  };

  const handleCasinoMatch = (e: any) => {
    let inputValue = e.target.value;
    setCasionMatch(inputValue);
    // console.log(inputValue, "inputValue");
    let ProfitLossPayload = {
      sportId: casinoId,
      matchId: inputValue,
      fromDate: startDate,
      toDate: endDate,
      userId: "",
      index: pageNumber,
      noOfRecords: 100,
      totalPages: "",
    };
    trigerProfiteAndLossMatchWise(ProfitLossPayload)
  };

  //pagination
  // const handleDoubleLeft = (vl: any) => {
  //   if (vl === "doubleleft") {
  //     setPageNumber(1);
  //   } else if (vl === "sigleleft") {
  //     setPageNumber(pageNumber - 1);
  //   } else if (vl === "singleright") {
  //     setPageNumber(1 + pageNumber);
  //   } else {
  //     setPageNumber(PostprofitlossmatchwiseDatatata?.data?.totalRecord);
  //   }
  // };

  // console.log(casionMatch, "casionMatch");
  // console.log(
  //   PostprofitlossmatchwiseDatatata,
  //   "PostprofitlossmatchwiseDatatata"
  // );
  // console.log(sportidddd, "sportidddd");
  // console.log(pageNumber, "pageNumber");
  // console.log(endDate, "endDate");
  // console.log(startDate, "startDate");
  // console.log(casinoId, "casinoId");
  // console.log(casinoList, "casinoList");
  // console.log(gamesData, "gamesData");
  // console.log(Active, "Active");
  console.log(gamesData, "gamesData");

  useEffect(() => {
    // console.log(pageSports, "pageSportspageSports");
    if (pageSports === "Sports") {
      let ProfitLossPayload = {
        sportId: sportidddd ? sportidddd : 4,
        matchId: sportsMatchId,
        fromDate: startDate,
        toDate: endDate,
        userId: "",
        index: pageNumber,
        noOfRecords: 100,
        totalPages: "",
      };
      // console.log(ProfitLossPayload, "pageSportspageSports");

      trigerProfiteAndLossMatchWise(ProfitLossPayload)
    } else {
      if (pageSports === "casino") {
        let ProfitLossPayload = {
          sportId: casinoId,
          matchId: casionMatch,
          fromDate: startDate,
          toDate: endDate,
          userId: "",
          index: pageNumber,
          noOfRecords: 100,
          totalPages: "",
        };
        // console.log(ProfitLossPayload, "pageSportspageSports");

        trigerProfiteAndLossMatchWise(ProfitLossPayload)
      }
    }
  }, [pageSports]);

  console.log(resposeProfiteAndLossMatchWiseData?.data?.totalPnl, "klokjnhbgytfrdx");

  return (

    <div className="boxed-layout-wrapper" >
      <div className="pnl_jkshdsdvnd">

        <div className="pnl_div_main">

          <h2 className="page-title ">Betting Profit &amp; Loss</h2>
        </div>
      </div>

      <div className='wid-100 '>

        <>
          <>
            <div className="main-content" style={{ minHeight: "calc(100% - 163px)" }}>
              <div className="home-page mt-0">
                <div className="container-inner">
                  <div className='outer_box'>
                    <div className="main_for_sports">

                      <button

                        className="box_selection_time"
                        value={1}

                        onClick={() => handleActive(1, "Sports")}
                        style={{ backgroundColor: Active === 1 ? "#1f8067" : "#074938",color:"white" }}
                      >
                        Sport
                      </button>
                      <button

                        className="box_selection_time"
                        value={2}
                        onClick={() => handleActive(2, "casino")}
                        style={{ backgroundColor: Active === 2 ? "#1f8067" : "#074938",color:"white" }}
                      >
                        casino
                      </button>
                    </div>


                    {Active === 1 ? (
                      <div className="main_for_sports">
                        <select
                          className="box_selection_time"
                          // name="cars"
                          // id="cars"
                          onChange={handleSelectGame}
                        >
                          {/* <option value="">Select Sports</option> */}
                          {activeSportsListData?.data &&
                            activeSportsListData?.data
                            ? activeSportsListData?.data.map((item: any) => (
                              <option value={item?.sportId}>

                                {item?.sportName}
                              </option>
                            ))
                            : ""}{" "}
                        </select>

                        <select
                          className="box_selection_time"
                          name="cars"
                          id="cars"
                          onChange={handleGameName}
                        >
                          <option value="">Select Match</option>

                          {gamesData?.length > 0
                            ? gamesData.map((item: any) => {
                              return (
                                <option value={item?.matchId}>
                                  {item?.matchName}
                                </option>
                              );
                            })
                            : ""}
                        </select>
                      </div>
                    ) : (
                      <div className="main_for_sports">
                        <select
                          className="box_selection_time"
                          name="cars"
                          id="cars"
                          onChange={handleCasino}
                        >
                          {/* <option value="">Select Casino</option> */}

                          {postCasion?.data && postCasion?.data
                            ? postCasion?.data.map((el: any) => (
                              <option value={el?.id}>{el?.name}</option>
                            ))
                            : ""}
                        </select>
                        <select
                          className="box_selection_time "
                          name="cars"
                          id="cars"
                          style={{ marginLeft: "14px", }}
                          onChange={handleCasinoMatch}

                        >
                          <option value="">Select Match</option>

                          {casinoList?.length &&
                            casinoList.map((item: any) => {
                              return (
                                <option value={item.gameId}>{item?.gameName}</option>
                              );
                            })}
                        </select>
                      </div>
                    )}


                  </div>
                  {/* <div className="main_for_sports">
                    <DatePicker
                      className="box_selection_time"
                      defaultValue={dayjs(startDate)}
                      format={dateFormat}
                      onChange={StartDateValue}
                      disabledDate={(d) =>
                        !d ||
                        d.isBefore(dayjs().subtract(2, "month")) ||
                        d.isAfter(dayjs())
                      }
                    // style={{ width: "23.2%" }}
                    />
                    <DatePicker
                      className="box_selection_time"
                      defaultValue={dayjs()}
                      format={dateFormat}
                      onChange={EndDateValue}
                      disabledDate={(d) =>
                        !d ||
                        d.isBefore(dayjs().subtract(2, "month")) ||
                        d.isAfter(dayjs())
                      }
                    // style={{
                    //   width: "23.2%",
                    //   marginLeft: "4px"
                    // }}
                    />
                  </div> */}


                  <div className="mybetsssssPnl">
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
                    {/* 
                    <button className="MyOpenBets__page-menu" onClick={handleSearch}>
                      <SearchIcon /> Search
                    </button> */}

                  </div>



                  {/* fhjgfdfghkjiouytdrsdfghiuyftdgxhuiyfhdgxhuyighcv */}
                  <div className="betting-profit-and-loss-page__filters-sports-buttons-total">
                    {/* <ul className="betting-profit-and-loss-page__filters-sports-buttons-list">
                      <li className=" betting-profit-and-loss-page__filters-sport-button">
                        <span className="betting-profit-and-loss-page__filters-sport-button-name">
                          Cricket:
                        </span>
                        &nbsp;
                        <span className="negative-amount betting-profit-and-loss-page__filters-sport-amount">
                          -669.00
                        </span>
                      </li>
                    </ul> */}
                    <div className="active-button betting-profit-and-loss-page__filters-total">
                      <span>Total P&amp;L:</span>&nbsp; &nbsp;
                      {resposeProfiteAndLossMatchWiseData?.data === null ?


                        "0:00" :

                        <>
                          {resposeProfiteAndLossMatchWiseData?.data?.totalPnl <= 0 ?

                            <span className="negative-amount betting-profit-and-loss-page__filters-total-amount"

                              style={{
                                color: "#bf311c"
                              }}>

                              {resposeProfiteAndLossMatchWiseData?.data?.totalPnl}
                            </span>
                            :
                            <span className="negative-amount betting-profit-and-loss-page__filters-total-amount"

                              style={{
                                color: "green"
                              }}>

                              {resposeProfiteAndLossMatchWiseData?.data?.totalPnl}
                            </span>
                          }

                        </>

                      }
                    </div>
                  </div>












                  {/* 
  <DatePicker style={{width: "50%", height: "41px"}} onChange={handleStartDate}  />
  <DatePicker style={{width: "50%", height: "41px"}} onChange={handleEndDate} /> */}

                  <section className="betting-pnl pnlsection">





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
                                  Market
                                </th>
                                {/* <th
                                  role="columnheader"
                                  className="text-left ">
                                  Start time
                                </th>
                                <th
                                  role="columnheader"
                                  className="text-left">
                                  Settled time
                                </th> */}

                                <th
                                  role="columnheader"
                                  className="text-left">
                                  Start time
                                </th>
                                <th
                                  role="columnheader"
                                  className="text-left">
                                  Settled time
                                </th>
                                <th
                                  role="columnheader"
                                  className="text-left">
                                  Comm.
                                </th>
                                <th
                                  role="columnheader"
                                  className="text-left">
                                  Net Win
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {resposeProfiteAndLossMatchWiseData?.data?.market.length ?
                                resposeProfiteAndLossMatchWiseData?.data?.market.map((el: any) => {
                                  return (
                                    <tr role="row">
                                      <td style={{ height: "30px" }}
                                        className="text-left withdraw-data">
                                        {el?.matchName}
                                      </td>
                                      <td style={{ height: "30px" }}
                                        className="text-left withdraw-data">
                                        N/A
                                      </td>
                                      <td style={{ height: "30px" }}
                                        className="text-left withdraw-data">
                                        N/A
                                      </td>
                                      <td
                                        style={{ height: "30px", color: "green" }}
                                        className="text-left withdraw-data">
                                        {el?.commssionMila}
                                      </td>
                                      {el?.pnl > 0 ?
                                        <td style={{
                                          color: "green",
                                          fontSize: "12px",
                                          fontWeight: "800"

                                        }}
                                          className="text-left withdraw-data">
                                          {el?.pnl}
                                        </td>
                                        :
                                        <td style={{
                                          color: "red",
                                          fontSize: "12px",
                                          fontWeight: "800"

                                        }}
                                          className="text-left withdraw-data">
                                          {el?.pnl}
                                        </td>
                                      }

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
                    </section>




                    {/* <div className="mainDivFor dest_main_div">
                      {resposeProfiteAndLossMatchWiseData?.data &&
                        resposeProfiteAndLossMatchWiseData?.data?.market &&
                        resposeProfiteAndLossMatchWiseData?.data?.market.length > 0 ? (
                        resposeProfiteAndLossMatchWiseData?.data?.market.map((el: any) => (
                          <div className="dsfsfdfsd">
                            <div className="info">
                              <p className="m-b-0  game-name">
                                <Link
                                  to={`/match-details/${el?.matchId}`}
                                  className="betting-back"
                                >
                                  <b>{el?.matchName}</b>
                                </Link>
                              </p>
                              <p className="m-b-0">
                                <span>
                                  <b style={{ fontSize: "13px" }}>commssionMila : </b>{" "}
                                  <span style={{ fontSize: "13px" }}> {el?.commssionMila}</span>
                                </span>
                              </p>
                            </div>
                            <div className="pnl-titles">
                              <p style={{ fontSize: "13px" }} className="m-b-0">
                                <b>Net Win:</b>
                              </p>
                            </div>
                            <div className="pnl-numbers">
                              {el?.pnl < 0 ? (
                                <p className="m-b-0 negative">
                                  <b style={{ fontSize: "13px" }} >{el?.pnl}</b>
                                </p>
                              ) : (
                                <p style={{ color: "green" }}>
                                  <b style={{ fontSize: "13px" }} >{el?.pnl}</b>
                                </p>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="nodataforund">NO DATA FOUND</div>
                      )}
                    </div> */}
                  </section>
                </div>
              </div>
            </div>

          </>

        </>
      </div>
    </div >


  )
}

export default BettingProfitAndLoss