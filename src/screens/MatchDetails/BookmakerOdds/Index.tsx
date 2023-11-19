import StarIcon from '@mui/icons-material/StarOutlineRounded';
import OddsHeader from '../OddsHeader/Index';
import { BookmakerOddsContainer, BookmakerOddsGrid } from './Index.styled';
import { MatchDetails } from '../../../state/apis/betfair/apiSlice.types';
import MatchOddsRow from '../../../components/MatchOddsRow/Index';
import OddCell from '../../../components/OddCell/Index';
import OddOverlayLabel from '../../../components/OddOverlayLabel/Index';
import { isBetOpened } from '../../../services/betUtil';
import { BettingPopUpmobileViewShow } from '../../../components/MatchDataRow/Index.styled';
import BetingPopUpForMobile from '../../../components/MatchDataRow/BetingPopUpForMobile';
import { useState } from 'react';
import { selectSelectedSid, setBetData, setSelectedSid } from '../../../state/features/client/clientSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';

interface BookmakerOddProps {
	odd: MatchDetails['Bookmaker'];
}

const BookmakerOdds = (props: BookmakerOddProps) => {
	const { odd } = props;
	// const [mobileviewbettingPopUp, setMobileviewbettingPopUp] = useState('')
	// const [mobileviewbettingPopUpMatch, setMobileviewbettingPopUpMatch] = useState('')
	const [mobileViewBettingData, setMobileViewBettingData] = useState<any>()
	const selectedSid = useSelector(selectSelectedSid)
	const dispatch = useAppDispatch()
	const OddsData = (vl: any) => {
		console.log(vl, "adasdasdasdasd≥");
		setMobileViewBettingData(vl)
		dispatch(setBetData({ ...vl, }))
		dispatch(setSelectedSid(vl.SelectionIdForAll))

		// setMobileviewbettingPopUp(vl?.vl)
		// setMobileviewbettingPopUpMatch(vl?.vl)
	}
	console.log(mobileViewBettingData, "hgfdcv");

	return (
		<BookmakerOddsContainer>
			<OddsHeader
				type="back-lay"
				name={'Bookmaker'}
				icon={<StarIcon fontSize='inherit' color='inherit' />}
			/>

			{odd.map((allData) => {
				const { b1, l1, bs1, ls1, nation, gstatus, sid } = allData
				return (
					<>
						<MatchOddsRow key={nation} title={nation} content=''>
							<BookmakerOddsGrid
								isBetOpened={isBetOpened(gstatus)}
								className='bookmaker-odds__grid'
							>
								{isBetOpened(gstatus) ? (
									<>
										<OddCell allData={allData} SelectionIdForAll={sid} type='drawback' OddsData={OddsData} color='blue' odd={''} />
										<OddCell allData={allData} SelectionIdForAll={sid} type='team2back' OddsData={OddsData} color='blue' odd={''} />
										<OddCell allData={allData} SelectionIdForAll={sid} type='team1back' OddsData={OddsData} color='blue' odd={b1} size={bs1} />

										<OddCell allData={allData} SelectionIdForAll={sid} type='team1lay' OddsData={OddsData} color='red' odd={l1} size={ls1} />
										<OddCell allData={allData} SelectionIdForAll={sid} type='drawlay' OddsData={OddsData} color='red' odd={''} />
										<OddCell allData={allData} SelectionIdForAll={sid} type='team2lay' OddsData={OddsData} color='red' odd={''} />
									</>
								) : (
									<OddOverlayLabel label={gstatus} />
								)}
							</BookmakerOddsGrid>
						</MatchOddsRow>
						{/* {mobileviewbettingPopUp !== "" && mobileviewbettingPopUp === mobileviewbettingPopUpMatch ? */}
						{selectedSid === sid && localStorage.getItem("token")?
							<BettingPopUpmobileViewShow>
								<BetingPopUpForMobile mobileViewBettingData={mobileViewBettingData} />
							</BettingPopUpmobileViewShow>
							:
							""
						}
					</>

				)
			}
			)}

		</BookmakerOddsContainer>
	);
};

export default BookmakerOdds;
