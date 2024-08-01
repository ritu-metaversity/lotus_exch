import { Box } from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router-dom";

// Component for displaying event information
const EventInfo = ({ date, competitors }) => (
  <Box className="market-title">
    <div className="info-box">
      <div className="icon-fire-wrapper" />
      <div className="info">
        <div className="line date">
          <span className="date-info__item date-info__item--open-date">
            {date}
          </span>
        </div>
      </div>
    </div>
    <div className="competitors">
      <div className="width-wrapper">
        {competitors.map((name, index) => (
          <div className="line" key={index}>
            <div className="name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  </Box>
);

// Component for displaying odds
const Odds = ({ odds }) => (
  <div className="odds market-odds custom-width">
    <div className="odds-wrap scrollable">
      <div className="market-odds__container">
        {odds.map((odd, index) => (
          <Box className={odd.className} key={index}>
            <div className={`bet-button ${odd.type}`}>
              <div className="price">{odd.price}</div>
            </div>
          </Box>
        ))}
      </div>
    </div>
  </div>
);

// Component for a market item

// Main component
const LiveMobile = () => {
  const events = [
    {
      date: "Today 14:00",
      competitors: ["Bangladesh Women", "Malaysia Women"],
      odds: [
        { className: "not-selected scrollable", type: "back", price: "3" },
        { className: "", type: "has-no-runner disabled back", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "back",
          price: "2,500",
        },
        { className: "not-selected scrollable", type: "lay", price: "4" },
        { className: "", type: "has-no-runner disabled lay", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "lay",
          price: "3,334",
        },
      ],
    },
    {
      date: "Today 15:30",
      competitors: ["Essex", "Warwickshire"],
      odds: [
        { className: "not-selected scrollable", type: "back", price: "82" },
        { className: "", type: "has-no-runner disabled back", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "back",
          price: "104",
        },
        { className: "not-selected scrollable", type: "lay", price: "96" },
        { className: "", type: "has-no-runner disabled lay", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "lay",
          price: "122",
        },
      ],
    },
    {
      date: "Today 15:30",
      competitors: ["Lancashire", "Durham"],
      odds: [
        { className: "not-selected scrollable", type: "back", price: "70" },
        { className: "", type: "has-no-runner disabled back", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "back",
          price: "121",
        },
        { className: "not-selected scrollable", type: "lay", price: "82" },
        { className: "", type: "has-no-runner disabled lay", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "lay",
          price: "143",
        },
      ],
    },
    {
      date: "Today 19:00",
      competitors: ["Sri Lanka Women", "Thailand Women"],
      odds: [
        { className: "not-selected scrollable", type: "back", price: "2.25" },
        { className: "", type: "has-no-runner disabled back", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "back",
          price: "2,666",
        },
        { className: "not-selected scrollable", type: "lay", price: "3.75" },
        { className: "", type: "has-no-runner disabled lay", price: "-" },
        {
          className: "not-selected more-odds scrollable",
          type: "lay",
          price: "4,445",
        },
      ],
    },
  ];

  const nav = useNavigate();
  const handleNav = () => {
    nav("/m/sport/4/e/33450249");
  };

  const MarketItem = ({ date, competitors, odds }: any) => (
    <div className="market-list-item" onClick={handleNav}>
      <div className="market">
        <EventInfo date={date} competitors={competitors} />
        <Odds odds={odds} />
      </div>
    </div>
  );

  return (
    <section className="section in-play">
      <div className="section-title">
        <i className="icon icon-in-play-simple" />
        <span className="label">Live</span>
        <span className="open-bets-link">
          Open Bets
          <span className="count">0</span>
        </span>
      </div>
      <div className="events-list">
        <Box>
          <Box>
            <div className="consolidated-events-group-title">
              <div className="title">
                <i className="icon-sport-cricket sport-icon" title="Cricket" />
                <span>Cricket</span>
              </div>
              <div className="odds-header">
                <div className="odds-col">1</div>
                <div className="odds-col">X</div>
                <div className="odds-col">2</div>
                <div className="odds-col visible-on-wide-screen">1</div>
                <div className="odds-col visible-on-wide-screen">X</div>
                <div className="odds-col visible-on-wide-screen">2</div>
              </div>
            </div>
            <div className="consolidated-events">
              <div className="app-list">
                {events.map((event, index) => (
                  <MarketItem
                    key={index}
                    date={event.date}
                    competitors={event.competitors}
                    odds={event.odds}
                  />
                ))}
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default LiveMobile;
