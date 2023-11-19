// import { MouseEvent, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import Checkbox from '@mui/material/Checkbox';
// import Input from '../../components/common/Input/Index';
// import EyeOpen from '@mui/icons-material/RemoveRedEye';
// import EyeClose from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import {
// 	SignUpContainer,
// 	SignUpForm,
// 	SignUpAgreement,
// 	AgreementPrompt,
// 	SignUpButtonContainer,
// 	SignInButton,
// 	SignUpButton,
// 	LoginPrompt,
// 	SignUpHeroImage,
// 	SignUpWrapper,
// 	SignUpHeading,
// } from './Index.styled';
// import { useIsSelfByAppUrlMutation, useSignUpMutation } from '../../state/apis/main/apiSlice';
// import { SignUpFormData, signUpSchema } from '../../validations/schemas/signUp';
// import { SignInWrapper } from '../SignIn/Index.styled';
// import { Modal } from '@mui/material';

// interface ShowPassword {
// 	password: boolean;
// 	confirmPassword: boolean;
// }

// const SignUp = ({ signUpopen, handleClose }: any) => {
// 	const navigate = useNavigate();
// 	const [isChecked, setIsChecked] = useState(false);
// 	const [visible, setVisible] = useState<ShowPassword>({
// 		password: false,
// 		confirmPassword: false,
// 	});
// 	const [showPassword, setShowPassword] = useState(false);

// 	const [triger, { data: IsSelfByAppUrl }] = useIsSelfByAppUrlMutation();

// 	// useEffect(()=>{
// 	// 	triger()
// 	// }, [])

// 	const initialFormValues: SignUpFormData = {
// 		userId: '',
// 		username: '',
// 		mobile: '',
// 		password: '',
// 		confirmPassword: '',
// 	};

// 	const {
// 		control,
// 		handleSubmit,
// 		formState: { errors },
// 		reset,
// 	} = useForm<SignUpFormData>({
// 		defaultValues: initialFormValues,
// 		resolver: yupResolver(signUpSchema),
// 	});

// 	const [signUp, { isLoading, data, error }] = useSignUpMutation();

// 	const handleCheck = () => setIsChecked(!isChecked);

// 	const handlePasswordVisibility = (
// 		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
// 	) => {
// 		const { name } = e.currentTarget;

// 		if (name === 'password')
// 			setVisible({ ...visible, password: !visible.password });
// 		else if (name === 'confirmPassword')
// 			setVisible({ ...visible, confirmPassword: !visible.confirmPassword });
// 	};

// 	const navigateToSignIn = () => navigate('/signin');

// 	const onSignUpFormSubmit: SubmitHandler<SignUpFormData> = data => {
// 		if (!isChecked) return;
// 		signUp({ ...data, appUrl: window.location.hostname });
// 	};

// 	useEffect(() => {
// 		if (data) {
// 			reset();
// 			toast.success(data.message);
// 		}

// 		if (error && 'data' in error) {
// 			const message = (error.data as { message: string }).message;
// 			toast.error(message);
// 		}
// 	}, [data, error]);

// 	return (
// 		<SignInWrapper>
// 			<Modal
// 				open={signUpopen}
// 				onClose={handleClose}
// 				aria-labelledby="modal-m	odal-title"
// 				aria-describedby="modal-modal-description"
// 				className='signin_popup_forlogin'
// 			>
// 				{/* <div className='tabButtons'> */}

// 				<div className='login-step-wrapper '>
// 					{/* <div className='login_tabs'>
// 						<div className='sign_up inActiveLeft'>Sign Up</div>
// 						<div className='login_in'>Login In</div>
// 					</div> */}

// 					<div className='pop-up-content_title'>
// 						<img src={IsSelfByAppUrl?.data?.logo} className='pop-up-content_title-logo' />
// 						<img onClick={handleClose} src="https://lotus365.co/static/media/closeLogin.3968ed62.svg" className='pop-up-content_title-Crose_icon' />

// 					</div>
// 					<div className='login-step-content'>
// 						<div className='login-step-content__title'>Sign Up</div>
// 						<div className='loginInput_div'>
// 							<input
// 								autoComplete='off'
// 								className='loginInput'
// 							/>
// 							<input
// 								autoComplete='off'
// 								className='loginInput input_show'
// 								type={showPassword ? 'text' : 'password'}
// 							/>
// 							<input
// 								autoComplete='off'
// 								className='loginInput input_show'
// 								type={showPassword ? 'text' : 'password'}
// 							/>
// 							<input
// 								autoComplete='off'
// 								className='loginInput input_show'
// 								type={showPassword ? 'text' : 'password'}
// 							/>



// 							<button onClick={handlePasswordVisibility} className='eyscloseeyelcoe'>
// 								{showPassword ? <EyeClose /> : <EyeOpen />}
// 							</button>
// 						</div>

// 						<div className='pop-up-content__buttons'>

// 							<button className='log_in_btn_btn'>Log in</button>
// 						</div>
// 						{/* <div className='pop-up-content__buttons' >

// 							<button className='register-button-link'>Register now</button>
// 						</div> */}
// 					</div>
// 					{/* </div> */}

// 				</div>

// 			</Modal>

// 		</SignInWrapper >
// 	);
// };

// export default SignUp;
