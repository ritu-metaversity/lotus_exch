import { Box } from '@mui/material'
import GameHeading from '../GameHeading/GameHeading'
import SportTabs from '../SportTabs/SportTabs'
import Cricket from '../SportTabs/Cricket/Cricket'

const Sports = () => {
  return (
    <Box>
        <GameHeading />
        <SportTabs />
        <Cricket />
    </Box>
  )
}

export default Sports