import { useState } from 'react';
import { MatchDetailsScreenContainer } from './Index.styled';
import MarketLiveOpenbet from './MarketLiveOpen/MarketLiveOpenbet';
import MatchOddsSection from './MatchOddsSection/Index';
// import MatchStats from './MatchStats/Index';
import MatchTabs from './MatchTabs/MatchStateLive';
import OpenBetsBetPage from './OpenBetsBetPage';

const MatchDetails = () => {
	const [matchSelect, setSlectMatch] = useState("market")
	const marketData = (vl: any) => {
		setSlectMatch(vl)
		console.log(vl, "ddlflsdflks");
	}
	return (
		<MatchDetailsScreenContainer>
			<MarketLiveOpenbet marketData={marketData} />
			{matchSelect === "live" ?
				<MatchTabs />
				: ""
			}

			{/* <MatchStats /> */}
			{matchSelect === "OpenBet" ?

				<OpenBetsBetPage />
				:
				<MatchOddsSection />
			}
		</MatchDetailsScreenContainer>
	);
};

export default MatchDetails;
