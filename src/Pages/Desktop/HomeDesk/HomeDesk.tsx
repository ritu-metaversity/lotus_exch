import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import NavbarDesk from "../../../Common/Desktop/NavbarDesk/NavbarDesk";
import casino_desktop_banner_2 from "../../../img/casino_desktop_banner_2.webp";
import cricket_desktop_banner from "../../../img/cricket_desktop_banner.webp";
import virtual_sports_desktop_banner from "../../../img/virtual_sports_desktop-banner.webp";
import football_desktop_banner from "../../../img/football_desktop_banner.webp";
import img1 from "../../../img/back-to-venus-TM.webp";
import img2 from "../../../img/the-slot-father-part-II-TM.webp";
import img3 from "../../../img/golden-horns-TM.webp";
import img4 from "../../../img/sin-city-nights-TM.webp";
import img5 from "../../../img/take-olympus-TM.webp";
import img6 from "../../../img/sugar-pop-2-double-dipped-TM.webp";
import img7 from "../../../img/stacked-TM.webp";
import img8 from "../../../img/mystic-hive-TM.webp";
import img9 from "../../../img/primal-hunt-TM.webp";
import img10 from "../../../img/european-roulette.webp";
import img11 from "../../../img/blackjack-vivo-gaming-live.webp";

import "./home.scss";
import { Link } from "react-router-dom";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "14px",
        background: "#fff",
        width: "24px",
        height: "24px",
        color: "#808080 ",
        borderRadius: "4px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "5px",
        background: "#fff",
        width: "24px",
        height: "24px",
        color: "#808080 ",
        borderRadius: "4px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 9,
      }}
      onClick={onClick}
    />
  );
}

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  rtl: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
let settings2 = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: false,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true
    //   }
    // },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const swiperData = [
  {
    name: "Back to Venus",
    icon: img1,
  },
  {
    name: "Slot Father II",
    icon: img2,
  },
  {
    name: "Golden Horns",
    icon: img3,
  },
  {
    name: "Sin City Nights",
    icon: img4,
  },
  {
    name: "Take Olympus",
    icon: img5,
  },
  {
    name: "SugarPop 2",
    icon: img6,
  },
  {
    name: "Stacked",
    icon: img7,
  },
  {
    name: "Mystic Hive",
    icon: img8,
  },
  {
    name: "Primal Hunt",
    icon: img9,
  },
];

const HomeDesk = () => {
  return (
    <>
      <NavbarDesk />
      <Box sx={{ py: 0 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "7.2px" }}>
            <Card className="banner-block">
              <CardActionArea href="#/super-casino">
                <CardMedia
                  component="img"
                  image={casino_desktop_banner_2}
                  alt="Super Casino"
                />
              </CardActionArea>
            </Card>

            {/* Banner Block 2 */}
            <Card className="banner-block">
              <CardActionArea href="#/display/EVENT_TYPE/4">
                <CardMedia
                  component="img"
                  image={cricket_desktop_banner}
                  alt="Cricket"
                />
              </CardActionArea>
            </Card>

            {/* Banner Block 3 */}
            <Card className="banner-block">
              <CardActionArea href="#/virtual-sports">
                <CardMedia
                  component="img"
                  image={virtual_sports_desktop_banner}
                  alt="Virtual Sports"
                />
              </CardActionArea>
            </Card>

            {/* Banner Block 4 */}
            <Card className="banner-block">
              <CardActionArea href="#/display/EVENT_TYPE/1">
                <CardMedia
                  component="img"
                  image={football_desktop_banner}
                  alt="Football"
                />
              </CardActionArea>
            </Card>
          </Box>
          <Box
            sx={{
              px: "3px",
              display:"flex",
              mb:1,
            }}
          >
            <Link to="#/super-casino" className="swiper_slide">
              <Box className="img-box">
                <img alt="European Auto Roulette" src={img10} />
              </Box>
              <Typography component="p" className="title-box" sx={{
                mt:-1
              }}>
                European Auto Roulette
              </Typography>
            </Link>
            <Link to="#/super-casino" className="swiper_slide">
              <Box className="img-box">
                <img alt="Bulgaria Blackjack" src={img11} />
              </Box>
              <Typography component="p" className="title-box" sx={{
                mt:-1
              }}>
                Bulgaria Blackjack
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              px: "3px",
            }}
          >
            <Slider {...settings}>
              {swiperData.map((items) => (
                <Link to="#/super-casino" className="swiper_slide">
                  <Box className="img-box">
                    <img alt={items?.name} src={items?.icon} />
                  </Box>
                  <Typography component="p" className="title-box">
                    {items?.name}
                  </Typography>
                </Link>
              ))}
            </Slider>
          </Box>

          {/* Uncomment and adjust for Swiper */}
          {/* 
        <Box sx={{ marginTop: 4 }}>
          <Swiper 
            spaceBetween={8} 
            slidesPerView={4} 
            navigation 
            pagination={{ clickable: true }}
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ maxWidth: 278 }}>
                  <CardActionArea href="#/super-casino">
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        */}
        </Box>
      </Box>
    </>
  );
};

export default HomeDesk;
