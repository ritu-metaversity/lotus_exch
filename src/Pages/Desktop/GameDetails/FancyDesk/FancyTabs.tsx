import { Box } from '@mui/material'
import React from 'react'

interface Props {
  tabsData: any
  handleChange:any,
  value:any
}

const FancyTabs = ({ tabsData, handleChange, value }) => {
  return (
    <Box className="ng-scope ng-isolate-scope">
      <div className="nav-tabs-group-container not-stretched-tabs">
        {
          tabsData?.map((tabs) => {
            return (
              <>
              <div className="ng-scope" onClick={()=>handleChange(tabs?.value)}>
                <div className={`nav-tab  ${value === tabs?.value?"active":""}`}>{tabs?.name}</div>
              </div>
              <Box>
                <div className="ng-scope">
                  <Box className="ng-scope ng-isolate-scope">
                    <span />
                  </Box>
                </div>
              </Box>
              </>
            )
          })
        }
      </div>

    </Box>
  )
}

export default FancyTabs