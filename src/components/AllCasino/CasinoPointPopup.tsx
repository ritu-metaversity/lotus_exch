import axios from "axios";
import "./CasinoPointPopup.css"
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from "react";
const CasinoPointPopup = ({ handleClose, type }: any) => {


    console.log(type, "sdffjsbdkhjfnsdj");

    const [casionValue, setCasionValue] = useState()
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.post(
            "https://api.247365.exchange/admin-new-apis/api/getOneUserBetResult", {},
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },

            }
        ).then((res) => {
            setCasionValue(res?.data?.data[type])
            console.log(res?.data?.data[type], "sdfsdfsdfsd");
        })
    }, [])
    return (

        <div className="slotsCasino-pop-up__content">
            <img className="slotsCasino-pop-up__content-img" style={{ width: "50%" }} src="https://lotus365.co/static/media/slotsCasinoPopUp.0b73a914.svg" />
            <span onClick={handleClose}><CancelIcon className="slotsCasino-pop-up__content-closeButton" /></span>
            <div className='slotsCasino-pop-up__content-title'>PLEASE NOTE</div>
            <div className='slotsCasino-pop-up__content-descr'>(1 Point = ₹ {casionValue})</div>
            <div className='slotsCasino-pop-up__content-welcome'>Welcome to your new casino lobby</div>
            <div className='slotsCasino-pop-up__content-checkout'>Checkout the exciting Live Casino tables, Slots and much more, upto 200+ game and counting...</div>
        </div>

    )
}

export default CasinoPointPopup