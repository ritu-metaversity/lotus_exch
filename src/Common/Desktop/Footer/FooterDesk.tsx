import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const FooterDesk = () => {
    return (
        <footer className="footer_desk " >
            <Link
                className="gamcare-icon ng-scope"
                target="_blank"
                to="https://www.gamcare.org.uk/"
            >
                <img className="icon icon-gamcare" src='/imges/game.png' alt='' />
            </Link>
            <div
                className="regulatory-links ng-scope"
            >
                <img className="icon icon-gamcare" src='/imges/ageLimit.png' alt='' />
                <span className="label ng-binding">Underage gambling is an offence</span>
            </div>
            <Link
                to="#"
                className="ng-scope "
            >
                <span
                    className="ng-binding ng-scope"
                >
                    KYC
                </span>
            </Link>
            <div
                className="regulatory-links ng-scope"
            >
                <span className="label ng-binding">Rules &amp; Regulations</span>
            </div>
            <Link
                to="#"
                className="ng-scope "
            >
                <span
                    className="ng-binding ng-scope"
                >
                    Responsible Gambling
                </span>
            </Link>
            <Link
                to="#"
                className="ng-scope "
            >
                <span
                    className="ng-binding ng-scope"
                >
                    Exclusion Policy
                </span>
            </Link>
            <span className="copy ng-binding ng-scope" >
                © 2016-2024
            </span>
        </footer>

    )
}

export default FooterDesk