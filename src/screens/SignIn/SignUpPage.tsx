import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


import { useIsSelfByAppUrlMutation } from '../../state/apis/main/apiSlice';

import axios from 'axios';

// interface ShowPassword {
//     password: boolean;
//     confirmPassword: boolean;
// }

const SignUpPage = ({ loginRegisterrrrr, closeLoginModal, loginRegisterButtonSwitch }: any) => {
    // const navigate = useNavigate();

    const [triger, { data: IsSelfByAppUrl }] = useIsSelfByAppUrlMutation();
    useEffect(() => {
        triger({ appUrl: window.location.hostname.replace("www.", "") })
    }, [])

    const handleCloseModal = () => {
        closeLoginModal(false)
    }


    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [UserName, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState();
    // const [errorMsg, setErrorMsg] = useState();
    const [StatusVal, setStatusVal] = useState(true);
    // const [StatusCode, setStatusCode] = useState();
    // const [logo, setLogo] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [loadinLogin, setLoadingLogin] = useState(false)
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [mobileNumberError, setmobileNumberError] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [newCredAfterRegister, setNewCredAfterRegister] = useState("");

    console.log(newCredAfterRegister, StatusVal, loadinLogin);

    const handleValidation = () => {
        console.log(password, confirmPassword, "kjhgfghj");
        if (UserName === "" && mobileNumber === "" && password === "") {
            setUserNameError("User Name is required");
            setPasswordError("Password is required.");
            setmobileNumberError("Mobile number must not be empty.");
            return false;
        } else if (UserName === "") {
            setUserNameError("User Name is required");
            return false;
        } else if (mobileNumber === "" || mobileNumber === undefined) {
            setmobileNumberError("Mobile number must not be empty.");
            return false;
        } else if (password === "") {
            setPasswordError("Password is required.");
            return false;
        } else if (confirmPassword === undefined) {
            setConfirmPasswordError("Confirm Password is required.");
            return false;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError("Password must be equal.");
            return false;
        } else if (mobileNumber?.toString().length !== 10) {
            return false;
        } else if (password === "") {
            setPasswordError("Password is required.");
            return false;
        } else if (
            password.match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#!%*?&_]{8,12}$/
            ) === null
        ) {
            return false;
        } else if (UserName?.length < 4) {
            return false;
        } else if (UserName?.length > 8) {
            return false;
        } else if (UserName?.match(/^[a-zA-Z0-9]+$/) === null) {
            return false;
        } else if (password?.length < 8) {
            return false;
        } else if (password.length > 12) {
            return false;
        }
        return true;
    };

    const handlePassWordsValidation = (e: any) => {
        setPassword(e.target.value);
        const passData = e.target.value;
        if (passData === "") {
            setPasswordError("Password is required.");
        } else if (passData?.length < 8) {
            setPasswordError("Minimum 8 letters required.");
        } else if (passData?.length > 13) {
            setPasswordError("Maximum 12 letters required");
        } else if (
            passData?.match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$#!%*?&_]{8,12}$/
            ) === null
        ) {
            setPasswordError(
                "Password should contain atleast one number and one lower case and one upper case."
            );
        } else if (passData === confirmPassword) {
            setConfirmPasswordError("")
        } else {
            setPasswordError("");
        }
    };
    const handleConfirmPasswordsValidation = (e: any) => {
        setConfirmPassword(e.target.value);
        const confirmPass = e.target.value;
        if (password !== confirmPass) {
            setConfirmPasswordError("Password must be equal.");
        } else {
            setConfirmPasswordError("");
        }
    };


    const handleMobileNumber = (e: any) => {
        // if()
        // console.log(e.target.value, "luhbnoihb")
        // if (e.target.value >= 10) {

        console.log(e.target.value.match(/^[0-9]{0,40}$/) !== null, "lkjhgfdghj");
        if ((e.target.value.match(/^[0-9]{0,40}$/) !== null) === true) {

            if (e.target.value.match(/^[0-9]{0,40}$/) !== null) {

                setMobileNumber(e.target.value);
            }
            if (e.target.value.match(/^[0-9]{0,10}$/) === "") {
                setmobileNumberError("Mobile number must not be empty.");
            } else if (e.target.value?.length !== 10) {
                setmobileNumberError("Mobile number must be 10 digit number");
            } else {
                setmobileNumberError("");
            }
        } else {
            setMobileNumber("")
        }
        // }

    };


    const handleUserName = (e: any) => {
        setUserName(e.target.value);

        const userData = e.target.value;
        if (userData === "") {
            setUserNameError("User Name is required");
        } else if (userData?.length < 4) {
            setUserNameError("Minimum 4 letters required.");
        } else if (userData?.length > 8) {
            setUserNameError("Maximum 8 letters required.");
        } else if (userData?.match(/^[a-zA-Z0-9]+$/) === null) {
            setUserNameError("Only number and alphabet are allowed.");
        } else {
            setUserNameError("");
        }
    };
    const handleLogin = async (e: any) => {
        e.preventDefault();
        setLoadingLogin(true)

        setStatusVal(true);
        if (handleValidation()) {

            axios
                .post(
                    "https://api.247365.exchange/admin-new-apis/user/self-register",
                    {
                        appUrl: window.location.hostname.replace("www.", ""),
                        username: UserName,
                        password: password,
                        confirmPassword: confirmPassword,
                        mobile: mobileNumber,
                        userId: UserName,
                    }
                )
                .then((res: any) => {
                    if (res?.status) {
                        // setOpen(true)
                        setLoadingLogin(false)
                        closeLoginModal(false)

                        toast.success(res?.data?.message);
                        setPassword("")
                        setMobileNumber("")
                        setUserName("")
                        setNewCredAfterRegister(res?.data);
                    } else {
                        toast.error(res?.data?.message);
                        console.log("loadinLogin")
                        setLoadingLogin(false)


                    }
                })
                .catch((error: any) => {
                    console.log(error, "loadinLogin")
                    setLoadingLogin(false)

                    toast.error(error.response.data.message);
                    // setStatusCode(error.response.status);
                    // setErrorMsg(error.response.data.message);
                    // setStatusVal(false);
                    // setAlertBtnColor("danger");
                });
        }
    };
    const handleSwitchLoginReg = (val: any) => {
        loginRegisterButtonSwitch(val)
    }
    return (


        < div className='login-step-wrapper ' >
            <div className='login_tabs'>
                <div className={`sign_up`} onClick={() => handleSwitchLoginReg("register")}>Sign Up</div>
                <div className={`login_in  ${loginRegisterrrrr === "register" ? "inActiveLeft" : ""}`} style={{ cursor: "pointer" }} onClick={() => handleSwitchLoginReg("login")}>Login In</div>
            </div>

            <div className='pop-up-content_title'>
                <img src={IsSelfByAppUrl?.data?.logo} className='pop-up-content_title-logo' />
                <img onClick={handleCloseModal} src="https://lotus365.co/static/media/closeLogin.3968ed62.svg" className='desk_modal' style={{ cursor: "pointer" }} />

                <img onClick={handleCloseModal} src="https://lotus365.co/static/media/closeLogin.3968ed62.svg" className='crossBtnLogog' />
                {/* <HighlightOffIcon /> */}


            </div>
            <form className='login-step-content' onSubmit={handleLogin}>
                <div className='login-step-content__title'>Sign up</div>
                <div className='loginInput_div' >
                    <input
                        autoComplete='off'
                        className='loginInput'
                        placeholder="User Name"
                        name="username"
                        value={UserName}
                        onChange={handleUserName}
                    />
                    <label style={{ color: "red", fontSize: "15px" }}>{userNameError}</label>

                    <input
                        autoComplete='off'
                        className='loginInput input_show'
                        name="mobile"
                        placeholder="Mobile No"
                        // type="number"
                        value={mobileNumber}
                        max="10"
                        onChange={handleMobileNumber}
                    // type={showPassword ? 'text' : 'password'}
                    />
                    <label style={{ color: "red", fontSize: "15px" }}>{mobileNumberError}</label>

                    <input
                        autoComplete='off'
                        className='loginInput input_show'
                        name="password"
                        placeholder="Password"
                        type="password"
                        // value={register?.password}
                        onChange={handlePassWordsValidation}
                    // type={showPassword ? 'text' : 'password'}
                    />
                    <label style={{ color: "red", fontSize: "15px" }}>{passwordError}</label>

                    <input
                        autoComplete='off'
                        className='loginInput input_show'
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        onChange={handleConfirmPasswordsValidation}
                    // type={showPassword ? 'text' : 'password'}
                    />
                    <label style={{ color: "red", fontSize: "15px" }}>{confirmPasswordError}</label>

                    <div className='comm-data-new'>
                        {IsSelfByAppUrl?.data?.oddsComm === 0 ?
                            "" :
                            <span>
                                <label style={{ color: "white", fontSize: "12px" }}>Odds Comm..</label>
                                <input value={IsSelfByAppUrl?.data?.oddsComm} disabled style={{ width: "100%" }} />
                            </span>
                        }

                        {IsSelfByAppUrl?.data?.fancyComm === 0 ?
                            "" :
                            <span>
                                <label style={{ color: "white", fontSize: "12px" }}>Fancy Comm..</label>
                                <input placeholder={IsSelfByAppUrl?.data?.fancyComm} disabled style={{ width: "100%" }} />
                            </span>
                        }

                        {IsSelfByAppUrl?.data?.casinoComm === 0 ?
                            "" :
                            <span>
                                <label style={{ color: "white", fontSize: "12px" }}>Casino Comm..</label>
                                <input placeholder={IsSelfByAppUrl?.data?.casinoComm} disabled style={{ width: "100%" }} />
                            </span>
                        }
                    </div>


                </div>

                <div className='pop-up-content__buttons' >

                    <button className='register-button-link' type="submit">Register now</button>
                </div>
            </form>
            {/* </div> */}

        </div >



    );
};

export default SignUpPage;
