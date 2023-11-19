import styled from '@mui/material/styles/styled';
import Tabs from '@mui/material/Tabs';

export const StyledTabs = styled(Tabs)({
	'& .MuiTab-root': {
		fontSize: '1.4rem',
		fontWeight: 400,
	},

	'& .MuiTabs-flexContainer button': {
		color: '#000000',
		// fontFamily: 'Helvetica Neue',
		fontSize: '1.4rem',
		fontWeight: 500,
		lineHeight: '1.9rem',
		padding: '1.5rem 1rem!important',
	},
});
