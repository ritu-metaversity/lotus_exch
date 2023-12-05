import "./OpenBetsDeskTop.css"
import { useEffect, useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useActiveSportsListMutation, useBetHistoryMutation, useUnsettledBetMutation } from "../../../state/apis/main/apiSlice";

const dateFormat = "YYYY-MM-DD";
const OpenBetsDeskTop = () => {
	// const dispatch = useDispatch();
	const [matchid, setMatchId] = useState(4);
	const date = new Date();
	const futureDate = date.getDate() - 60;
	date.setDate(futureDate);
	const defaultValue = moment().subtract(7, 'days').format('YYYY-MM-DD');
	const currentValue = moment().format('YYYY-MM-DD');
	const [startDate, setStartDate] = useState(defaultValue);
	const [endDate, setEndDate] = useState(currentValue);
	const [current, setcurrent] = useState(true);
	const [gameSportCasion, setGameSportCasion] = useState('Sport');
	// const [gameSportCasionId, setGameSportCasionId] = useState(1)
	const [history, setHistory] = useState(false);
	const [unsettledbetmatchdata, setUnsettledbetmatchdata] = useState<any>({});

	// const [pageNumber, setPageNumber] = useState(0);

	const [trigerActiveSportsListData, { data: activeSportsListData }] =
		useActiveSportsListMutation(undefined);
	const [trigerBetHistory, { data: bethistorData }] =
		useBetHistoryMutation(undefined);

	const [triger, { data: unSettledBet }] = useUnsettledBetMutation();
	console.log(startDate, endDate, 'unSettledBet');

	useEffect(() => {
		trigerActiveSportsListData({});
	}, []);
	useEffect(() => {
		if (bethistorData?.data && bethistorData?.data?.dataList) {
			setUnsettledbetmatchdata(
				bethistorData?.data && bethistorData?.data?.dataList
			);
		}
	}, [bethistorData]);
	useEffect(() => {
		if (unSettledBet?.data && unSettledBet?.data?.dataList) {
			setUnsettledbetmatchdata(
				unSettledBet?.data && unSettledBet?.data?.dataList
			);
		}
	}, [unSettledBet]);
	console.log(unsettledbetmatchdata, 'unsettledbetmatchdata');

	const StartDateValue = (prop: any) => {
		console.log(prop, prop.format(dateFormat), 'dffssdfsdfsd');

		setStartDate(prop.format(dateFormat));
	};

	const EndDateValue = (prop: any) => {
		// console.log(date, dateString, 'dffssdfsdfsd');
		setEndDate(prop.format(dateFormat));
	};

	// useEffect(() => {
	//     // dispatch(getActiveSportList())
	// }, [])

	const handleGameName = (e: any) => {
		let inputValue = e.target.value;
		setMatchId(inputValue);
		// console.log(inputValue, "kjhytrds")
	};

	// const handleUnmatched = () => {
	//     if (unmatchedBets === true) {
	//         setUnmatchedBets(false);
	//     } else {
	//         setUnmatchedBets(true);
	//     }
	//     // console.log("ssjjk");
	// };

	// const handlematched = () => {
	//     if (matchedBets === true) {
	//         setmatchedBets(false);
	//     } else {
	//         setmatchedBets(true);
	//     }
	//     // console.log("ssjjk");
	// };

	useEffect(() => {
		let data = {
			betType: 1,
			index: 0,
			noOfRecords: 5,
			sportType: 1,
			isDeleted: 'false',
		};
		if (localStorage.getItem('token')) {
			triger(data);
		}
	}, [current]);

	const handleSelect = (vl: any) => {
		if (vl === 'selected1') {
			setcurrent(true);
			setHistory(false);
			setGameSportCasion('Sport');
		} else {
			setHistory(true);
			setcurrent(false);
			let data = {
				fromDate: startDate,
				index: 0,
				isdeleted: false,
				noOfRecords: 100,
				sportId: 4,
				toDate: endDate,
			};
			trigerBetHistory(data);
		}
	};
	const [historyError, setHistoryError] = useState('false');

	const handleSearch = () => {
		if (startDate !== '' && endDate !== '' && matchid !== 0) {
			setHistoryError('false');

			let data = {
				fromDate: startDate,
				index: 0,
				isdeleted: false,
				noOfRecords: 100,
				sportId: matchid,
				toDate: endDate,
				sportType: '1',
			};
			// triger(data)
			trigerBetHistory(data);
			//   dispatch(postBetHistory(data))
		} else {
			setHistoryError('true');
		}
	};

	const handleSeleteGame = (vl: any) => {
		if (vl === 'Sport') {
			setGameSportCasion('Sport');
			// setGameSportCasionId(1)
			let data = {
				betType: 1,
				index: 0,
				noOfRecords: 5,
				sportType: 1,
				isDeleted: 'false',
			};
			triger(data);
			//   dispatch(Postunsettleddddd(data));
		} else {
			setGameSportCasion('Casion');
			// setGameSportCasionId(2)
			let data = {
				betType: 1,
				index: 0,
				noOfRecords: 5,
				sportType: 2,
				isDeleted: 'false',
			};
			triger(data);
			//   dispatch(Postunsettleddddd(data));
		}
	};

	return (
		<div className='mid-pane'>
			<h1 className='betHeading'>My Bets</h1>
			<div className='betHeading_main'>
				<div className='betHeading_pastcurrnt'>
					<div
						className={`Past_Current ${current === true ? 'selected' : ''}`}
						onClick={() => handleSelect('selected1')}
					>
						Current
					</div>
					<div
						className={`Past_Current ${history === true ? 'selected' : ''}`}
						onClick={() => handleSelect('selected2')}
					>
						Past
					</div>
					{current === false ? (
						''
					) : (
						<>
							<div
								className={`Past_Current ${gameSportCasion === 'Sport' ? 'selecteddddd' : ''
									}`}
								onClick={() => handleSeleteGame('Sport')}
							>
								Sports
							</div>
							<div
								className={`Past_Current ${gameSportCasion === 'Casion' ? 'selecteddddd' : ''
									}`}
								onClick={() => handleSeleteGame('Casion')}
							>
								{' '}
								casino
							</div>
						</>
					)}
					{history === true ? (
						<select
							className='item selected'
							name='cars'
							id='cars'
							onChange={handleGameName}
							value={matchid}
						>
							<option value=''>Select Match</option>

							{activeSportsListData?.data?.length > 0
								? activeSportsListData?.data.map((item: any) => {
									return (
										<option value={item?.sportId}>{item?.sportName}</option>
									);
								})
								: ''}
						</select>
					) : (
						''
					)}
				</div>
				{current === false ? (
					<div className='betHeading_datepicker'>
						<div className='mybets'>
							<div className='date_piker_from_to'>
								<label className='datePicker_from'>From:</label>
								<div className='datePicker_from_wrapper' aria-disabled='true'>
									<DatePicker
										className=' startDateNew'
										defaultValue={dayjs(startDate)}
										format={dateFormat}
										onChange={StartDateValue}
										disabledDate={d =>
											!d ||
											d.isBefore(dayjs().subtract(2, 'month')) ||
											d.isAfter(dayjs())
										}
									/>
								</div>
							</div>
							<div
								className=' date_piker_from_to'
								style={{ marginLeft: '-18px' }}
							>
								<label className='datePicker_tooo'>To:</label>
								<div className='datepicker_toooo_wrapper'>
									<DatePicker
										className=' startDateNew'
										defaultValue={dayjs(endDate)}
										format={dateFormat}
										onChange={EndDateValue}
										disabledDate={d =>
											!d ||
											d.isBefore(dayjs().subtract(2, 'month')) ||
											d.isAfter(dayjs())
										}
									/>
								</div>
							</div>
							{historyError === 'true' ? (
								<div style={{ color: 'red' }}>please select all Fields</div>
							) : (
								''
							)}
							<button
								className='MyOpenBets__page-menu-date-search-button'
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</div>
				) : (
					''
				)}
			</div>
			<div className='betting_page_table_data'>
				<section className='OpenBetsTable'>
					<div className='OpenBetsTable__table'>
						<div className='table-responsive withdrow-table'>
							<table role='table' className='table b-table table-bordered'>
								<thead>
									<tr role='row' className='account-detail'>
										<th
											role='columnheader'
											className='text-left '
											style={{ fontWeight: '700' }}
										>
											Placed
										</th>
										<th
											role='columnheader'
											className='text-left '
											style={{ fontWeight: '700' }}
										>
											Description
										</th>
										{/* <th
                                            role="columnheader"
                                            className="text-left">
                                            Description
                                        </th> */}
										<th
											role='columnheader'
											className='text-left'
											style={{ fontWeight: '700' }}
										>
											Type
										</th>
										<th
											role='columnheader'
											className='text-left'
											style={{ fontWeight: '700' }}
										>
											Odds
										</th>

										<th
											role='columnheader'
											className='text-left'
											style={{ fontWeight: '700' }}
										>
											Stake
										</th>
										{/* <th
                                            role="columnheader"
                                            className="text-left">
                                            Liability
                                        </th> */}
										<th
											role='columnheader'
											className='text-left'
											style={{ fontWeight: '700' }}
										>
											{current ? 'Potential Profit' : 'Pnl'}
										</th>
									</tr>
								</thead>

								<tbody className='my_bet'>
									{unsettledbetmatchdata?.length ? (
										unsettledbetmatchdata?.map((item: any) => {
											return (
												<tr role='row '>
													<td
														style={{ height: '30px' }}
														className='text-left withdraw-data'
													>
														{item?.time}
													</td>
													<td
														style={{ height: '30px', width: '443px' }}
														className='text-left withdraw-data'
													>
														{/* {item?.eventName} */}
														{item?.eventName}
														{'   '}
														{'   '}
														{item?.marketname}
														{'   '}
														{'   '}
														Match ID {item?.matchId}{' '}
													</td>
													{/* <td style={{ height: "30px" }}
                                                        className="text-left withdraw-data">
                                                        N/A
                                                    </td> */}
													<td
														style={{ height: '30px' }}
														className='text-left withdraw-data'
													>
														{item?.isback === true ? 'Back' : 'Lay'}
													</td>
													<td style={{}} className='text-left withdraw-data'>
														{item?.rate}
													</td>
													<td style={{}} className='text-left withdraw-data'>
														{item?.amount}
													</td>
													{/* <td style={{}}
                                                        className="text-left withdraw-data">
                                                        N/A
                                                    </td> */}
													<td style={{}} className='text-left withdraw-data'>
														{item?.pnl < 0 ? (
															<span style={{ color: 'red' }}>{item?.pnl}</span>
														) : (
															<span style={{ color: 'green' }}>
																{item?.pnl}
															</span>
														)}
													</td>
												</tr>
											);
										})
									) : (
										<tr role='row '>
											<td
												colSpan={6}
												style={{
													height: '30px',
													textAlign: 'center',
													color: 'red',
													fontWeight: '600',
												}}
												className='You-have-no-matched-bets'
											>
												You have no matched bets
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default OpenBetsDeskTop