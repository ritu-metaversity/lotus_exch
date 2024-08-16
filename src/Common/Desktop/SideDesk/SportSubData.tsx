import type { FC } from "react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from "react-router-dom";
import { setSportName } from "../../../utils/slice/sportSlice";

interface Props {
    activeData: any;
    id: string
}

const SportSubData: FC<Props> = ({ activeData, id }) => {
    const [active, setActive] = useState(null);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const handleSetActive = (val: number, keys: string) => {
        setActive(val);
        dispatch(setSportName({
            matchName: keys
        }))
        nav(`/d/sport/${id}`);
    }
    return (
        <ul className="sport-type-child">
            {Object.keys(activeData)?.map((items, id) => (
                <li
                    key={id}
                    className={`not-last-child `}
                    onClick={() => handleSetActive(id, items)}
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
