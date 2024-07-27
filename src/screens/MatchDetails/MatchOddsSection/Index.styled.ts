import styled from '@mui/material/styles/styled';

export const MatchOddsSectionContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.up(1024)]: {
		rowGap: '2rem',
	},
}));
