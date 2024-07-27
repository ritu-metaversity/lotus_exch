import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import PlayIcon from '@mui/icons-material/PlayCircleOutlined';
import Section from '../../../components/Section/Index';
import {
	IframeContainer,
	MatchStatsContainer,
	StyledArrowIcon,
	StyledIframe,
} from './Index.styled';
import { useGetMatchDetailsQuery } from '../../../state/apis/betfair/apiSlice';

const MatchStats = () => {
	const [expanded, setExpanded] = useState(true);

	const { matchId } = useParams();
	const { data } = useGetMatchDetailsQuery(matchId ?? '');
	const [searchParams] = useSearchParams();


	const sportsid = searchParams.get("sportid");
	// const iframeUrl = `http://15.207.182.173:3050/event/${matchId}?theme=crazy-diamond`;
	const iframeUrl = `https://score.247idhub.com/go-score/template/${sportsid}/${matchId}`

	const handleExpand = () => setExpanded(!expanded);

	return (
		<MatchStatsContainer className='match-stats'>
			<Section
				heading={data?.Odds[0]?.matchName || 'N/A'}
				icon={<PlayIcon fontSize='inherit' color='inherit' />}
				content={
					<StyledArrowIcon
						onClick={handleExpand}
						fontSize='inherit'
						color='inherit'
						expanded={expanded}
					/>
				}
			>
				<Collapse in={expanded}>
					<IframeContainer>
						<StyledIframe src={iframeUrl}></StyledIframe>
					</IframeContainer>
				</Collapse>
			</Section>
		</MatchStatsContainer>
	);
};

export default MatchStats;
