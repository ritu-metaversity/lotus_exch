import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import BellIcon from '@mui/icons-material/NotificationsOutlined';
// import SearchIcon from '@mui/icons-material/SearchRounded';
// import Icon from '../common/Icon/Index';
import NavbarDateTime from './NavbarDateTime';
import NavbarSearch from './NavbarSearch';
import {
	AuthButtonContainer,
	NavbarContainer,
	SignInButton,
	SingUpButton,
} from './Index.styled';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout, selectUser } from '../../state/features/auth/authSlice';
import SecondaryNavbar from './SecondaryNavbar';
import './Header.css';
// import { useIsSelfByAppUrlMutation } from '../../state/apis/main/apiSlice';
import SignIn from '../../screens/SignIn/Index';
import AccountPopup from './AccountPopup';
import { useDispatch } from 'react-redux';
import ammount from '../../../public/assets/icons/settingAcount.svg';
import ammountLog from '../../../public/assets/icons/login.svg';
// interface NavbarProps {
// 	sidebarExpanded: boolean;
// 	rightSidebarExpanded: boolean;
// 	setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
// 	setRightSideBarExpanded: Dispatch<SetStateAction<boolean>>;
// }

const NavbarDesktop = () => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => setOpen(false);
	const [loginRegister, setLoginRegister] = React.useState('');
	const dispatch = useDispatch();
	const loginRegisterButtonSwitch = (val: any) => {
		setLoginRegister(val);
		console.log(val, 'adfsdffsdfsd');
	};

	const loginRegisterButtonSwitchNew = (val: any) => {
		setLoginRegister(val);
		console.log(val, 'adfsdffsdfsd');
	};

	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	console.log(user, 'dfbvfbdbdgbwr');

	const handleLogout = () => {
		navigate('/home');
		localStorage.clear();
		dispatch(logout());
	};

	useEffect(() => {
		// `${REACT_APP_API_URL}/util/validate-jwt-token`
	}, []);
	const handleSignInClick = () => {
		setOpen(true);
		setLoginRegister('login');
	};

	const handleSignUpClick = () => {
		// navigate('/signup')
		setOpen(true);
		setLoginRegister('register');
	};
	// <img src="../../../public/assets/icons/Logo-lotus365.png" style={{ width: "105px" }} />
	//<IconButton
	//							onClick={() => setSidebarExpanded(!sidebarExpanded)}
	//							onBlur={() => setSidebarExpanded(false)}
	//							color='inherit'
	//							aria-label='menu'
	//						></IconButton>
	// <MenuIcon fontSize='inherit' />
	// <SignInButton variant='accent' onClick={handleSignInClick}>
	// 									Log In
	// 								</SignInButton>
	// 								<SingUpButton onClick={handleSignUpClick}>Sign Up</SingUpButton>
	// 								<SignInLink onClick={handleSignInClick}>Log In</SignInLink>
	// 								<SignUpLink onClick={handleSignUpClick}>Sign Up</SignUpLink>

	// const [triger, { data: IsSelfByAppUrl }] = useIsSelfByAppUrlMutation();

	// useEffect(() => {
	// 	triger({ appUrl: window.location.hostname.replace('www.', '') });
	// }, []);
	const [showPopup, setShowPopup] = useState(false);
	const handleAccountPopup = () => {
		if (showPopup === false) {
			setShowPopup(true);
		} else {
			setShowPopup(false);
		}
	};
	const popupclose = () => {
		setShowPopup(false);
		console.log('lkjhgrttry657');
	};
	const handleHomee = () => {
		navigate('/home');
	};
	return (
		<NavbarContainer>
			<AppBar position={'static'}>
				{/* <StyledToolbar> */}
				<div className='wrapppor_for_both_view'>
					<div className='wrapppor_for_Mobile_view'>
						{/* <div className='left_side_logo_menu'>
							<MenuIcon style={{ fontSize: "26px" }} onClick={() => setSidebarExpanded(!sidebarExpanded)} />
							<img src="../../../public/assets/icons/Logo-lotus365.png" style={{ width: "105px" }} onClick={handleLogoClick} />

						</div> */}
						{localStorage?.getItem('token') ? (
							<div className='right_side_menu_pnl'>
								{/* <SearchIcon style={{ fontSize: "26px" }} />
								<div onClick={() => setRightSideBarExpanded(o => !o)} className='profile_btn_andRightMenu'>

									<PersonIcon style={{ fontSize: "20px" }} />
									<span className='profit_data'>1,000</span>
								</div> */}
							</div>
						) : (
							<AuthButtonContainer>
								<SignInButton variant='accent' onClick={handleSignInClick}>
									Log In
								</SignInButton>
								<SingUpButton onClick={handleSignUpClick}>Sign Up</SingUpButton>
							</AuthButtonContainer>
						)}
					</div>
					<div className='wrapppor_for_Desktop_view'>
						<div className='wrappor_inner_header'>
							<img
								src="./assets/logo.png"
								style={{ width: '144px', height: '37px' }}
								onClick={handleHomee}
							/>
							<NavbarDateTime />
							<NavbarSearch />
							{localStorage?.getItem('token') ? (
								<div className='header_last_login_details'>
									<span>Logged in as {user?.userId}</span>
									{/* <span>Last logged in: 09/09/2023 22:25</span> */}
								</div>
							) : (
								''
							)}
							{localStorage?.getItem('token') ? (
								<div className='header_Signup_login_btn'>
									<span onClick={handleAccountPopup}>
										<img src={ammount} style={{ padding: '0px 5px' }} />
										Account
									</span>
									{showPopup && <AccountPopup popupclose={popupclose} />}
									<span onClick={handleLogout}>
										<img src={ammountLog} style={{ padding: '0px 5px' }} />
										LogOut
									</span>
								</div>
							) : (
								<div className='header_Signup_login_btn'>
									{/* <img src='.././../../public/assets/icons/login.svg' /> */}
									{/* <img src='.././../../public/assets/settingAcount.svg' /> */}
									<span onClick={handleSignInClick}>Log In</span>
									<span onClick={handleSignUpClick}>Sign Up</span>
								</div>
							)}
						</div>
					</div>
				</div>
				{/* </StyledToolbar> */}
			</AppBar>
			<SecondaryNavbar />
			<SignIn
				open={open}
				handleClose={handleClose}
				closeLoginModal={() => setOpen(false)}
				loginRegister={loginRegister}
				loginRegisterButtonSwitch={loginRegisterButtonSwitch}
				loginRegisterButtonSwitchNew={loginRegisterButtonSwitchNew}
			/>
			{/* <SignUp signUpopen={signUpopen} handleClose={handleCloseSignUp} /> */}
		</NavbarContainer>
	);
};

export default NavbarDesktop;
