import { ReactNode } from 'react';
import {
	LedgerAndPnl,
	MatchOddsRowContainer,
	MatchOddsRowContent,
	MatchOddsRowTitle,
	// MinMax,
	// TypoGraphy,
} from './Index.styled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
interface MatchOddsRowProps {
	title: ReactNode;
	children: ReactNode;
	content: string;
	isFancy?: boolean;
	betDelay?: any;
}

const MatchOddsRow = (props: MatchOddsRowProps) => {
	const { title, children, content, isFancy, betDelay } = props;
	console.log(betDelay, "hgtfyrtdesrdxcv");

	return (
		<MatchOddsRowContainer isFancy={isFancy} className='match-odds-row'>
			<MatchOddsRowTitle className='match-odds-row__title'>
				{title}
				{isFancy ?
					<LedgerAndPnl >
						<div style={{ display: "flex", alignItems: "center" }}><AccessTimeIcon /> <span>{betDelay }s</span></div>
						{/* <div>2s</div> */}
						<div><img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ladder-black.png" style={{ width: "6px" }} /></div>
					</LedgerAndPnl>
					: ""
				}

			</MatchOddsRowTitle>
			<MatchOddsRowContent content={content} className='match-odds-row__content'>
				{children}
			</MatchOddsRowContent>
		</MatchOddsRowContainer>
	);
};

export default MatchOddsRow;
