import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

export const LayoutWrapper = styled(Box)<{pathname:any}>(({ theme,pathname }) => ({
	display: 'flex',
	// overflow: 'hidden',

	[theme.breakpoints.up(1024)]: {
		display: 'flex',
    maxWidth:["/Card-Game", "/Slot-Games", "/live-casino","/Internationl-casino"].includes(pathname) ? '100%':'1280px',
      width:["/Card-Game", "/Slot-Games", "/live-casino","/Internationl-casino"].includes(pathname) ? '100%':'77%',
    minHeight: 'calc(100% - 195px)',
    margin: '0 auto 15px',
	// height:"80vh"
	},
}));

export const LayoutOutletContainer = styled('main')<{isFull?:boolean}>(({ theme,"aria-expanded":ariaExpanded,isFull }) => ({
	width: '100%',
	// height:"0px", 
	...(ariaExpanded?{
		position:"relative",
		right:"260px"
	}:{
		

	}),
	[theme.breakpoints.up(1024)]: {
		width: isFull?'57.1%':"100%",
		// width: '100%',
	},
}));

export const LayoutBetLipContainer = styled('div')(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up(1024)]: {
		width: '26%',
		display: 'block',
		padding: "0px 0px 0px 17px"

		// border: '1px solid red',
	},
}));
export const LayoutLeftSideContainer = styled('div')(({ theme }) => ({
	// display: 'none',

	[theme.breakpoints.up(1024)]: {
		padding: '0px 3px',
		position:"sticky",
		top:"0px"
	},
}));