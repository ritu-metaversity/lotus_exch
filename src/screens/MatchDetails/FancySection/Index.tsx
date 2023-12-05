import { ComponentProps } from 'react';
import Tab from '../../../components/common/Tab/Index';
import { FancySectionContainer } from './Index.styled';
import Box from '@mui/material/Box';
import FancyOdds from '../FancyOdds/Index';
import { useGetMatchDetailsQuery } from '../../../state/apis/betfair/apiSlice';
import { useParams } from 'react-router-dom';
// import FancyAllOdds from '../FancyOdds/FancyAllOdds';

const FancySection = () => {
	const { matchId } = useParams();

	const { data } = useGetMatchDetailsQuery(matchId ?? '', {
		pollingInterval: 500,
	});

	const tabs: ComponentProps<typeof Tab>['tabs'] = [
		{
			label: 'All Section',
			content: (
				<FancyOdds
					title='All Section'
					odd={
						(data &&
							Object.keys(data).reduce((accu, curr) => {
								if (!['Odds', 'Bookmaker'].includes(curr))
									return [...accu, ...data[curr as keyof typeof data]];
								else return accu;
							}, [] as any[])) ||
						[]
					}
				/>
			),
		},
		{
			label: 'Fancy 2',
			content: <FancyOdds title='Fancy 2' odd={data?.Fancy2 || []} />,
		},
		{
			label: 'Fancy 3',
			content: <FancyOdds title='Fancy 3' odd={data?.Fancy3 || []} />,
		},
		{
			label: 'Odd Even',
			content: <FancyOdds title='Odd Even' odd={data?.OddEven || []} />,
		},
		{
			label: 'Premium Cricket',
			content: (
				<Box p={2} fontSize='1.4rem'>
					Coming Soon...
				</Box>
			),
		},
	];

	return (
		<FancySectionContainer>
			<Tab
				tabs={tabs}
				contentRenderer={content => <Box component='div'>{content}</Box>}
			/>
		</FancySectionContainer>
	);
};

export default FancySection;
