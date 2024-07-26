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

const bannerName = [
  {
    name: "Evolution",
    image: img1,
  },
  {
    name: "Roulette",
    image: img2,
  },
  {
    name: "Baccarat",
    image: img3,
  },
  {
    name: "Instant Games",
    image: img4,
  },
  {
    name: "Dragon Tiger",
    image: img5,
  },
  {
    name: "Blackjack",
    image: img6,
  },
  {
    name: "Teen Patti",
    image: img7,
  },
  {
    name: "Indian Games",
    image: img8,
  },
  {
    name: "Board Games",
    image: img9,
  },
  {
    name: "Slots",
    image: img10,
  },
  {
    name: "Exchange",
    image: img11,
  },
];

const MidBannerSlider = () => {
  return (
    <section className="mid-banner-slider">
      <div>
        <div>
          <div className="container">
            <div className="banners">
              {bannerName.map((banner) => {
                return (
                    <div className="main_content">
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
