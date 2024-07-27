import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';

export const InPlayContainer = styled('div')(({ theme }) => ({
	'& .icon': {
		display: 'flex',
		height: 'auto',
	},

	'& header .icon': {
		width: '2.5rem',
	},

	'& .sports-header': {
		borderBottom: 'none',
		borderTop: `1px solid ${alpha(theme.palette.grey.main, 0.87)}`,
		alignItems:"center"
	},

	'& .sports-header .icon': {
		width: '2rem',
	},
}));
