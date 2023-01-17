
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";

const initialState = {
    clipName: 'Drum Machine'.toUpperCase()
};

const drumPadSlice = createSlice({
    name: 'drumPad',
    initialState,
    reducers: {
        clickDrumPad: (state, action) => {
            console.log(action.payload.toUpperCase());
            state.clipName = action.payload.toUpperCase();
        }
    }
});

export const { clickDrumPad } = drumPadSlice.actions;

const DrumPadTemplate = (keyId, clipId, clipLink) => {
    const dispatch = useDispatch();
    const clickHandler = (event) => {
        event.target.children[keyId].play();
        dispatch(clickDrumPad(event.target.id));
    };
    return (
        <button type='button' className='drum-pad' id={clipId} key={clipId} onClick={clickHandler}>
            {keyId}<audio className='clip' id={keyId} key={keyId} src={clipLink}></audio>
        </button>
    );
};

/*
  - [Heater 1](https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3)
  - [Heater 2](https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3)
  - [Heater 3](https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3)
  - [Heater 4](https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3)
  - [Clap](https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3)
  - [Open-HH](https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3)
  - [Kick-n'-Hat](https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3)
  - [Kick](https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3)
  - [Closed-HH](https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3)
*/

const DrumPadProps = [
    ['Q', 'heater-1', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'], 
    ['W', 'heater-2', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'], 
    ['E', 'heater-3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'], 
    ['A', 'heater-4', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'], 
    ['S', 'clap', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'], 
    ['D', 'open-hh', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'], 
    ['Z', 'kick-n-hat', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'], 
    ['X', 'kick', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'], 
    ['C', 'closed-hh', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']
];

const documentBody = document.body;
const keyUpHandler = (event) => {
    const keyCode = event.key.toUpperCase();
    const targetElement = document.getElementById(keyCode).parentElement;
    targetElement.click();
    console.log(targetElement);
};
documentBody.addEventListener('keyup', keyUpHandler);

const DrumPadBox = () => {
    return (
        <div id='drum-pad-box'>
            {DrumPadProps.map(([keyId, clipId, clipLink]) => DrumPadTemplate(keyId, clipId, clipLink))}
        </div>
    );
};

export default DrumPadBox;
export const drumPadReducer = drumPadSlice.reducer;
