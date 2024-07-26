import './style.scss';
import img from '../../../img/cricket.png'

const GameHeading = () => {
  return (
    <div  className="sport-name-wrap ignore-content-spacing">
    <img alt='' src={img}  style={{marginRight: "14px"}}/>
    <span >Cricket</span>
  </div>
  )
}

export default GameHeading