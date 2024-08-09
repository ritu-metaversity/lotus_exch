import type { Dispatch, FC, SetStateAction} from "react";
import React, { useState } from "react";
import "./style.scss";

interface Props{
    pastActive:number,
    setPastActive:Dispatch<SetStateAction<number>>
}

const Matched:FC<Props> = ({pastActive, setPastActive}) => {
  const [matchedActive, setMatchedActive] = useState(0);
  const curr = ["Current", "Past"];
  const matched = ["Matched", "Unmatched"];

  const handlePastSelected = (id: number) => {
    setPastActive(id);
  };
  const handleMatchedSelected = (id: number) => {
    setMatchedActive(id);
  };

  return (
    <div className="column current_sec">
      <div className="selection">
        {curr.map((item, id) => {
          return (
            <div
              onClick={() => handlePastSelected(id)}
              className={`item ng-binding ${pastActive === id ? "selected" : ""}`}
            >
              {item}
            </div>
          );
        })}
      </div>
      {pastActive !== 1 && (
        <div className="selection alt" ng-show="vm.isCurrent">
          {matched.map((item, id) => {
            return (
              <div
                onClick={() => handleMatchedSelected(id)}
                className={`item ng-binding ${matchedActive === id ? "active" : ""}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Matched;
