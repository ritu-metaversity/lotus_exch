import "./CasinoPointPopup.css"
import CancelIcon from '@mui/icons-material/Cancel';
const CasinoPointPopup = ({ handleClose }: any) => {


    // const handleAgree = () => {

    // }
    return (

        <div className="slotsCasino-pop-up__content">
            <img className="slotsCasino-pop-up__content-img" src="https://lotus365.co/static/media/slotsCasinoPopUp.0b73a914.svg" />
            <span onClick={handleClose}><CancelIcon className="slotsCasino-pop-up__content-closeButton" /></span>
            <div className='slotsCasino-pop-up__content-title'>PLEASE NOTE</div>
            <div className='slotsCasino-pop-up__content-descr'>(1 Point = ₹ 100)</div>
            <div className='slotsCasino-pop-up__content-welcome'>Welcome to your new casino lobby</div>
            <div className='slotsCasino-pop-up__content-checkout'>Checkout the exciting Live Casino tables, Slots and much more, upto 200+ game and counting...</div>
            <button onClick={handleClose} className='slotsCasino-pop-up__content-button'>OK, I AGREE !</button>
        </div>

    )
}

export default CasinoPointPopup