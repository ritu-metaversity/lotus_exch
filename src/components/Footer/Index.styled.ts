import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';

export const FooterContainer = styled('footer')(({"aria-expanded":expanded})=>({
	...(expanded?{
		position:"relative",
		right:"260px",
	}:{}),
	background: '#000000',
}));

export const FooterWrapper = styled('div')({
	maxWidth: '125rem',
	margin: '0 auto',
	padding: '1.5rem 1.9rem 2.4rem 1.9rem',
});

export const DownloadApp = styled('div')({
	margin: '0 auto 2.4rem auto',
	maxWidth: '13.5rem',
	'& .icon svg': { height: '4rem' },
});

export const FaqContainer = styled('div')({
	display: 'flex',
	justifyContent: 'center',
	flexWrap: 'wrap',
	gap: '1.6rem 0.8rem',
});

export const FaqLink = styled(Link)(({ theme }) => ({
	textDecoration: 'none',
	background: theme.palette.primary.main,
	color: '#FFFFFF',
	borderRadius: '10px',
	whiteSpace: 'nowrap',
	padding: '1rem 1.6rem',
	fontSize: '1.5rem',
	fontFamily: 'Helvetica Neue',
	fontWeight: '700',
}));

export const WhatsApp = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	columnGap: '1.5rem',
	marginTop: '1.4rem',
	marginBottom: '2.1rem',

	[theme.breakpoints.up(1024)]: {
		marginBottom: '3.4rem',
	},
}));

export const WhatsappTitle = styled('div')({
	fontFamily: 'Helvetica Neue',
	fontSize: '2rem',
	fontWeight: 700,
	color: '#FFFFFF',
	textTransform: 'uppercase',
});

export const FooterFeaturette = styled('div')({
	display: 'flex',
	flexDirection: 'column',
});

export const FooterAbout = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: '4.7rem',
	marginBottom: '6rem',

	[theme.breakpoints.up(768)]: {
		flexDirection: 'row',
		columnGap: '1rem',
		marginBottom: '4rem',
	},
}));

export const FooterAboutImage = styled('img')({
	width: '100%',
	maxWidth: '215px',
});

export const FooterAboutCompany = styled('div')({
	fontFamily: 'Roboto',
	fontSize: '1.3rem',
	color: '#FFFFFF',
	fontWeight: 400,
	lineHeight: '1.9rem',
});

export const FooterCompaniesContainer = styled('div')({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	columnGap: '6rem',
});

export const FooterSocials = styled('div')(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2rem',
	marginBottom: '3rem',

	'& img': {
		width: '100%',
		maxWidth: '40px',
	},

	[theme.breakpoints.up(1024)]: {
		order: 3,
	},
}));

export const FooterRuleRegulations = styled('div')(({ theme }) => ({
	color: theme.palette.grey[600],
	fontFamily: 'Roboto',
	fontSize: '1.3rem',
	fontWeight: 400,
	textAlign: 'center',
}));
