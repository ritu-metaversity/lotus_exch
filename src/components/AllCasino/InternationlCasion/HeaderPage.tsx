import "./HerderPage.css"

const HeaderPage = () => {
    return (
        <div className="lamp live_casino_div">
            <div className="lava">
                <div className="live_casino_data">
                    <div className="liveCasino-header__text-name animate-charcter ">
                        International Casino
                    </div>
                    <div className="liveCasino-header__text-credo">Play. Win. Enjoy.</div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>

    )
}

export default HeaderPage