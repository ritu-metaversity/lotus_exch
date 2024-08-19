import type { FC } from 'react';
import React from 'react'
import Account from '../../../../Common/Desktop/SideDesk/Account/Account'

interface Props{
  name:string,
  userData:User
}

const HeadingCasinoCesk:FC<Props> = ({name, userData}) => {
  return (
    <div className="title-wrap">
      <h1>
        <span>{name}</span>
      </h1>
      <div className='account-overview-wrap'>

        <Account userData={userData}/>
      </div>
    </div>
  )
}

export default HeadingCasinoCesk