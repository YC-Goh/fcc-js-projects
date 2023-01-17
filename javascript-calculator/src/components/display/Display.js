
import React from "react";
import { styleDisplay, styleDisplayText } from "../../styles/styles";
import { useSelector } from "react-redux";

const Display = () => {
    return (
        <div id='display' style={styleDisplay}>
            <p id='displayExpression' style={styleDisplayText}>
                {useSelector((state) => state.buttons.currentExpression)}
            </p>
            {/*<p id='displayCurrentNumber' style={styleDisplayText}>
                {useSelector((state) => state.buttons.currentNumber)}
            </p>*/}
        </div>
    );
};

export default Display;
