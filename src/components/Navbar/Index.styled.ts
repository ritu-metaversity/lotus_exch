import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { darken } from '@mui/material/styles';

export const NavbarContainer = styled('nav')({
	flexGrow: 1,
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	// padding: '1rem 1.5rem!important',
    width: '100%',
    // maxWidth: '1270px',
    margin: '0 auto',
	height:'61px',
	[theme.breakpoints.up(1024)]: {
		justifyContent: 'space-between',
		paddingTop: '3rem!important',
		paddingBottom: '3rem!important',
	},
	justifyContent: "space-between"
}));

export const HamburgerIconContainer = styled(Box)(({ theme }) => ({
	'& .MuiIconButton-root': {
		fontSize: '2.5rem',
		marginLeft: '-1rem',
	},

	[theme.breakpoints.up(1024)]: {
		display: 'none',
	},
}));

export const LogoTitle = styled('div')(({ theme }) => ({
	fontSize: '2rem',
	fontWeight: 700,
	fontFamily: 'Helvetica Neue',
	textTransform: 'uppercase',
	flexGrow: 1,
	cursor: 'pointer',
    width: '105px',
	height:'60px',
	'& span': {
		color: theme.palette.accent.main,
		fontFamily: 'inherit',
	},

	[theme.breakpoints.up(1024)]: {
		// flexGrow: 0,
		// fontSize: '3.2rem',
		display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
		
	},[theme.breakpoints.down(1024)]: {
		// flexGrow: 0,
		// fontSize: '3.2rem',
		display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
		width:'105px',
		height:'60px'
	},
}));

export const ButtonContainer = styled(Box)({
	display: 'flex',
	gap: '1.8rem',
	alignItems: 'center',
});
export const MainWrapOne = styled(Box)({
	width:'60%',
	display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
});
export const MainWrapTwo = styled(Box)({
	width:'40%'
});

export const SearchIconContainer = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up(1024)]: {
		display: 'none',
	},
}));

export const AuthButtonContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: '0.6rem',
    height: "40px",
    marginRight: "10px",
	[theme.breakpoints.up(1024)]: {
		gap: '3rem',
	},
}));

export const AuthButtonContainerProfile = styled('div')(({ }) => ({
	    display: 'flex',
    border: '1px solid white',
    backgroundColor: 'white',
    color: 'black',
	boxShadow:' 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    borderRadius: "2px",
	alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: "40px",
	width: "70px"
}));
export const ProfileLogo = styled('div')(() => ({
    height: "20px"
}));
export const AccountBalanceData = styled('div')(() => ({
height:"20px",
fontSize:"10px"
}));


const authButtonDesktopViewStyles = {
	display: 'none',
	fontSize: '1.2rem',

	'&:hover': {
		cursor: 'pointer',
		background: 'transparent',
		textDecoration: 'underline',
		color: '#FFFFFF',
	},
};

export const SingUpButton = styled(Button)(({ theme }) => ({
	color: '#333333',
	padding: '1.3rem',
	fontWeight: 400,
	background: '#FFFFFF',
	borderRadius: '2px',
	whiteSpace: 'nowrap',
	textTransform: 'none',
	fontSize: '1.2rem',

	'&:hover': {
		background: darken('#FFFFFF', 0.1),
	},

	[theme.breakpoints.up(1024)]: {
		display: 'none',
	},
}));

export const SignInButton = styled(Button)(({ theme }) => ({
	textTransform: 'none',

	[theme.breakpoints.up(1024)]: {
		display: 'none',
	},
}));

export const SignInLink = styled('p')(({ theme }) => ({
	color: theme.palette.accent[100],
	...authButtonDesktopViewStyles,
	[theme.breakpoints.up(1024)]: {
		display: 'block',
	},
}));

export const SignUpLink = styled(SignInLink)({});

export const NavbarProfileContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	fontSize: '2.5rem',

	'& .profile-media': {
		color: '#FFFFFF',
		marginLeft: '1.7rem',
		display: 'none',

		[theme.breakpoints.up(768)]: {
			display: 'flex',
		}
	},

	'& .MuiIconButton-root': {
		color: 'white',
		fontSize: '2.5rem',
	},

	'& .search-icon-button': {
		marginLeft: '0.9rem',
	},
}));

/* NAVBAR SEARCH INPUT */
export const NavbarInputContainer = styled('div')(({ theme }) => ({
	display: 'none',
	fontSize: '1rem',
	width: '21.5rem',

	'& .MuiInputBase-root': {
		padding: '1rem',
		background: '#FFFFFF',
		gap: '8px',
		borderRadius: '2px',
		alignItems: 'flex-end',
		width: '100%',
	},

	'& input': {
		padding: 0,
	},

	'& .icon': {
		display: 'flex',

		'& svg': {
			fill: theme.palette.grey[500],
		},
	},

	[theme.breakpoints.up(1024)]: {
		display: 'block',
	},
}));

/* NAVBAR DATE TIME */
export const NavbarDateTimeContainer = styled('div')(({ theme }) => ({
	display: 'none',
	fontSize: '1.2rem',
	gap: '5px',
	alignItems: 'flex-end',
	fontWeight: 700,
	lineHeight: 1,

	[theme.breakpoints.up(1024)]: {
		display: 'flex',
	},
}));

export const NavbarDate = styled('div')({
	fontWeight: 500,
});

export const NavbarTime = styled('div')({
	fontSize: '1.5rem',
});

export const NavbarTimeZone = styled('div')(({ theme }) => ({
	color: theme.palette.accent[100],
	cursor: 'pointer',
}));

/* SECONDARY NAVBAR */
export const SecondaryNavbarContainer = styled('div')(({ theme }) => ({
	display: 'none',

	[theme.breakpoints.up(1024)]: {
		display: 'block',
		marginBottom: '2px',
		padding: '4px 0',
		background: '#FFFFFF',
		boxShadow: '0px 2px 2px 0px #00000040',
		position: 'relative',
		zIndex: theme.zIndex.secondaryNav,
	},
}));

export const SecondaryNavbarList = styled('ul')(({ theme }) => ({
	maxWidth: '117rem',
	margin: '0 auto',

	[theme.breakpoints.up(1024)]: {
		display: 'flex',
		justifyContent: 'space-evenly',
		gap: '3rem',

		'& li:first-of-type': { listStyleType: 'none' },
	},
}));

interface NavbarItemProps {
	highlighted?: boolean;
}

export const SecondaryNavbarItem = styled('li', {
	shouldForwardProp: prop => prop !== 'highlighted',
})<NavbarItemProps>(({ theme, highlighted }) => ({
	textTransform: 'uppercase',
	fontSize: '1.2rem',
	color: highlighted ? theme.palette.accent[400] : theme.palette.blue[100],
	fontWeight: 700,

	'& a': {
		textDecoration: 'none',
		color: 'inherit',
	},

	'&::marker': {
		color: theme.palette.grey[900],
	},
}));


