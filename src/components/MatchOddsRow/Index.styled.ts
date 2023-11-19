import styled from '@mui/material/styles/styled';
import FlexBetween from '../common/FlexBetween/Index';

export const MatchOddsRowContainer = styled(FlexBetween)<{isFancy?:boolean}>(({ theme,isFancy }) => ({
	background: '#FFFFFF',
	padding: '0 1rem',
	borderBottom: '1px solid #034a010a',
    height: "38px",
	paddingRight: '0',
	margin:isFancy? "6px 0":undefined,
	[theme.breakpoints.up(1024)]: {
		padding: '0 0 0 2rem',
	},
}));

export const MatchOddsRowTitle = styled('div')(({ theme }) => ({
	fontSize: '1.2rem',
	margin: '1rem 0',
	display:"flex",
	justifyContent:"space-between",
	alignItems:"center",
	width: "100%",

	[theme.breakpoints.up(1024)]: {
		margin: '1.8rem 0',
	width: "50%",

	},
}));

export const MatchOddsRowContent = styled('div')(({theme,content})=>({
	"&::after":{
			content:content?JSON.stringify(content):undefined,
			position:"absolute",
			width:"100%",
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			color:"white",
			height:"100%",
			background:"rgb(0 0 0 / 24%)"
		},
		position:"relative",
	alignSelf: 'stretch',
	display:"flex",
	justifyContent:"center",
	alignItems:"center",
	width:"60%",

	[theme.breakpoints.up(1024)]:{

		width:"60%"
	}
}));

export const LedgerAndPnl = styled('div')({
	display:"flex",
	justifyContent:"space-around",
	alignItems:"center",
	width:"20%",
})
export const TypoGraphy = styled('div')({
margin: "2px"
})

export const MinMax = styled('div')(({theme})=>({
	display:"flex",
	[theme.breakpoints.down(1024)]:{
		display:"none"
	},
	flexDirection:"column",
	// columnSpan:2,
	// gridColumn:"5 / span 2",
	width:"100%",
    // marginTop: "11px"
}))
