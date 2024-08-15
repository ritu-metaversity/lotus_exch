import { Box } from "@mui/material";
import type { FC } from "react";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    activeData: any;
}

const SportSubData: FC<Props> = ({ activeData }) => {
    const [active, setActive] = useState(0);
    const handleSetActive = (val: number) => {
        setActive(val)
    }
    return (
        <ul className="sport-type-child">
            {Object.keys(activeData)?.map((items, id) => (
                <li
                    key={id}
                    className={`not-last-child `}
                    onClick={() => handleSetActive(id)}
                >
                    <div className={`group-name ${active === id ? "active" : ""} championship-type`}>
                        <div className="name">
                            <span>{items}</span>
                            {active !== id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </div>
                    </div>
                    {active === id && (
                        <ul className="championship-type-child">
                            {activeData[items]?.map((matches, matchId) => (
                                <li key={matchId}>
                                    <div className="event-name">{matches?.matchName}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SportSubData;
