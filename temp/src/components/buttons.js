
import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const constructTimer = (minutes, seconds) => {
    return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
};

const initialState = {
    isSettingUp: true,
    sessionLength: 25,
    breakLength: 5,
    isRunning: false,
    currentCycle: 'Session',
    currentMinutesLeft: 25,
    currentSecondsLeft: 0,
    currentTimer: constructTimer(25, 0)
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        clickSessionIncrement: (state) => {
            if (state.sessionLength < 60 && state.isSettingUp) {
                state.sessionLength += 1;
                state.currentMinutesLeft = state.sessionLength;
                state.currentTimer = constructTimer(state.currentMinutesLeft, state.currentSecondsLeft);
            };
        },
        clickSessionDecrement: (state) => {
            if (state.sessionLength > 1 && state.isSettingUp) {
                state.sessionLength -= 1;
                state.currentMinutesLeft = state.sessionLength;
                state.currentTimer = constructTimer(state.currentMinutesLeft, state.currentSecondsLeft);
            };
        },
        clickBreakIncrement: (state) => {
            if (state.breakLength < 60 && state.isSettingUp) {
                state.breakLength += 1;
                state.currentMinutesLeft = state.sessionLength;
                state.currentTimer = constructTimer(state.currentMinutesLeft, state.currentSecondsLeft);
            };
        },
        clickBreakDecrement: (state) => {
            if (state.breakLength > 1 && state.isSettingUp) {
                state.breakLength -= 1;
                state.currentMinutesLeft = state.sessionLength;
                state.currentTimer = constructTimer(state.currentMinutesLeft, state.currentSecondsLeft);
            };
        },
        clickReset: (state) => {
            Object.assign(state, initialState);
            const audioElement = document.getElementById('beep');
            audioElement.pause();
            audioElement.load();
        },
        clickStartStop: (state) => {
            state.isRunning = !state.isRunning;
            state.isSettingUp = false;
        },
        countDown: (state, action) => {
            console.log(action);
            if (state.currentSecondsLeft > 0) {
                state.currentSecondsLeft -= 1;
            } else if (state.currentSecondsLeft === 0 && state.currentMinutesLeft > 0) {
                state.currentSecondsLeft = 59;
                state.currentMinutesLeft -= 1;
            } else if (state.currentSecondsLeft === 0 && state.currentMinutesLeft === 0) {
                state.currentCycle = (state.currentCycle === 'Session') ? 'Break' : 'Session';
                state.currentMinutesLeft = (state.currentCycle === 'Session') ? state.sessionLength : state.breakLength;
                const audioElement = document.getElementById('beep');
                audioElement.play();
            }
            state.currentTimer = constructTimer(state.currentMinutesLeft, state.currentSecondsLeft)
        }
    }
});

const { clickSessionIncrement, clickSessionDecrement, clickBreakIncrement, clickBreakDecrement, clickReset, clickStartStop, countDown } = timerSlice.actions;

const ButtonTemplate = (buttonId, buttonValue, actionHandler) => {
    const dispatch = useDispatch();
    if (/&[a-z]+;/i.test(buttonValue)) {
        return (
            <button type='button' id={buttonId} dangerouslySetInnerHTML={{__html: buttonValue}} onClick={() => dispatch(actionHandler())}></button>
        );
    } else {
        return (
            <button type='button' id={buttonId} onClick={() => dispatch(actionHandler())}>{buttonValue}</button>
        );
    };
};

export const SessionIncrementButton = () => ButtonTemplate('session-increment', '&rarr;', clickSessionIncrement);
export const SessionDecrementButton = () => ButtonTemplate('session-decrement', '&larr;', clickSessionDecrement);
export const BreakIncrementButton = () => ButtonTemplate('break-increment', '&rarr;', clickBreakIncrement);
export const BreakDecrementButton = () => ButtonTemplate('break-decrement', '&larr;', clickBreakDecrement);

let countDownIdentifier;

const toggleCountDownListener = createListenerMiddleware();

toggleCountDownListener.startListening({
    actionCreator: clickStartStop,
    effect: (action, listenerApi) => {
        console.log(action);
        const isRunning = listenerApi.getState().timer.isRunning;
        const dispatchCountDown = () => listenerApi.dispatch(countDown());
        if (isRunning) {
            countDownIdentifier = setInterval(dispatchCountDown, 1000);
        } else {
            clearInterval(countDownIdentifier);
        };
    }
});

toggleCountDownListener.startListening({
    actionCreator: clickReset,
    effect: (action, listenerApi) => {
        console.log(action);
        clearInterval(countDownIdentifier);
    }
});

export const toggleCountDownMiddleware = toggleCountDownListener.middleware;

export const StartStopButton = () => {
    const dispatch = useDispatch();
    return (
        <button type='button' id='start_stop' onClick={() => dispatch(clickStartStop())}>{useSelector((state) => state.timer.isRunning ? 'Pause' : 'Start')}</button>
    );
};

export const ResetButton = () => {
    const dispatch = useDispatch();
    return (
        <button type='button' id='reset' onClick={() => dispatch(clickReset())}>Reset</button>
    );
}

export const timerReducer = timerSlice.reducer;
