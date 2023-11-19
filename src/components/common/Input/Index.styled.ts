import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

export const InputContainer = styled(Box)({
	background: 'transparent',
	
});

export const StyledLabel = styled('label')(({ theme }) => ({
	fontSize: '1.4rem',
	color: theme.palette.grey[1200],
	display: 'inline-block',
	margin: '0 0 1rem 0.3rem',
	fontWeight: 600,

	[theme.breakpoints.up(1512)]: {
		fontSize: '1.8rem',
	},
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
	padding: '1.5rem',
	borderRadius: '4px',
	background: theme.palette.grey.main,
	fontSize: '1.4rem',
	fontWeight: 500,
	color: theme.palette.grey[900],
	width: '100%',
	height:"48px",

	'& ::placeholder': {
		color: 'inherit',
		opacity: 1,
		fontWeight: 'inherit',
	},

	[theme.breakpoints.up(1512)]: {
		fontSize: '2.4rem',
		paddingLeft: '2.4rem',
	},
}));

export const InputAlert = styled('p')(({ theme }) => ({
	fontSize: '1.4rem',
	color: 'red',
	margin: '0.5rem 0 0 0.3rem',

	[theme.breakpoints.up(1512)]: {
		fontSize: '1.6rem',
	},
}));
