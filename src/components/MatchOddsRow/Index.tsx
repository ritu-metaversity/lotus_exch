import { ReactNode } from 'react';
import {
	LedgerAndPnl,
	MatchOddsRowContainer,
	MatchOddsRowContent,
	MatchOddsRowTitle,
	NameLedgerAndPnl,
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
	pnl?: any;
}

const MatchOddsRow = (props: MatchOddsRowProps) => {
	const { title, children, content, isFancy, betDelay, pnl } = props;
	console.log(pnl, "hgtfyrtdesrdxcv");

	return (
		<MatchOddsRowContainer isFancy={isFancy} className='match-odds-row'>
			<MatchOddsRowTitle className='match-odds-row__title'>
				<NameLedgerAndPnl>
					<span style={{ width: "100%", fontWeight: "700" }}>{title}</span>
					<span style={{ width: "100%", color: pnl < 0 ? "red" : "green" }}>{pnl ? "»" : ""}{pnl}</span>

				</NameLedgerAndPnl>
				{isFancy ?
					<LedgerAndPnl >
						<div style={{ display: "flex", alignItems: "center" }}>
							<img src={"https://lotus365.co/static/media/timer.8213d00a.svg"} style={{
								width: "15px",
								color: "gray"
							}} /> <span style={{ fontWeight: "800" }}>{betDelay}s</span></div>
						{/* <div>2s</div> */}
						<img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/ladder-black.png" style={{ width: "6px", marginRight: "8px" }} />
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
