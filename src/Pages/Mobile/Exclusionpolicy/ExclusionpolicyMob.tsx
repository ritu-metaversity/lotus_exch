import { Box } from '@mui/material'
import React from 'react'
import PageHeading from '../../../Component/PageHeading'

const ExclusionpolicyMob = () => {
    return (
        <Box sx={{ paddingInline: "12px", paddingTop: "12px" }}>
            <PageHeading name="Self exclusion" />

            <div className="regulations-text page-content-box">
                <h2>What is a self-exclusion?</h2>
                <p>
                    Self-exclusion is a facility that the Site offers to help those customers
                    who feel that their gambling is out of control and want us to help them
                    stop. By entering into a self-exclusion agreement with the Site, you will be
                    prevented from using your Account (as defined in the terms and conditions)
                    for a specific period, as determined by you, of between 6 months and 5
                    years.
                </p>
                <h2>How to self-exclude from the Site</h2>
                <p>
                    If at any time you should you wish to exclude yourself from use of the Site
                    (as defined in the terms and conditions), you must submit this request by
                    email to{" "}
                    <a href="mailto:customer.service@verifyexch.com">
                        customer.service@verifyexch.com
                    </a>
                    .
                </p>
                <p>
                    Please inform us of the period for which you wish to self-exclude. The
                    minimum is 6 months and the maximum is 5 years. If you request
                    self-exclusion but do not specify a period, we will exclude you for the
                    minimum period of six months (“Minimum Period”).
                </p>
                <h2>How soon after requesting a self-exclusion will it be activated?</h2>
                <p>
                    We will endeavour to apply your exclusion as soon as practically possible.
                    Normally, we will be able to reset your password to prevent you accessing
                    the Site within 24 hours of your request.
                </p>
                <h2>What happens if I self-exclude?</h2>
                <p>We will make all reasonable efforts to:</p>
                <ol>
                    <li>Prevent any marketing material being forwarded to you;</li>
                    <li>Remove you from any marketing databases operated by us;</li>
                    <li>
                        Suspend your activity by cancelling your ability to access the Site for
                        the period requested by you, or if no period is requested by you, for the
                        Minimum Period; and
                    </li>
                    <li>
                        Permanently close your Customer Account if instructed to do so by you, and
                        return all funds owed to you to your nominated bank account.
                    </li>
                </ol>
                <h2>
                    Can I re-activate my Account or open a new Account during the self-exclusion
                    period?
                </h2>
                <p>
                    Accounts that have been self-excluded cannot be reactivated under any
                    circumstances until the expiry of the self-exclusion period.
                </p>
                <p>
                    During the period of your exclusion, you must not attempt to re-open any
                    existing Account(s), seek to open any new Accounts or seek to place bets
                    through any other customer’s Account.
                </p>
                <h2>If I would like to re-activate my Account, is this possible?</h2>
                <p>
                    At the end of the self-exclusion period, you must contact us in person and
                    confirm such intention in writing. If it is decided (in the Site’s absolute
                    discretion) to permit you to re-open your Account/open a new Account, you
                    should be aware that a 24-hour waiting period will be imposed prior to the
                    Account being available for use.
                </p>
            </div>



        </Box>
    )
}

export default ExclusionpolicyMob