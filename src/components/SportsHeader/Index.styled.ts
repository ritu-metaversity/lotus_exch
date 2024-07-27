import styled from '@mui/material/styles/styled';

export const SportsHeaderContainer = styled('div')(({ theme }) => ({
	background: '#FFFFFF',
	padding: '1rem',
	display: 'flex',
	justifyContent: 'space-between',

	[theme.breakpoints.up(1512)]: {
		// padding: '2.3rem',
	},
}));

export const SportsHeaderDescription = styled('div')(({ theme }) => ({
	flex: 1,
	color: '#000000',
	fontSize: '2rem',
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',

	[theme.breakpoints.up(1512)]: {
		fontSize: '2.8rem',
	},
}));

export const SportsHeaderName = styled('div')({
	fontSize: '1.6rem',
	fontWeight: 700,
	color: '#000000',
});

export const SportsHeaderContent = styled('div')({
	flex: 1,
});

export const DefaultStaticContentContainer = styled('div')(({ theme }) => ({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	fontSize: '1rem',
	color: '#000000',
	// padding: '0 1.5rem',
	maxWidth: '140px',
	marginLeft: 'auto',
    width: "100%",
	[theme.breakpoints.up(1024)]: {
		maxWidth: '450px',
	},
}));
