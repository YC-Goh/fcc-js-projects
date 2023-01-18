
import React from "react";
import { useSelector } from "react-redux";

const DisplayTemplate = (displayId, stateValue) => (
    <div id={displayId}>
        <p id={`${displayId}-number`}>{useSelector((state) => state.timer[stateValue])}</p>
    </div>
);

export const SessionLengthDisplay = () => DisplayTemplate('session-length', 'sessionLength');
export const BreakLengthDisplay = () => DisplayTemplate('break-length', 'breakLength');
export const TimeLeftDisplay = () => DisplayTemplate('time-left', 'currentTimer');
