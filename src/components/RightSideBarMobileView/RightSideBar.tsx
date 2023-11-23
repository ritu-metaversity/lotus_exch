
import { FC } from "react"
import "./RightSideBar.css"
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from "react-router-dom";
// import { StyledToolbar } from "../Navbar/Index.styled";
// import axios from "axios";
import { useGetBalanceUpdateQuery } from "../../state/apis/main/apiSlice";
import { logout, selectUser } from "../../state/features/auth/authSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";


const RightSideBar: FC<{ expanded: boolean, closeRightMenu: any }> = ({ expanded, closeRightMenu }) => {
    // let REACT_APP_API_URL = process.env.REACT_APP_API_URL
    // let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const user = useAppSelector(selectUser);
    const { data: balanceDtaa } = useGetBalanceUpdateQuery(undefined, { pollingInterval: 5000, skip: !(localStorage.getItem("token")) });
    const dispatch = useDispatch()
    const nav = useNavigate();
    const handleLogut = () => {
        nav("home")
        localStorage.clear();
        window.location.reload()
        dispatch(logout())


        closeRightMenu(false)
    }

    const hanldeClose = () => {
        closeRightMenu(false)
    }

    return (

        <div className={"Right_Side_Bar " + (expanded ? " expanded " : "")} >

            <div className="right-side-menu__top">
                <div className="right-side-menu__username">{user?.userId}</div>

                <div className="right-side-menu__account">
                    <div className="right_Side_BalanceInformation">
                        <span className="right-side-menu__item__icon">
                            <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                        </span>
                        <span className="right-side-menu__item__label">
                            Balance Information
                        </span>
                    </div>
                    <div className="right-side-menu__account__info">
                        <div className="right-side-menu__account__info__item">
                            <span className="right-side-menu__account__info__item__label">
                                Available Credit:
                            </span>
                            <span className="right-side-menu__account__info__item__value" style={{ fontWeight: "800" }} >
                                {localStorage.getItem("token") !== null ?
                                    (balanceDtaa?.data?.balance
                                        ? (Number(balanceDtaa?.data?.balance -
                                            balanceDtaa?.data?.libality).toFixed(2))
                                        : "0:00") : "0:00"}
                            </span>
                        </div>
                        <div className="right-side-menu__account__info__item">
                            <span className="right-side-menu__account__info__item__label">
                                Net Exposure:
                            </span>
                            <span className="right-side-menu__account__info__item__value" style={{ color: "red" }} >
                                {balanceDtaa?.data?.libality === 0
                                    ? <span>-{balanceDtaa?.data?.libality}</span>
                                    : "0:00"}
                            </span>
                        </div>
                    </div>
                </div>

                <Link to="open-bets" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Open Bets
                    </span>
                </Link>
                <Link to="Betting-Profit-&-Loss" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/betting-p-l.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Betting Profit & Loss
                    </span>
                </Link>
                {/* <Link to="Transfer-Statement" className="Table_for_Pages_Rightside">
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Transfer Statement
                    </span>
                </Link> */}
                <Link to="Account-Statement" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/transfer-statement.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Account Statement
                    </span>
                </Link>
                <Link to="Deposite-amount" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/transfer-statement.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Deposit
                    </span>
                </Link>
                <Link to="Withdraw-amount" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/transfer-statement.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Withdraw
                    </span>
                </Link>
                <Link to="Change-Password" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/change-password.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Change Password
                    </span>
                </Link>
                <Link to="Rules-&-Regulations" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/rules.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Rules & Regulations
                    </span>
                </Link>
                <Link to="Settings-Stack" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/setting.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Settings
                    </span>
                </Link>
                <Link to="Exclusion-Policy" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Exclusion Policy
                    </span>
                </Link>
                <Link to="Responsible-Gambling" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Responsible Gambling
                    </span>
                </Link>
                <Link to="Privacy-policy" className="Table_for_Pages_Rightside" onClick={hanldeClose}>
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Privacy policy
                    </span>
                </Link>
                <div className="Table_for_Pages_Rightside" onClick={handleLogut} >
                    <span className="Table_for_Pages_Rightside_Icon">
                        <img src="https://d1arlbwbznybm5.cloudfront.net/v1/static/mobile/images/icons/open-bets.png" style={{ width: "16px", color: "#1f8067" }} />
                    </span>
                    <span className="Table_for_Pages_Rightside_Pagee_Name">
                        Sign Out
                    </span>
                </div>





            </div>


        </div>

    )
}

export default RightSideBar