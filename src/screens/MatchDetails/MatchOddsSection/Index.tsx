import { useParams } from 'react-router-dom';
import { MatchOddsSectionContainer } from './Index.styled';
import MatchOdds from '../MatchOdds/Index';
import { useGetMatchDetailsQuery } from '../../../state/apis/betfair/apiSlice';
import BookmakerOdds from '../BookmakerOdds/Index';
import FancySection from '../FancySection/Index';
import { useUserOddsPnlMutation } from '../../../state/apis/main/apiSlice';
import { useEffect } from 'react';

const MatchOddsSection = () => {
	const { matchId } = useParams();

	const { data } = useGetMatchDetailsQuery(matchId ?? '', {
		pollingInterval: 500,
	});
	const [Triger, { data: pnlOddDtaa }] = useUserOddsPnlMutation();
	console.log(pnlOddDtaa, "pnlOddDtaa");
	useEffect(() => {
		Triger({ "matchId": matchId })
	}, [])
	console.log(data?.Bookmaker,"ygtfrdcfvbjy");
	
	return (
		<MatchOddsSectionContainer>
			{data && (
				<>
					{data?.Odds.map(odd => <MatchOdds key={odd.Name} odd={odd} />)}
					{data?.Bookmaker ? <BookmakerOdds odd={data?.Bookmaker} /> : ""}
					<FancySection />
				</>
			)}
		</MatchOddsSectionContainer>
	);
};

export default MatchOddsSection;
