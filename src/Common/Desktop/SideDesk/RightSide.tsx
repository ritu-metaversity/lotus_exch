import ClickBetting from "./clickBetting/ClickBetting";
import BetList from "./BetList/BetList";
import Account from "./Account/Account";
import React from "react";

const RightSide = () => {
  return (
    <>
      <div className="isolate-scope">
        <Account />
      </div>
      <div className="inner-right-pane-placeholder ng-hide" >
      <ClickBetting />
      <BetList />
      </div>
    </>
  );
};

export default RightSide;
