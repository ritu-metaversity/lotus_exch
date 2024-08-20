import './style.scss';
import img1 from "../../../../img/tab_icon_12.webp";
import img2 from "../../../../img/tab_icon_2.webp";
import img3 from "../../../../img/tab_icon_3.webp";
import img4 from "../../../../img/tab_icon_13.webp";
import img5 from "../../../../img/tab_icon_5.webp";
import img6 from "../../../../img/tab_icon_6.webp";
import img7 from "../../../../img/tab_icon_8.webp";
import img8 from "../../../../img/tab_icon_9.webp";
import img9 from "../../../../img/tab_icon_16.webp";
import img10 from "../../../../img/tab_icon_10.webp";
import img11 from "../../../../img/tab_icon_11.webp";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const bannerName = [
  {
    name: "Evolution",
    image: img1,
    code:"evo_topcardlobby"
  },
  {
    name: "Roulette",
    image: img2,
    code:""
  },
  {
    name: "Baccarat",
    image: img3,
    code:""
  },
  {
    name: "Instant Games",
    image: img4,
    code:""
  },
  {
    name: "Dragon Tiger",
    image: img5,
    code:""
  },
  {
    name: "Blackjack",
    image: img6,
    code:""
  },
  {
    name: "Teen Patti",
    image: img7,
    code:""
  },
  {
    name: "Indian Games",
    image: img8,
    code:""
  },
  {
    name: "Board Games",
    image: img9,
    code:""
  },
  {
    name: "Slots",
    image: img10,
    code:""
  },
  {
    name: "Exchange",
    image: img11,
    code:""
  },
];

const MidBannerSlider = () => {
  const nav = useNavigate()

  const handleCasinoRoute=(val:string)=>{
    nav(`/dreamCasino/game/${val}`)
  }
  return (
    <section className="mid-banner-slider">
      <div>
        <div>
          <div className="container">
            <div className="banners">
              {bannerName.map((banner) => {
                return (
                    <div className="main_content" onClick={()=>handleCasinoRoute(banner?.code)}>
                  <div className="content-box">
                    <img alt={banner?.name} src={banner?.image} />
                    <div className="title">{banner?.name} </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidBannerSlider;
