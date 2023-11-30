import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import "./SignIn.css"
import EyeOpen from '@mui/icons-material/RemoveRedEye';
import EyeClose from '@mui/icons-material/VisibilityOff'; import {
	SignInWrapper,
} from './Index.styled';
import { signInSchema, SignInFormData } from '../../validations/schemas/signIn';
import { useIsSelfByAppUrlMutation, useSingInMutation } from '../../state/apis/main/apiSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { login } from '../../state/features/auth/authSlice';
import { Modal } from '@mui/material';
import CloseBtnnLogin from "../../../public/assets/icons/CloseBtnnLogin.svg"
import SignUpPage from './SignUpPage';
import axios from 'axios';
const initialFormValues: SignInFormData = {
	userId: '',
	password: '',
};

const SignIn = ({ open, closeLoginModal, loginRegister, loginRegisterButtonSwitch, loginRegisterButtonSwitchNew }: any) => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [triger, { data: IsSelfByAppUrl }] = useIsSelfByAppUrlMutation();
	useEffect(() => {
		triger({ appUrl: window.location.hostname.replace("www.", "") })
	}, [])
	const [showPassword, setShowPassword] = useState(false);

	const [signIn, { data, error }] = useSingInMutation();
	const {

	} = useForm<SignInFormData>({
		defaultValues: initialFormValues,
		resolver: yupResolver(signInSchema),
	});

	useEffect(() => {
		if (data?.userId) {
			dispatch(login(data));
			let navigationUrl = '/home';
			handleCloseModal()
			axios
				.post(
					"https://api.247idhub.com/api/qtech/authentication",
					{},
					{
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${data?.token}`,
						},
					}
				)
				.then((response) => {
					localStorage.setItem("GameToken", response?.data?.data?.access_token);
				})
			console.log(data?.token, "erbbqeevbqeve");

			if (data.passwordtype === 'old') navigationUrl = '/change-password';
			navigate(navigationUrl);
		}

		if (data?.status === false && data.message) {
			const message = data.message;
			toast.error(message);
		}

		if (error && 'data' in error) {
			const message = (error.data as { message: string }).message;
			toast.error(message);
		}
	}, [data, error]);
	const [loginRegisterrrrr, setLoginRegisterrrrrr] = useState<string>("")
	useEffect(() => {
		setLoginRegisterrrrrr(loginRegister)
	}, [loginRegister])


	const handlePasswordVisibility = () => {
		console.log("dsfsdfsdfc")
		setShowPassword(!showPassword)
	};

	// const navigateToSignUp = () => navigate('/signup');

	// const onSignInFormSubmit = (data: SignInFormData) => {
	// 	console.log("hui");

	// 	signIn({ ...data, appUrl: window.location.hostname });
	// };

	const [userId, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const host = window.location.hostname.replace("www.", "");

	const [loadinLogin, setLoadingLogin] = useState(false)

	console.log(data, loadinLogin, "mjhygtfrdxcvb");


	const handleClick = async (e: any) => {
		e.preventDefault();
		setLoadingLogin(true)

		if (password === "" && userId === "") {

			setLoadingLogin(false)
			return toast.error("All fields are mandatory")

		} else {


			const data = {
				userId,
				password,
				appUrl: host === "localhost" ? "localhost" : "localhost",
			};
			signIn(data)
			// axios
			// 	.post(
			// 		"https://api.247365.exchange/admin-new-apis/login/client-login",
			// 		data
			// 	)
			// 	.then((response: any) => {

			// 		localStorage.setItem("token", response?.data?.token);
			// 		localStorage.setItem("user", JSON.stringify(response.data));
			// 		localStorage.setItem("passwordType", response?.data?.passwordtype);
			// 		handleCloseModal()

			// 		axios
			// 			.post(
			// 				"https://api.247idhub.com/api/qtech/authentication",
			// 				{},
			// 				{
			// 					headers: {
			// 						"Content-Type": "application/json",
			// 						Authorization: `Bearer ${response?.data?.token}`,
			// 					},
			// 				}
			// 			)
			// 			.then((response) => {
			// 				console.log(response, "responsesfvfd");

			// 				localStorage.setItem("GameToken", response?.data?.data?.access_token);
			// 			})
			// 		if (response?.data?.passwordtype === "old") {
			// 			setLoadingLogin(false)
			// 			navigate("/Change-Password", { replace: true });
			// 		} else {
			// 			setLoadingLogin(false)
			// 			navigate("/");
			// 		}
			// 	})
		}
	};
	// const handleDemoAccount = () => {
	// 	// setLoadingLogin(true)
	// 	baseUrl: import.meta.env.VITE_APP_API_URL,

	// 		axios
	// 			.post(
	// 				"https://api.247365.exchange/admin-new-apis/login/demo-user-creation-login",
	// 				{ appUrl: window.location.hostname.replace("www.", "") }
	// 			)
	// 			.then((response) => {
	// 				if (response?.data?.token) {
	// 					axios.defaults.headers.common.Authorization = `Bearer ${response?.data?.token}`
	// 					localStorage.setItem("token", response?.data?.token);
	// 					localStorage.setItem("user", response?.data?.userId);
	// 					localStorage.setItem("passwordType", response?.data?.passwordtype);
	// 					localStorage.setItem("userTypeInfo", response?.data?.userTypeInfo);
	// 					// QTECH APPPIIIIIIIIIIIII
	// 					handleCloseModal()
	// 					axios
	// 						.post(
	// 							"https://api.247idhub.com/api/qtech/authentication",
	// 							{},
	// 							{
	// 								headers: {
	// 									"Content-Type": "application/json",
	// 									Authorization: `Bearer ${response?.data?.token}`,
	// 								},
	// 							}
	// 						)
	// 						.then((response) => {
	// 							localStorage.setItem("GameToken", response?.data?.data?.access_token);
	// 						})

	// 					// setIsSignedIn(true);
	// 					// setShow(true)
	// 					// setLoadingLogin(false)
	// 					navigate("/terms", { replace: true });
	// 				} else {
	// 					if (response?.data?.status === false) {
	// 						toast.error(response?.data?.message)
	// 					}
	// 				}
	// 			})
	// 			.catch((err) => {
	// 				console.log(err, "fsdsdfsdfsd");

	// 			})
	// }
	const handleChange = (e: any) => {
		if (e.target.name === "login") {
			setLogin(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	};

	const handleCloseModal = () => {
		closeLoginModal(false)
	}

	const handleRegisterBtn = () => {
		setLoginRegisterrrrrr("register")
	}

	const handleSwitchLoginReg = (val: any) => {
		loginRegisterButtonSwitchNew(val)
	}
	return (

		<SignInWrapper>

			<Modal

				open={open}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className='signin_popup_forlogin'
			>
				{loginRegisterrrrr === "login" ?

					< div className='login-step-wrapper '>
						<div className='login_tabs'>
							<div className={`sign_up  ${loginRegisterrrrr === "login" ? "inActiveRight" : ""}`} onClick={() => handleSwitchLoginReg("register")} style={{ cursor: "pointer" }}>Sign Up</div>
							<div className={`login_in`} onClick={() => handleSwitchLoginReg("login")}     >Login In</div>
						</div>

						<div className='pop-up-content_title'>
							<img src={IsSelfByAppUrl?.data?.logo} className='pop-up-content_title-logo' />
							<img onClick={handleCloseModal} src={CloseBtnnLogin} className='desk_modal' style={{ cursor: "pointer" }} />

							<img onClick={handleCloseModal} src="https://lotus365.co/static/media/closeLogin.3968ed62.svg" className='crossBtnLogog' style={{ cursor: "pointer" }} />



						</div>
						<form className='login-step-content' onSubmit={handleClick}>
							<div className='login-step-content__title'>Log in</div>
							<div className='loginInput_div' >
								<input
									autoComplete='off'
									className='loginInput'
									placeholder="Username"
									value={userId}
									name="login"
									onChange={handleChange}
								/>
								<input
									autoComplete='off'
									className='loginInput input_show'
									name="password"
									placeholder="Password"
									value={password}
									onChange={handleChange}
									type={showPassword ? 'text' : 'password'}
								/>



								<button onClick={handlePasswordVisibility} type='button' className='eyscloseeyelcoe' >
									{showPassword ? <EyeClose style={{ fontSize: "20px" }} /> : <EyeOpen style={{ fontSize: "20px" }} />}
								</button>
							</div>

							<div className='pop-up-content__buttons' >
								{/* #979797 */}
								{/* background-color: #f4d820; */}
								<button className='log_in_btn_btn' type='submit' style={{ backgroundColor: password && userId !== "" ? "#f4d820" : "#979797" }} disabled={password && userId !== "" ? false : true}>
									<div className="_shadow"></div>
									Log in
								</button>
							</div>
							<div className='pop-up-content__buttons-mobileView ' >
								{/* #979797 */}
								{/* background-color: #f4d820; */}
								<button className='log_in_btn_btn' type='submit' style={{ backgroundColor: "#f4d820" }} disabled={password && userId !== "" ? false : true}>
									<div className="_shadow"></div>
									Log in
								</button>
							</div>
							<div className='pop-up-content__buttons registerBtnHide' onClick={handleRegisterBtn}>

								<button className='register-button-link'>
									Register now
								</button>
							</div>
						</form>
						{/* </div> */}

					</div>

					:
					<SignUpPage loginRegisterrrrr={loginRegisterrrrr} closeLoginModal={closeLoginModal} loginRegisterButtonSwitch={loginRegisterButtonSwitch} />
				}
			</Modal >




		</SignInWrapper >
	);
};

export default SignIn;
