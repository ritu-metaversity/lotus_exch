import type { FC } from 'react';
import React from 'react'
import Account from '../../../../Common/Desktop/SideDesk/Account/Account'

interface Props{
  name:string
}

const HeadingCasinoCesk:FC<Props> = ({name}) => {
  return (
    <div className="title-wrap">
      <h1>
        <span>{name}</span>
      </h1>
      <div className='account-overview-wrap'>

        <Account />
      </div>
    </div>
  )
}

export default HeadingCasinoCesk