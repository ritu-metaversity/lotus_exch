import StarIcon from '@mui/icons-material/StarOutlineRounded';
import MatchOddsRow from '../../../components/MatchOddsRow/Index';
import OddCell from '../../../components/OddCell/Index';
import { MatchOddsGrid } from './Index.styled';
import OddsHeader from '../OddsHeader/Index';
import { MatchOddsContainer } from './Index.styled';
import { MatchDetails } from '../../../state/apis/betfair/apiSlice.types';
import { isBetOpened } from '../../../services/betUtil';
import OddOverlayLabel from '../../../components/OddOverlayLabel/Index';
import { useState } from 'react';
import { BettingPopUpmobileViewShow } from '../../../components/MatchDataRow/Index.styled';
import BetingPopUpForMobile from '../../../components/MatchDataRow/BetingPopUpForMobile';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { selectProfits, selectSelectedSid, setBetData, setSelectedSid } from '../../../state/features/client/clientSlice';
import { useAppSelector } from '../../../hooks/useAppSelector';

// type Odd = MatchDetails['Odds'][number];

interface MatchOddsProps {
	odd: MatchDetails['Odds'];
}

const MatchOdds = (props: MatchOddsProps) => {
	const { odd } = props;
	const selectedSid = useAppSelector(selectSelectedSid)
	const [mobileviewbettingPopUp, setMobileviewbettingPopUp] = useState('')
	const [mobileviewbettingPopUpMatch, setMobileviewbettingPopUpMatch] = useState('')
	const [mobileViewBettingData, setMobileViewBettingData] = useState<any>()

	console.log(props, mobileviewbettingPopUp, mobileviewbettingPopUpMatch, "propsprops");
	const dispatch = useAppDispatch()

	const OddsData = (vl: any) => {
		setMobileViewBettingData(vl)
		dispatch(setSelectedSid(vl.SelectionIdForAll.selectionId))
		dispatch(setBetData({ ...vl, }))
		setMobileviewbettingPopUp(vl?.vl)
		setMobileviewbettingPopUpMatch(vl?.vl)
	}
	const profits = useAppSelector(selectProfits);
	// console.log(odd?.runners, "sdghdfgsdsa");


	return (
		<>
			<MatchOddsContainer>
				<OddsHeader
					type='back-lay'
					name={odd[0]?.Name === 'Match Odds' ? 'Match Odds' : 'Tied Match'}
					icon={<StarIcon fontSize='inherit' color='inherit' />}
				/>

				{odd[0].runners.map(runner => {
					return (
						<>
							<MatchOddsRow
								content=''
								key={runner.selectionId}
								pnl={
									profits.Odds[odd[0].marketId]?.find(
										profit => profit.sid == runner.selectionId
									)?.value
								}
								title={runner.name}
							>
								<MatchOddsGrid
									isBetOpened={isBetOpened(odd[0].status)}
									className='match-odds__grid'
								>
									{isBetOpened(odd[0].status) ? (
										<>
											<OddCell
												type='team2back'
												color='blue'
												odd={runner.ex.availableToBack[2].price}
												size={runner.ex.availableToBack[2].size}
												// OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
											/>
											<OddCell
												type='drawback'
												color='blue'
												odd={runner.ex.availableToBack[1].price}
												size={runner.ex.availableToBack[1].size}
												// OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
											/>
											<OddCell
												type='team1back'
												color='blue'
												odd={runner.ex.availableToBack[0].price}
												size={runner.ex.availableToBack[0].size}
												OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
												nation={runner.name}
											/>

											<OddCell
												type='team1lay'
												color='red'
												odd={runner.ex.availableToLay[0].price}
												size={runner.ex.availableToLay[0].size}
												OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
												nation={runner.name}
											/>
											<OddCell
												type='drawlay'
												color='red'
												odd={runner.ex.availableToLay[1].price}
												size={runner.ex.availableToLay[1].size}
												// OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
											/>
											<OddCell
												type='team2lay'
												color='red'
												odd={runner.ex.availableToLay[2].price}
												size={runner.ex.availableToLay[2].size}
												// OddsData={OddsData}
												allData={props?.odd[0]}
												SelectionIdForAll={runner}
											/>
										</>
									) : (
										<OddOverlayLabel label={odd[0].status} />
									)}
								</MatchOddsGrid>
							</MatchOddsRow>
							{selectedSid === runner.selectionId &&
							localStorage.getItem('token') ? (
								<BettingPopUpmobileViewShow>
									<BetingPopUpForMobile
										mobileViewBettingData={mobileViewBettingData}
									/>
								</BettingPopUpmobileViewShow>
							) : (
								''
							)}
						</>
					);
				})}
				{!(odd[0].runners.length > 0) && (
					<div style={{ textAlign: 'center' }}>No Records Found!!</div>
				)}
			</MatchOddsContainer>
			{/* {mobileviewbettingPopUp !== "" && mobileviewbettingPopUp === mobileviewbettingPopUpMatch ?
				<BettingPopUpmobileViewShow>
					<BetingPopUpForMobile mobileViewBettingData={mobileViewBettingData} />
				</BettingPopUpmobileViewShow>
				:
				""
			} */}
		</>
	);
};

export default MatchOdds;
