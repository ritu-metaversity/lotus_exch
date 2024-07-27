import { Link } from "react-router-dom";
import "./AccountPopup.css"

const AccountPopup = ({ popupclose }: any) => {
    // const navigate = useNavigate();

    const handlRoute = () => {
        popupclose(false)
    }
    return (

        <div className="main_div_account_popup">
            <Link to="/My-bets" className="div_account_btnnnn" onClick={handlRoute}>My Bets</Link>
            <Link to="/Betting-Profit-&-Loss" className="div_account_btnnnn" onClick={handlRoute}>Betting Profit and Loss</Link>
            <Link to="/Account-Statement-Details" className="div_account_btnnnn" onClick={handlRoute}>Account Statement</Link>
            <Link to="/Deposite-amount" className="div_account_btnnnn" onClick={handlRoute}>Deposit</Link>
            <Link to="/Withdraw-amount" className="div_account_btnnnn" onClick={handlRoute}>Withdraw</Link>
            {/* <Link to="" className="div_account_btnnnn" onClick={handlRoute}>Transfer Statement</Link> */}
            <Link to="/Change-Password" className="div_account_btnnnn" onClick={handlRoute}>Change Password</Link>
        </div>

    )
}

export default AccountPopup