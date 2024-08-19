import ClickBetting from "./clickBetting/ClickBetting";
import BetList from "./BetList/BetList";
import Account from "./Account/Account";
import type { FC } from "react";
import React from "react";

interface Props{
  userData: User,
  trigger:any
}

const RightSide:FC<Props> = ({userData, trigger}) => {
  return (
    <>
      <div className="isolate-scope">
        <Account userData={userData}/>
      </div>
      <div className="inner-right-pane-placeholder ng-hide" >
      <ClickBetting />
      <BetList trigger={trigger}/>
      </div>
    </>
  );
};

export default RightSide;
