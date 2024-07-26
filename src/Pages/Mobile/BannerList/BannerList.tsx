import Slider from "react-slick";
import instant_games from "../../../img/instant-games.webp";
import exchange_baccara from "../../../img/exchange-baccara.webp";
import casino_aviator from "../../../img/casino-aviator.webp";
import ludo from "../../../img/ludo.webp";
import casino_teen_patti from "../../../img/casino-teen-patti.webp";
import cricket from "../../../img/cricket.webp";
import football from "../../../img/football.webp";
import horse_racing from "../../../img/horse-racing.webp";
import live_casino from "../../../img/live-casino-1.webp";
import './style.scss'

const data = [
  {
    image: instant_games,
    name: "instant-games",
  },
  {
    image: exchange_baccara,
    name: "exchange-baccara",
  },
  {
    image: casino_aviator,
    name: "casino-aviator",
  },
  {
    image: ludo,
    name: "ludo",
  },
  {
    image: casino_teen_patti,
    name: "casino-teen-patti",
  },
  {
    image: cricket,
    name: "cricket",
  },
  {
    image: football,
    name: "football",
  },
  {
    image: horse_racing,
    name: "horse-racing",
  },
  {
    image: live_casino,
    name: "live-casino",
  },
];

const BannerList = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    dotsClass:"custom_dot slick-dots"
  };
  return (
    <Slider {...settings}>
      {data?.map((item) => (
        <div>
          <img
            alt={item?.name}
            className="banner"
            src={item?.image}
          />
        </div>
      ))}
    </Slider>
  );
};

export default BannerList;
