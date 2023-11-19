// import { useNavigate } from "react-router-dom";
import "./ChangePasswordMobleView.css"
import { useEffect, useState } from "react";
import { useChangePasswordFirstLoginMutation, useChangePasswordNewOldMutation } from "../../../state/apis/main/apiSlice";
import toast from "react-hot-toast";
import { selectUser } from "../../../state/features/auth/authSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";






const ChangePasswordMobleView = () => {
  const user = useAppSelector(selectUser);

  // const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  // const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passworderror, setPasswordError] = useState("")
  const [confirmpassword, setConfirmPasswordError] = useState("")
  const [newDataUser, setNewDataUser] = useState("" as any)
  const [newDataUserToken, setNewDataUserToken] = useState("" as any)
  // const { setLoading } = useContext(LoaderContext);
  const [triger, { data }] = useChangePasswordNewOldMutation()
  const [trigerLogin, { data: firstDta }] = useChangePasswordFirstLoginMutation()
  console.log(newDataUser, newDataUserToken, data, firstDta)
  useEffect(() => {
    setNewDataUser(user?.token
    )
    setNewDataUserToken(user?.token)
  }, [])



  // OLD PASSWORD
  const handleChange = (e: any) => {
    setOldPassword(e.target.value);
  };

  console.log(user, "kiu8y76t5redsxdc");


  // NEW PASSWROD
  const handlePassWordsValidation = (e: any) => {
    console.log(e.target.value, "fsdfsdfsdfsdfd");

    setNewPassword(e.target.value)
    const passData = e.target.value;
    if (passData === "") {
      setPasswordError("Password is required.");
    } else if (passData?.length < 8) {
      setPasswordError("Minimum 8 letters required.");
    } else if (passData?.length > 13) {
      setPasswordError("Maximum 12 letters required");
    } else if (
      passData?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null
    ) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      setPasswordError("");

    }
    if (passData !== confirmPassword) {
      setConfirmPasswordError("Password must be equal.");
    } else {
      setConfirmPasswordError("")
    }
  };


  //  CONFIRM
  const handleConfirmPasswordsValidation = (e: any) => {

    setConfirmPassword(e.target.value)
    const confirmPass = e.target.value;
    if (newPassword !== confirmPass) {
      setConfirmPasswordError("Password must be equal.");
    } else {
      setConfirmPasswordError("")
    }
  };
  //         toast.error(error?.response?.data?.message)

  // SUBMIT HANDLE
  const handleClick = async (e: any) => {
    e.preventDefault();

    if (confirmPassword !== newPassword) {
      return toast.error("New Password And Confirm Password does not match!");
    } else if (oldPassword === "" && confirmPassword === "" && newPassword === "") {
      return toast.error("Something went wrong! Please try again later.");
    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: true }));
    if ((newPassword?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null) === true) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {

      // /user/first-login-cp
      trigerLogin({

        oldPassword,
        currentPassword: oldPassword,
        newPassword,
      });

    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: false }));
  };
  const handleOldPassWord = (e: any) => {
    e.preventDefault();

    if (confirmPassword !== newPassword) {
      return toast.error("New Password And Confirm Password does not match!");
    } else if (oldPassword === "" && confirmPassword === "" && newPassword === "") {
      return toast.error("Something went wrong! Please try again later.");
    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: true }));
    if ((newPassword?.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?#&_]{8,12}$/) ===
      null) === true) {
      setPasswordError(
        "Password should contain atleast one number and one lower case and one upper case."
      );
    } else {
      triger({
        currentPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
        userid: user?.userId,
        token: user?.token,
        oldPassword: oldPassword,
      });

    }
    // setLoading && setLoading((prev) => ({ ...prev, handleClick: false }));
  };
  return (
    <div className="main_div_for_change_password">
      <div className="ChangePassword_header">Change Password</div>




      <form className="change_passsword_form_data" onSubmit={handleClick}>


        <input
          className="change_password_input_field"
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleChange}
        />
        <input
          className="change_password_input_field"
          placeholder="New Password"
          value={newPassword}
          onChange={handlePassWordsValidation}
        />
        <label style={{ color: "red" }}>{passworderror}</label>

        <input
          className="change_password_input_field"
          placeholder="Repeat New Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordsValidation}
        />
        <label style={{ color: "red" }}>{confirmpassword}</label>
        {user?.passwordtype === "new" ?
          <button className="ChangePassword__button" type="submit"> Save</button>
          :
          <button className="ChangePassword__button" type="submit" onClick={handleOldPassWord}>Save</button>

        }


      </form>




    </div>
  )
}

export default ChangePasswordMobleView