import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Authentication = () => {
    return (
        <Box sx={{
            background: "#fff",
            margin: "8px 0px",
            padding: "16px 8px",
            color: "#000",
            fontSize: "14px",
            textAlign: "center"
        }}>
            <Box>
                <ul className="steps-list" >
                    <li>
                        <b>Step 1: </b>  Download Google Authenticator (Available in AppStore and GooglePlay).
                    </li>
                    <li className='imgesSec'>
                        <Link to="#">
                            <img src="/imges/store.svg" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="/imges/google.svg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <b>Step 2: </b>  Setup account within Google Authenticator.
                    </li>
                    <li>
                        <b>Step 3: </b>  To get a token in Google Authenticator and enter the verification code down below. <Link to="#">Press here</Link>
                    </li>
                </ul>
            </Box>

            <Box>
                <input placeholder='Verification code' className='verifiction_code'/>
            </Box>
            <Box sx={{
                marginBottom:"30px"
            }}>
                <Button sx={{
                    background:"#777777 ",
                    color:"#fff",
                    width:"100%",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    textTransform:"capitalize"
                }}> Activate Two-factor authentication </Button>
            </Box>
        </Box>
    )
}

export default Authentication