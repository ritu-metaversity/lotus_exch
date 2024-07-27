import styled from '@mui/material/styles/styled';

type OddCellContainer = {
	color: string;
	type:
		| 'team1back'
		| 'drawback'
		| 'team2back'
		| 'team1lay'
		| 'drawlay'
		| 'team2lay';
};

export const OddCellContainer = styled('div', {
	shouldForwardProp: props => props !== 'color' && props !== 'type',
})<OddCellContainer>(({ color, theme }) => ({
	// gridArea: type,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	rowGap: '3px',
	minWidth: '5rem',
	// alignSelf:"stretch",
	background: "#ddd",
	border: '1px solid #FFFFFF',
	color: '#000000',

	[theme.breakpoints.up(1024)]: {
		minWidth: '5.7rem',
		padding: '0.5rem 0',
		border: 'none',
		borderRight: `1px solid ${theme.palette.grey[300]}`,
	},
}));

export const OddValue = styled('div')({
	whiteSpace: 'nowrap',
	fontSize: '1.2rem',
	fontWeight: 700,
	lineHeight: '1.4rem',
	color: '#000000',
});

export const OddSize = styled('div')({
	whiteSpace: 'nowrap',
	fontSize: '0.9rem',
	fontWeight: 400,
	lineHeight: '1.1rem',
});
