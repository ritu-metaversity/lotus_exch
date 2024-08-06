import { Box, Typography } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import horse from '../../../../../img/horse-head.png'

const HorseHead = () => {
    return (
        <Box sx={{
            bgcolor: "#000000",
            color: "#fff",
            p: 1
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Lato, Avenir, Verdana, Nunito",
                py:1
            }}>
                <Typography component={"h3"} sx={{
                    fontSize: "24px",
                    fontWeight: 600
                }}>
                    <img src={horse} alt='' width="18px" className="horse_images"/>
                    Next Race:17:35 Fairview (RSA)</Typography>
                <Typography component={"p"}>5f 212yd</Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:"right"}}>
                    <InfoOutlinedIcon sx={{
                        verticalAlign:"middle",
                        py:1
                    }}/> Rules
                </Typography>
            </Box>
        </Box>
    )
}

export default HorseHead