import "./CardGame.css"

const CardGame = () => {
    return (
        <div className="exchangeGamesMobile  ">
            <div className="exchangeGamesMobile-header">
                <div className="exchangeGamesMobile-header-anim">
                    <div className="exchangeGames__bg-top">

                    </div>
                    <div>
                        <img
                            className="insideRouletteM"
                            style={{ width: "100%" }}
                            src="https://lotus365.co/static/media/wheelIn.38919ebb.png"
                            alt="f"
                        />
                        <img
                            style={{ width: "100%" }}
                            className="outsideRouletteM"
                            src="https://lotus365.co/static/media/wheelOut.6a0efaa0.png"
                            alt="f"
                        />
                    </div>
                    <img
                        style={{ width: "100%" }}
                        src="https://lotus365.co/static/media/girlMobile.df52ff5e.png"
                        alt="girl"
                    />
                </div>
                <div className="exchangeGamesMobile-header-text">
                    <div className="exchangeGamesMobile-header__credo">Play. Win. Enjoy.</div>
                    <div className="exchangeGamesMobile-header__description">
                        We have something for everyone. With over 30 games to choose from, play
                        the best slots, jackpots and live casino games.
                    </div>
                </div>
            </div>

        </div>



    )
}

export default CardGame