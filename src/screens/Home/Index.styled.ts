import styled from '@mui/material/styles/styled';

export const HomeContainer = styled('div')(({ theme }) => ({
	margin: '0.5rem',

	[theme.breakpoints.up(1024)]: {
		margin: '14px 14px 0px 0px',
	},
}));
