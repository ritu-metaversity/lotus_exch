import "./CardGame.css"
import GamesDetailsPage from "./GamesDetailsPage"

const CardGame = () => {
    return (
        <div className="exchangeGamesMobile  ">
            <div className="exchangeGamesMobile-header">
                <div className="exchangeGamesMobile-header-anim">
                    <div className="exchangeGames__bg-top">
                        <div className="exchangeGamesMobile-header-text">
                            <div className="exchangeGames__bg-top_credo-text">Play. Win. Enjoy.</div>
                            <div className="exchangeGames__bg-top_description">
                                We have something for everyone. With over 30 games to choose from, play
                                the best slots, jackpots and live casino games.
                            </div>
                        </div>
                    </div>
                    <div>
                        <img

                            className="outsideRouletteM"
                            src="https://lotus365.co/static/media/wheelOut.6a0efaa0.png"
                            alt="f"
                        />
                        <img
                            className="insideRoulette"

                            src="https://lotus365.co/static/media/wheelIn.38919ebb.png"
                            alt="f"
                        />
                    </div>
                    <img

                        className="outsideRouletteM_girl"
                        src="https://lotus365.co/static/media/girlMobile.df52ff5e.png"
                        alt="girl"
                    />
                </div>
                <div className="exchangeGamesMobile-header-text-mobile">
                    <div className="exchangeGamesMobile-header__credo">Play. Win. Enjoy.</div>
                    <div className="exchangeGamesMobile-header__description">
                        We have something for everyone. With over 30 games to choose from, play the
                        best slots, jackpots and live casino games.
                    </div>
                </div>

            </div>
            <GamesDetailsPage />
        </div>



    )
}

export default CardGame