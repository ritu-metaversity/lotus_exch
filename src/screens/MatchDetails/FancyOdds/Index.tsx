import StarIcon from '@mui/icons-material/StarOutlineRounded';
import MatchOddsRow from '../../../components/MatchOddsRow/Index';
import OddCell from '../../../components/OddCell/Index';
import OddsHeader from '../OddsHeader/Index';
import { FancyOddsContainer, FancyOddsGrid } from './Index.styled';
import { BaseFancy } from '../../../state/apis/betfair/apiSlice.types';
import { Box } from '@mui/material';
import "./FancyOdds.css"
import { isBetOpened } from '../../../services/betUtil';
import { BettingPopUpmobileViewShow } from '../../../components/MatchDataRow/Index.styled';
import BetingPopUpForMobile from '../../../components/MatchDataRow/BetingPopUpForMobile';
import { selectProfits, selectSelectedSid, setBetData, setBetDataFancy, setSelectedSid } from '../../../state/features/client/clientSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useEffect, useState } from 'react';
// import {
// 	MinMax,
// 	TypoGraphy,
// } from '../../../components/MatchOddsRow/Index.styled';
import { useAppSelector } from '../../../hooks/useAppSelector';

interface FancyOddsProps {
	odd: Array<BaseFancy>;
	title: string;
}

const FancyOdds = (props: FancyOddsProps) => {
	const { odd, title } = props;
	const selectedSid = useAppSelector(selectSelectedSid);

	const [mobileviewbettingPopUp, setMobileviewbettingPopUp] = useState('');
	const [mobileviewbettingPopUpMatch, setMobileviewbettingPopUpMatch] =
		useState('');
	const [mobileViewBettingData, setMobileViewBettingData] = useState<any>();
	const [mobileViewFancyBetting, setMobileViewFancyBetting] = useState<any>();
	const dispatch = useAppDispatch();
	console.log(mobileviewbettingPopUp, mobileviewbettingPopUpMatch);

	const OddsData = (vl: any) => {
		console.log(vl, 'sdfsdcsdwew');

		setMobileViewBettingData(vl);
		setMobileViewFancyBetting('fancy');
		dispatch(setBetData({ ...vl, isFancy: true }));
		dispatch(setBetDataFancy('fancy'));

		dispatch(setSelectedSid(vl.SelectionIdForAll));

		setMobileviewbettingPopUp(vl?.vl);
		setMobileviewbettingPopUpMatch(vl?.vl);
	};

	if (!odd.length)
		return (
			<Box p={2} fontSize='1.4rem'>
				Oops, it appears that we couldn't find the data you're looking for at
				the moment.
			</Box>
		);

	const profits = useAppSelector(selectProfits);
	useEffect(() => {
		console.log(profits, 'sushant2');
	}, [profits]);

	console.log(
		selectedSid === mobileViewBettingData?.SelectionIdForAll,
		'dvecvevrsdcxw'
	);

	return (
		<FancyOddsContainer>
			<OddsHeader
				type='yes-no'
				name={title}
				icon={<StarIcon fontSize='inherit' color='inherit' />}
			/>

			{odd.map(allData => {
				const { b1, l1, bs1, ls1, nation, gstatus, sid, betDelay, minBet, maxBet } = allData;
				return (
					<>
						{console.log(odd, "wfcsdscsdw")}
						<MatchOddsRow
							isFancy={true}
							content={`${gstatus}`}
							key={nation}
							title={nation}
							pnl={profits?.Fancy?.find(profit => profit.sid == sid)?.value}
							betDelay={betDelay}
							sid={sid}
						>
							<FancyOddsGrid
								isBetOpened={isBetOpened(gstatus)}
								className='bookmaker-odds__grid'
							>
								<>
									{/* ----BACK---- */}
									<OddCell
										isStandBy={true}
										type='drawback'
										color='red'
										odd={''}
									/>
									<OddCell
										isStandBy={true}
										type='team2back'
										color='red'
										odd={''}
									/>
									<OddCell
										allData={allData}
										SelectionIdForAll={sid}
										OddsData={OddsData}
										type='team1lay'
										color='red'
										odd={l1}
										size={ls1}
										nation={nation}
									/>
									<OddCell
										allData={allData}
										SelectionIdForAll={sid}
										OddsData={OddsData}
										type='team1back'
										color='blue'
										odd={b1}
										size={bs1}
										nation={nation}
									/>
									{/* ----LAY---- */}

									{/* <OddCell isStandBy={true} type='drawlay' color='red' odd={''} />
								<OddCell isStandBy={true} type='team2lay' color='red' odd={''} />  */}

									{/* <MinMax> */}
									<div className='Min_Max_betsss'>

										<span>Min: {minBet}</span>
										<span>Max: {maxBet}</span>
									</div>
									{/* </MinMax> */}
									{/* <MinMax></MinMax> */}
								</>

								{/* {isBetOpened(gstatus) ? (
								<></>
							) : (
								<OddOverlayLabelContainer className='odd-overlay-label'>
									{gstatus}
								</OddOverlayLabelContainer>
							)} */}
							</FancyOddsGrid>
						</MatchOddsRow>

						{sid === selectedSid && localStorage.getItem('token') ? (
							<BettingPopUpmobileViewShow>
								<BetingPopUpForMobile
									mobileViewBettingData={mobileViewBettingData}
									mobileViewFancyBetting={mobileViewFancyBetting}
								/>
							</BettingPopUpmobileViewShow>
						) : (
							''
						)}
					</>
				);
			})}
			{/* selectedSid === sid  */}
		</FancyOddsContainer>
	);
};

export default FancyOdds;
