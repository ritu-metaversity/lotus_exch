import React, { useState } from "react";
import "./style.scss"; // Make sure to create a CSS file for styling
import PageHeading from "../../../Component/PageHeading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Button } from "@mui/material";

const ChangePasswordMob = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        length: true,
        case: true,
        number: true,
        match: true,
    });

    const validatePassword = (password, confirmPassword) => {
        const length = password.length >= 8 && password.length <= 255;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const match = password === confirmPassword;

        setErrors({
            length: !length,
            case: !(hasUpperCase && hasLowerCase),
            number: !hasNumber,
            match: !match,
        });

        return length && hasUpperCase && hasLowerCase && hasNumber && match;
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        if (name === "newPassword") {
            setNewPassword(value);
            validatePassword(value, confirmPassword);
        } else if (name === "confirmPassword") {
            setConfirmPassword(value);
            validatePassword(newPassword, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword(newPassword, confirmPassword)) {
            // Handle password change logic here
            alert("Password changed successfully");
        } else {
            alert("Please correct the errors before submitting");
        }
    };

    const resetForm = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setErrors({
            length: true,
            case: true,
            number: true,
            match: true,
        });
    };

    const renderIcon = (isError) => (
        isError ?
            <CancelIcon sx={{ color: "red", verticalAlign: "middle" }} /> :
            <CheckCircleIcon sx={{ color: "green", verticalAlign: "middle" }} />
    );

    const togglePasswordVisibility = (type) => {
        switch (type) {
            case 'old':
                setShowOldPassword(!showOldPassword);
                break;
            case 'new':
                setShowNewPassword(!showNewPassword);
                break;
            case 'confirm':
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Box sx={{ paddingInline: "12px", paddingTop: "12px" }}>
                <PageHeading name="Change Password" />
            </Box>
            <div>
                <form onSubmit={handleSubmit} className="change-password">
                    <div className="form-group">
                        <input
                            type={showOldPassword ? "text" : "password"}
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                            className="password-input"
                        />
                        {
                            oldPassword?.length > 0 && <div className="iconView">
                            <div onClick={() => togglePasswordVisibility('old')}>{!showOldPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</div>
                            <div onClick={()=>setOldPassword("")}><CloseOutlinedIcon /></div>
                        </div>
                        }
                        
                    </div>
                    <div className="form-group">
                        <input
                           type={showNewPassword ? "text" : "password"}
                            name="newPassword"
                            value={newPassword}
                            placeholder="New Password"
                            onChange={handlePasswordChange}
                            className="password-input"
                            required
                        />
                        {
                            newPassword?.length > 0 && <div className="iconView">
                            <div onClick={() => togglePasswordVisibility('new')}>{!showNewPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</div>
                            <div onClick={()=>setNewPassword("")}><CloseOutlinedIcon /></div>
                        </div>
                        }
                         
                    </div>
                    <div className="form-group">
                        <input
                             type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Repeat New Password"
                            onChange={handlePasswordChange}
                            className="password-input"
                            required
                        />
                        {
                            confirmPassword?.length > 0 &&  <div className="iconView">
                            <div onClick={() => togglePasswordVisibility('confirm')}>{!showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</div>
                            <div onClick={()=>setConfirmPassword("")}><CloseOutlinedIcon /></div>
                        </div>
                        }
                        
                    </div>
                    <div className="password-requirements">
                        <p>Password Should:</p>
                        <ul>
                            <li>{renderIcon(errors.length)} Be from 8 up to 255 characters.</li>
                            <li>{renderIcon(errors.case)} Have at least one upper case and lower case letter.</li>
                            <li>{renderIcon(errors.number)} Have at least one number.</li>
                            <li>{renderIcon(errors.match)} Match repeated password.</li>
                        </ul>
                    </div>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignContent: "center"
                    }}>

                        <Button className="form_btn cancel_btn" type="button" onClick={resetForm}>Cancel</Button>
                        <Button className="form_btn save_btn" type="submit" disabled>Save</Button>
                    </Box>

                </form>
            </div>
        </>
    );
};

export default ChangePasswordMob;
