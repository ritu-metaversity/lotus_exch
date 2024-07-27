import { useParams } from 'react-router-dom';
import { MatchOddsSectionContainer } from './Index.styled';
import MatchOdds from '../MatchOdds/Index';
import { useGetMatchDetailsQuery } from '../../../state/apis/betfair/apiSlice';
import BookmakerOdds from '../BookmakerOdds/Index';
import FancySection from '../FancySection/Index';
import { useUserFancyPnlQuery, useUserOddsPnlQuery } from '../../../state/apis/main/apiSlice';
import { useEffect, useState } from 'react';
import { createProfits } from '../utils';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectBetData, setProfits as setProfitsRedux } from '../../../state/features/client/clientSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

const MatchOddsSection = () => {
	const { matchId } = useParams();

	const { data } = useGetMatchDetailsQuery(matchId ?? '', {
		pollingInterval: 500,
	});
	const dispatch = useAppDispatch()
	const { data: pnlOddDtaa } = useUserOddsPnlQuery({ "matchId": matchId }, { pollingInterval: 5000 });
	const { data: pnlFancytaa } = useUserFancyPnlQuery({ "matchId": matchId }, { pollingInterval: 5000 });
	console.log(pnlFancytaa, "pnlOddDtaa");
	// useEffect(() => {
	// 	Triger({ "matchId": matchId })
	// 	// TrigerFancy({ "matchId": matchId })
	// }, [])
	const [profitState, setProfits] = useState({
		Odds: {},
		Bookmaker: [],
		Fancy: [],
	})

	console.log(profitState, "profitState");

	useEffect(() => {
		dispatch(setProfitsRedux(profitState))
	}, [profitState])
	const betDetails = useAppSelector(selectBetData)

	console.log(data?.Odds, "ygtfrdcfvbjy");
	useEffect(() => {
		createProfits({
			fancyOdds: data,
			fancyPnl: pnlFancytaa?.data || [],
			betDetails,
			rechange: true,
			pnl: pnlOddDtaa?.data || [],
			setProfits,
		});
	}, [betDetails?.marketId]);

	useEffect(() => {
		createProfits({
			fancyOdds: data,
			fancyPnl: pnlFancytaa?.data || [],
			betDetails,
			pnl: pnlOddDtaa?.data || [],
			setProfits,
		});
	}, [
		betDetails?.stake,
		pnlOddDtaa?.data,
		pnlFancytaa?.data,
		data?.Odds[0]?.marketId,
	]);

	return (
		<MatchOddsSectionContainer>
			{data && (
				<>
					{data?.Odds.filter(i => i.Name === "Match Odds")?.length > 0 ? (
						<MatchOdds odd={data?.Odds.filter(i => i.Name === "Match Odds")} />
					) : (
						""
					)}
					{data?.Bookmaker.filter(i => i.t !== "TOSS")?.length > 0 ? (
						<BookmakerOdds odd={data?.Bookmaker.filter(i => i.t !== "TOSS")} />
					) : (
						""
					)}
					{data?.Odds.filter((i: any) => i.Name === "Tied Match")?.length > 0 ? (
						<MatchOdds odd={data?.Odds.filter((i: any) => i.Name === "Tied Match")} />
					) : (
						""
					)}
					{data?.Bookmaker.filter(i => i.t === "TOSS")?.length > 0 ? (
						<BookmakerOdds odd={data?.Bookmaker.filter(i => i.t === "TOSS")} />

					) : (
						""
					)}
					<FancySection />
				</>
			)}
		</MatchOddsSectionContainer>
	);
};

export default MatchOddsSection;
