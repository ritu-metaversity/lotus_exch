import { Box } from '@mui/material'
import React from 'react'

const MarqueeDesk = () => {
    return (
        <Box className="marquee_head">
            <section  className="marquee">
                <div className="marquee__notifications--wrapper">
                    <span className="span-marque" style={{  backgroundImage: 'url("https://d2eb1cys5jgnub.cloudfront.net/d/ball.gif")'  }}>
                    </span>
                    <div className="marquee__notifications">
                        <ul className="marquee__list marquee__list--scroll">
                            <li
                                className="marquee__list-item ng-binding "
                               
                                
                            >
                                USA - Presidential Election 2024 Party and Candidates Markets available in Politics !!!
                            </li>
                        </ul>
                    </div>
                    <span
                        className="span-marque-right"
                        style={{
                            backgroundImage: 'url("https://d2eb1cys5jgnub.cloudfront.net/d/ball.gif")'
                        }}
                    >
                    </span>
                </div>
            </section>
        </Box>
    )
}

export default MarqueeDesk