import styled from '@mui/material/styles/styled';

export const SectionHeaderContainer = styled('header')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	fontSize: '2.4rem',
	// background: theme.palette.primary[300],
	color: '#FFFFFF',
	padding: '1rem',
	height: '42px',
	[theme.breakpoints.up(1512)]: {
		fontSize: '3.5rem',
	},
}));

export const SectionHeaderLeft = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '0.6rem',
    width: "100%",


	[theme.breakpoints.up(1024)]: {
		gap: '1rem',
	},
}));

export const SectionHeaderTitle = styled('div')({
	fontSize: '14px',
	fontWeight: 700,
	display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
	
});

export const SectionHeaderRight = styled('div')({});
