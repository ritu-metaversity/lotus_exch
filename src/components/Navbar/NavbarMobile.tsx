import type { Dispatch, SetStateAction} from 'react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import BellIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/SearchRounded';
// import Icon from '../common/Icon/Index';
// import NavbarDateTime from './NavbarDateTime';
// import NavbarSearch from './NavbarSearch';
import {
	AuthButtonContainer,
	NavbarContainer,
	SignInButton,
	// SignUpLink,
	SingUpButton,
	// StyledToolbar
} from './Index.styled';
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectUser } from '../../state/features/auth/authSlice';
import SecondaryNavbar from './SecondaryNavbar';
import "./Header.css"
import { useGetBalanceUpdateQuery, useIsSelfByAppUrlMutation } from '../../state/apis/main/apiSlice';
// import SignIn from '../../screens/SignIn/Index';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface NavbarProps {
	sidebarExpanded: boolean;
	rightSidebarExpanded: boolean;
	setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
	setRightSideBarExpanded: Dispatch<SetStateAction<boolean>>;
}

const NavbarMobile = (props: NavbarProps) => {
	const { rightSidebarExpanded, sidebarExpanded, setSidebarExpanded, setRightSideBarExpanded } = props;
	const [open, setOpen] = React.useState(false);
	const { pathname } = useLocation();
	// const [signUpopen, setSignUpopen] = React.useState(false);
	const handleClose = () => setOpen(false);
	// const handleCloseSignUp = () => setSignUpopen(false);
	const [loginRegister, setLoginRegister] = useState("")
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	console.log(user, "useruser");
	localStorage.getItem("token")
	const handleLogoClick = () => navigate('/home');
	const handleSignInClick = () => {
		setOpen(true);
		// navigate('/signin')
		setLoginRegister("login")
	};
	const handleSignUpClick = () => {
		// setSignUpopen(true)
		setOpen(true);
		setLoginRegister("register")
	};
	// const TokenId = localStorage.getItem("token");

	// const isMatches = useMediaQuery("(max-width: 768px )")

	// const [userBalance, setuserBalance] = useState();
	// const [userLibality, setuserLibality] = useState(0);

	const { data } = useGetBalanceUpdateQuery(undefined, { pollingInterval: 3000, skip: !(localStorage.getItem("token")) });
	const [triger, { data: IsSelfByAppUrl }] = useIsSelfByAppUrlMutation();

	useEffect(() => {
		triger({ appUrl: window.location.hostname.replace("www.", "") })
	}, [])

	console.log(IsSelfByAppUrl, "IsSelfByAppUrl");
	const closeLoginModal = () => {
		setOpen(false)
	}

	const handleBackBtn=()=>{
		navigate(-1)
	}


	return (
		<NavbarContainer>
			<AppBar
				sx={{ left: sidebarExpanded ? 260 : "auto", right: rightSidebarExpanded ? 260 : 0 }}
			>
				<div className='wrapppor_for_both_view'>
					<div className="wrapppor_for_Mobile_view">
						<div className='left_side_logo_menu'>
							{pathname === "/home" ?

								(<MenuIcon style={{ fontSize: "26px" }} onClick={() => setSidebarExpanded(!sidebarExpanded)} />)
								:
								(<ArrowBackIcon style={{ fontSize: "25px" }}  onClick={()=>handleBackBtn()}/>)
							}
							{/* <img src="./assets/logo.png" style={{ width: "133px", height: "60px" }} onClick={handleLogoClick} /> */}
						</div>
						{localStorage.getItem("token") ?
							<div className='right_side_menu_pnl'>
								<SearchIcon style={{ fontSize: "26px" }} />
								<div onClick={() => setRightSideBarExpanded(o => !o)} className='profile_btn_andRightMenu'>

									<PersonIcon style={{ fontSize: "20px" }} />
									<span className='profit_data'>{data?.data?.balance
										? Number(data?.data?.balance - data?.data?.libality).toFixed(2)
										: "0.00"}</span>
								</div>
							</div>
							:
							<AuthButtonContainer>

								<SignInButton variant='accent' onClick={handleSignInClick}>
									Log In
								</SignInButton>
								<SingUpButton onClick={handleSignUpClick}>Sign Up</SingUpButton>
							</AuthButtonContainer>
						}
					</div>
				</div>
			</AppBar>
			<SecondaryNavbar />
			{/* <LoginRegister/> */}
			{/* <SignIn open={open} handleClose={handleClose} closeLoginModal={closeLoginModal} loginRegister={loginRegister} /> */}
			{/* <SignUp signUpopen={signUpopen} handleClose={handleCloseSignUp} /> */}

		</NavbarContainer>
	);
};

export default NavbarMobile;
