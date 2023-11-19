import { useRef, TouchEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	MatchBody,
	MatchDataRowContainer,
	MatchName,
	MatchOddsGrid,
	MatchOddsGridContainer,
	MatchOddsWrapper,
	MatchTimeAndFavouriteContainer,
	MatchTiming,
	BettingPopUpmobileViewShow
} from './Index.styled';
import OddCell from '../OddCell/Index';
import FlexBetween from '../common/FlexBetween/Index';
import { Match } from '../../state/apis/betfair/apiSlice.types';
import dateTime from '../../services/dateTime';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	selectHomeSwipe,
	selectSelectedSid,
	setHomeSwipe,
	setSelectedSid,
} from '../../state/features/client/clientSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Icon from '../common/Icon/Index';
import BetingPopUpForMobile from './BetingPopUpForMobile';

interface MatchDataRowProps extends Match { type?: any, runners?: any }

const MatchDataRow = (props: MatchDataRowProps) => {
	const retrieveTeamsForMatch = (matchName: string) => {
		const delimiterRegex = /\s+(?:vs|v[/\\]s|v[/\\]|v)\s+/i;
		const [team1, team2] = matchName.split(delimiterRegex);

		return {
			team1: team1.trim() || 'Team 1',
			team2: team2.trim() || 'Team 2',
		};
	};
	const selectedSid = useAppSelector(selectSelectedSid)

	const {
		matchId,
		openDate,
		matchName,
		// team1Back,
		// team1Lay,
		// drawBack,
		// drawLay,
		// team2Back,
		// team2Lay,
	} = props;
	console.log(selectedSid, "selectedSid");


	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const isSwiped = useAppSelector(selectHomeSwipe);

	const containerRef = useRef<HTMLDivElement>(null);
	const lastTouchXRef = useRef<number | null>(null);

	const navigateToMatchDetails = () => navigate(`/match-details/${matchId}`);

	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) =>
		(lastTouchXRef.current = e.touches[0].clientX);

	const handleTouchEnd = () => (lastTouchXRef.current = null);

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		const shouldApplyAnimation = window.innerWidth < 1024;

		if (!shouldApplyAnimation) return;

		if (lastTouchXRef.current !== null) {
			const diffX = e.touches[0].clientX - lastTouchXRef.current;

			// Check if the swipe distance is greater than a threshold value
			const threshold = 70;
			if (Math.abs(diffX) > threshold) {
				if (diffX > 0) dispatch(setHomeSwipe({ isSwiped: false }));
				else dispatch(setHomeSwipe({ isSwiped: true }));
			}
		}
	};
	const [mobileViewBettingData, setMobileViewBettingData] = useState<any>()
	// const [mobileviewbettingPopUp, setMobileviewbettingPopUp] = useState('')
	// const [mobileviewbettingPopUpMatch, setMobileviewbettingPopUpMatch] = useState('')
	const OddsData = (vl: any) => {
		dispatch(setSelectedSid(vl.SelectionIdForAll.selectionId))

		setMobileViewBettingData(vl)

	}

	console.log(selectedSid, "lokijuhugyttrfrd");


	return (

		<>
			<MatchDataRowContainer className='match-data-row'>
				<MatchTimeAndFavouriteContainer>
					<MatchTiming className='match-data__time'>
						<span>{dateTime.getDate(openDate, true)}</span>
						<span>{dateTime.getTimeIn12HourFormat(openDate)}</span>
					</MatchTiming>
					<Icon width='2rem' isSvgIcon src='/assets/icons/star.svg#star' />
				</MatchTimeAndFavouriteContainer>
				<FlexBetween width='calc(100% - 77px)' flex={1}>
					<MatchBody className='match__body'>
						<MatchName className='match__name' onClick={navigateToMatchDetails}>
							<span>{retrieveTeamsForMatch(matchName as string).team1}</span>
							<span>{retrieveTeamsForMatch(matchName as string).team2}</span>
						</MatchName>
						<Icon width='1.2rem' src='/assets/icons/tv.svg#tv' isSvgIcon />
					</MatchBody>
					<MatchOddsWrapper
						className='match-odds-wrapper'
						ref={containerRef}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<MatchOddsGridContainer
							isSwiped={isSwiped}
							className='match-odds-grid-container'>
							<MatchOddsGrid className='match-odds-grid'>
								<OddCell odd={props?.runners[0]?.back1 || '-'} color='blue' type='team1back' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[0]} />
								<OddCell odd={props?.runners[2]?.back1 || '-'} color='blue' type='drawback' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[2]} />
								<OddCell odd={props?.runners[1]?.back1 || '-'} color='blue' type='team2back' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[1]} />
								<OddCell odd={props?.runners[0]?.lay1 || '-'} color='red' type='team1lay' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[0]} />
								<OddCell odd={props?.runners[2]?.lay1 || '-'} color='red' type='drawlay' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[2]} />
								<OddCell odd={props?.runners[1]?.lay1 || '-'} color='red' type='team2lay' allData={props} OddsData={OddsData} SelectionIdForAll={props?.runners[1]} />
							</MatchOddsGrid>
						</MatchOddsGridContainer>
					</MatchOddsWrapper>
				</FlexBetween>
			</MatchDataRowContainer>
			{selectedSid === mobileViewBettingData?.SelectionIdForAll?.selectionId && localStorage.getItem("token") ?
				<BettingPopUpmobileViewShow>
					<BetingPopUpForMobile mobileViewBettingData={mobileViewBettingData} />
				</BettingPopUpmobileViewShow>
				:
				""
			}
		</>
	);
};

export default MatchDataRow;
