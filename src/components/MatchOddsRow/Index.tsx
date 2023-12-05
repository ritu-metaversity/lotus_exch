import { ReactNode, useState } from 'react';
import {
	LedgerAndPnl,
	MatchOddsRowContainer,
	MatchOddsRowContent,
	MatchOddsRowTitle,
	NameLedgerAndPnl,
	// MinMax,
	// TypoGraphy,
} from './Index.styled';
import {

	Dialog,
	DialogContent,
	DialogTitle,

} from "@mui/material";
import "./PnlModal.css"
import PnlModal from './PnlModal';
import { useParams } from 'react-router-dom';

// import AccessTimeIcon from '@mui/icons-material/AccessTime';
interface MatchOddsRowProps {
	title: ReactNode;
	children: ReactNode;
	content: string;
	isFancy?: boolean;
	betDelay?: any;
	pnl?: any;
	sid?: any;

}

const MatchOddsRow = (props: MatchOddsRowProps) => {
	const { matchId } = useParams();

	const { title, children, content, isFancy, betDelay, pnl, sid } = props;
	console.log(pnl, "hgtfyrtdesrdxcv");
	const [selectedPnlMarketId, setSelectedPnlMarketId] = useState("");


	const handlePopUpOpn = () => {
		isFancy && pnl !== undefined && setSelectedPnlMarketId("open")
		console.log(pnl, "ewfwefwewcZ");

	}
	return (
		<MatchOddsRowContainer isFancy={isFancy} className='match-odds-row'>
			<MatchOddsRowTitle className='match-odds-row__title'>


				<Dialog
					title="Run Amount"
					open={Boolean(selectedPnlMarketId)}
					onClose={() => setSelectedPnlMarketId("")}
					fullWidth

					sx={{
						'& .MuiDialog-paper': {
							overflow: 'unset !important'
						}
					}}
				>
					<DialogTitle>
						<span onClick={() => setSelectedPnlMarketId("")} style={{ cursor: "pointer" }}>
							<span onClick={() => setSelectedPnlMarketId("")} style={{
								position: "absolute",
								right: '4px',
								top: "1px"
							}} >X</span>


						</span>
						<div className="main_RunandAmount">
							<span >Run and Amount</span>



						</div>

					</DialogTitle>
					<DialogContent sx={{
						width: '100%',
						// '&.MuiDialogContent-root': {
						//   overflowY: 'hidden !important'
						// }
					}}>

						<PnlModal
							fancyId={sid}
							matchId={matchId}
							dadadada={() => setSelectedPnlMarketId("")}
						/>
					</DialogContent>
				</Dialog>
				<NameLedgerAndPnl onClick={handlePopUpOpn}>
					<span style={{ width: "100%", fontWeight: "700" }}>{title}</span>
					<span style={{ width: "100%", color: pnl < 0 ? "red" : "green" }}>{pnl ? "»" : ""} {pnl && Number(pnl).toFixed(2)}</span>

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
