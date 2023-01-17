
import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
    return (
        <div id='display'>
            <p id='display-text'>
                {useSelector((state) => state.drumPad.clipName)}
            </p>
        </div>
    );
};

export default Display;
