import React, { ReactNode, useMemo } from 'react';
import DefaultSportsIcon from '@mui/icons-material/SportsKabaddiOutlined';
import Section from '../../../components/Section/Index';
import SportsHeader from '../../../components/SportsHeader/Index';
import MatchDataRow from '../../../components/MatchDataRow/Index';
import { useGetMatchesBySportsQuery } from '../../../state/apis/betfair/apiSlice';
import Icon from '../../../components/common/Icon/Index';
import { InPlayContainer } from './Index.styled';

type SportIds = {
	[keyof: string]: ReactNode;
};

const InPlaySection = () => {
	const { data } = useGetMatchesBySportsQuery(undefined, { pollingInterval: 3000 });

	const sportsIds: SportIds = useMemo(() => {
		const sportsIds: SportIds = {};

		if (!data) return sportsIds;

		data.data.forEach(sports => {
			const cricketRegEx = /cricket/i;
			const footballRegEx = /football/i;
			const tennisRegEx = /tennis/i;

			const baseIconUrl = '/assets/icons';

			if (cricketRegEx.test(sports.name))
				sportsIds[sports.sportid] = (
					<Icon
						isSvgIcon
						src={`${baseIconUrl}/cricket-ball.svg#cricket-ball`}
					/>
				);
			if (footballRegEx.test(sports.name))
				sportsIds[sports.sportid] = (
					<Icon isSvgIcon src={`${baseIconUrl}/football.svg#football`} />
				);
			if (tennisRegEx.test(sports.name))
				sportsIds[sports.sportid] = (
					<Icon isSvgIcon src={`${baseIconUrl}/tennis.svg#tennis`} />
				);
		});

		return sportsIds;
	}, [data]);

	const getIconBySportId = (sportId: number) => {
		return sportsIds[sportId] || <DefaultSportsIcon fontSize='inherit' />;
	};

	return (
		<InPlayContainer>
			<Section
				heading='In Play'
				icon={<Icon src='/assets/icons/play.svg#play' isSvgIcon />}
				inplay="true"
			>
				{data?.data.map(
					sports =>
						sports.matchList.length !== 0 && (
							<React.Fragment key={sports.sportid}>
								<SportsHeader
									icon={getIconBySportId(sports.sportid)}
									name={sports.name}
								/>
								{sports.matchList.map(match => (
									<MatchDataRow key={match.matchId} {...match} sportid={sports?.sportid}/>
								))}
							</React.Fragment>
						)
				)}
			</Section>
		</InPlayContainer>
	);
};
export default InPlaySection;
