import { Box, Typography } from '@mui/material'
import type { FC } from 'react';
import React from 'react'

interface Props{
    name:string
}

const PageHeading:FC<Props> = ({name}) => {
  return (
    <Box>
        <Typography sx={{
            fontWeight:"bold",
            fontSize:"18px",
            borderRadius:"16px 16px 0 0",
            marginBottom:"14px",
            fontFamily:"Lato,  sans-serif"
        }}>
        {name}
        </Typography>
    </Box>
  )
}

export default PageHeading