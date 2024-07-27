import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import './SignIn.css';
import EyeOpen from '@mui/icons-material/RemoveRedEye';
import EyeClose from '@mui/icons-material/VisibilityOff';
import { SignInWrapper } from './Index.styled';

import { Modal } from '@mui/material';
import CloseBtnnLogin from '../../../public/assets/icons/CloseBtnnLogin.svg';
import SignUpPage from './SignUpPage';


const SignIn = ({
	open,
	closeLoginModal,
	loginRegister,
	loginRegisterButtonSwitch,
	loginRegisterButtonSwitchNew,
}: any) => {

	const [showPassword, setShowPassword] = useState(false);

	
	
	const [loginRegisterrrrr, setLoginRegisterrrrrr] = useState<string>('');
	useEffect(() => {
		setLoginRegisterrrrrr(loginRegister);
	}, [loginRegister]);

	const handlePasswordVisibility = () => {
		console.log('dsfsdfsdfc');
		setShowPassword(!showPassword);
	};

	// const navigateToSignUp = () => navigate('/signup');

	// const onSignInFormSubmit = (data: SignInFormData) => {
	// 	console.log("hui");

	// 	signIn({ ...data, appUrl: window.location.hostname });
	// };

	const [userId, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const host = window.location.hostname.replace('www.', '');

	const [loadinLogin, setLoadingLogin] = useState(false);

	
	const handleClick = async (e: any) => {
		e.preventDefault();
		setLoadingLogin(true);

		if (password === '' && userId === '') {
			setLoadingLogin(false);
			return toast.error('All fields are mandatory');
		} else {
			const data = {
				userId,
				password,
				appUrl: host === 'localhost' ? 'localhost' : host,
			};
			
		}
	};
	
	const handleChange = (e: any) => {
		if (e.target.name === 'login') {
			setLogin(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		}
	};

	const handleCloseModal = () => {
		closeLoginModal(false);
	};

	const handleRegisterBtn = () => {
		setLoginRegisterrrrrr('register');
	};

	const handleSwitchLoginReg = (val: any) => {
		loginRegisterButtonSwitchNew(val);
	};
	return (
		<SignInWrapper>
			<Modal
				open={open}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				className='signin_popup_forlogin'
			>
				{loginRegisterrrrr === 'login' ? (
					<div className='login-step-wrapper '>
						<div className='login_tabs'>
							<div
								className={`sign_up  ${
									loginRegisterrrrr === 'login' ? 'inActiveRight' : ''
								}`}
								onClick={() => handleSwitchLoginReg('register')}
								style={{ cursor: 'pointer' }}
							>
								Sign Up
							</div>
							<div
								className={`login_in`}
								onClick={() => handleSwitchLoginReg('login')}
							>
								Login In
							</div>
						</div>

						<div className='pop-up-content_title'>
							<img
								// src={IsSelfByAppUrl?.data?.logo}
								src='./assets/logo.png'
								className='pop-up-content_title-logo'
							/>
							<img
								onClick={handleCloseModal}
								src={CloseBtnnLogin}
								className='desk_modal'
								style={{ cursor: 'pointer' }}
							/>

							<img
								onClick={handleCloseModal}
								src='https://lotus365.co/static/media/closeLogin.3968ed62.svg'
								className='crossBtnLogog'
								style={{ cursor: 'pointer' }}
							/>
						</div>
						<form className='login-step-content' onSubmit={handleClick}>
							<div className='login-step-content__title'>Log in</div>
							<div className='loginInput_div'>
								<input
									autoComplete='off'
									className='loginInput'
									placeholder='Username'
									value={userId}
									name='login'
									onChange={handleChange}
								/>
								<input
									autoComplete='off'
									className='loginInput input_show'
									name='password'
									placeholder='Password'
									value={password}
									onChange={handleChange}
									type={showPassword ? 'text' : 'password'}
								/>

								<button
									onClick={handlePasswordVisibility}
									type='button'
									className='eyscloseeyelcoe'
								>
									{showPassword ? (
										<EyeClose style={{ fontSize: '20px' }} />
									) : (
										<EyeOpen style={{ fontSize: '20px' }} />
									)}
								</button>
							</div>

							<div className='pop-up-content__buttons'>
								
								<button
									className='log_in_btn_btn'
									type='submit'
									style={{
										backgroundColor:
											password && userId !== '' ? '#f4d820' : '#979797',
									}}
									disabled={password && userId !== '' ? false : true}
								>
									<div className='_shadow'></div>
									Log in
								</button>
							</div>
							<div className='pop-up-content__buttons-mobileView '>
								
								<button
									className='log_in_btn_btn'
									type='submit'
									style={{ backgroundColor: '#f4d820' }}
									disabled={password && userId !== '' ? false : true}
								>
									<div className='_shadow'></div>
									Log in
								</button>
							</div>
							<div
								className='pop-up-content__buttons registerBtnHide'
								onClick={handleRegisterBtn}
							>
								<button className='register-button-link'>Register now</button>
							</div>
						</form>
						{/* </div> */}
					</div>
				) : (
					<SignUpPage
						loginRegisterrrrr={loginRegisterrrrr}
						closeLoginModal={closeLoginModal}
						loginRegisterButtonSwitch={loginRegisterButtonSwitch}
					/>
				)}
			</Modal>
		</SignInWrapper>
	);
};

export default SignIn;
