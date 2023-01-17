
import React from "react";
import { styleButton } from "../../styles/styles";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import expressionParser from "./buttonEqualsParser";

const initialState = {
    currentNumber: '0',
    currentNumberHasDecimal: false,
    currentExpressionList: ['0'],
    currentExpression: '0'
};

const clickNumberAction = (num) => {
    return (state) => {
        if (state.currentExpressionList.indexOf('=') > -1) {
            state.currentNumber = '0';
            state.currentNumberHasDecimal = false;
            state.currentExpressionList = ['0'];
            state.currentExpression = '0';
        };
        state.currentNumber = (state.currentNumber === '0') ? num : state.currentNumber + num;
        state.currentExpressionList.pop()
        state.currentExpressionList.push(state.currentNumber);
        state.currentExpression = state.currentExpressionList.join('');
    };
};

const clickDecimalAction = (state) => {
    if (state.currentExpressionList.indexOf('=') === -1) {
        if (state.currentNumberHasDecimal === false) {
            state.currentNumber = (state.currentNumber === '') ? '0.' : state.currentNumber + '.';
            state.currentNumberHasDecimal = true;
            state.currentExpressionList.pop()
            state.currentExpressionList.push(state.currentNumber);
            state.currentExpression = state.currentExpressionList.join('');
        };
    };
};

const clickOperatorAction = (op) => {
    return (state) => {
        if (state.currentNumber === '') {
            state.currentExpressionList.pop();
        } else {
            state.currentNumber = '';
            state.currentNumberHasDecimal = false;
        };
        while (state.currentExpressionList.indexOf('=') > -1) {
            state.currentExpressionList.shift();
        };
        state.currentExpressionList.push(op);
        state.currentExpressionList.push('');
        state.currentExpression = state.currentExpressionList.join('');
    };
};

const clickBackspaceAction = (state) => {
    if (state.currentExpressionList.indexOf('=') === -1) {
        if (state.currentNumber === '') {
            state.currentExpressionList.pop();
            state.currentExpressionList.pop();
            const lastInput = state.currentExpressionList.pop();
            if (['+', '-', '*', '/', '(', ')'].some((op) => lastInput === op)) {
                state.currentExpressionList.push(lastInput);
                state.currentExpressionList.push('');
            } else {
                state.currentNumber = lastInput;
                state.currentExpressionList.push(state.currentNumber);
            };
        } else {
            if (state.currentNumber.length > 1) {
                state.currentNumber = state.currentNumber.slice(0, state.currentNumber.length - 1);
                state.currentExpressionList.pop();
                state.currentExpressionList.push(state.currentNumber);
            } else {
                state.currentNumber = '';
                state.currentExpressionList.pop();
                state.currentExpressionList.push('');
            };
        };
        state.currentNumberHasDecimal = state.currentNumber.indexOf('.') > -1;
        state.currentExpression = state.currentExpressionList.join('');
        if (state.currentExpression === '') {
            Object.assign(state, initialState);
        };
    };
};

const clickEqualsAction = (state) => {
    state.currentNumber = expressionParser(state.currentExpression);
    if (state.currentNumber === 'ERROR') {
        Object.assign(state, initialState);
        state.currentNumber = 'ERROR';
    } else {
        state.currentNumberHasDecimal = state.currentNumber.indexOf('.') > -1;
        state.currentExpressionList = [state.currentNumber];
        //  state.currentExpressionList.push('=');
        //  state.currentExpressionList.push(state.currentNumber);
        //  state.currentExpressionList = [state.currentNumber];
        state.currentExpression = state.currentExpressionList.join('');
    }
};

const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        clickZero: clickNumberAction('0'),
        clickOne: clickNumberAction('1'),
        clickTwo: clickNumberAction('2'),
        clickThree: clickNumberAction('3'),
        clickFour: clickNumberAction('4'),
        clickFive: clickNumberAction('5'),
        clickSix: clickNumberAction('6'),
        clickSeven: clickNumberAction('7'),
        clickEight: clickNumberAction('8'),
        clickNine: clickNumberAction('9'),
        clickAdd: clickOperatorAction('+'),
        clickSubtract: clickOperatorAction('-'),
        clickMultiply: clickOperatorAction('*'),
        clickDivide: clickOperatorAction('/'),
        clickDecimal: clickDecimalAction,
        clickLeftParenthesis: clickOperatorAction('('),
        clickRightParenthesis: clickOperatorAction(')'),
        clickEquals: clickEqualsAction,
        clickBackspace: clickBackspaceAction,
        clickClear: () => initialState,
    }
});

const { 
    clickZero, 
    clickOne, 
    clickTwo, 
    clickThree, 
    clickFour, 
    clickFive, 
    clickSix, 
    clickSeven, 
    clickEight, 
    clickNine, 
    clickAdd, 
    clickSubtract, 
    clickMultiply, 
    clickDivide, 
    clickDecimal, 
    clickLeftParenthesis,
    clickRightParenthesis,
    clickEquals, 
    clickClear, 
    clickBackspace 
} = buttonSlice.actions;

function createButtonFunctionComponent(buttonProps) {
    const { id, display, action } = buttonProps;
    return () => {
        const dispatch = useDispatch();
        return (
            <button 
                id={id} 
                style={styleButton} 
                onClick={()=>dispatch(action())}
            >
                {display}
            </button>
        )
    };
};

const buttonList = [
    ['zero', '0', clickZero],
    ['one', '1', clickOne],
    ['two', '2', clickTwo],
    ['three', '3', clickThree],
    ['four', '4', clickFour],
    ['five', '5', clickFive],
    ['six', '6', clickSix],
    ['seven', '7', clickSeven],
    ['eight', '8', clickEight],
    ['nine', '9', clickNine],
    ['add', '+', clickAdd],
    ['subtract', '-', clickSubtract],
    ['multiply', '*', clickMultiply],
    ['divide', '/', clickDivide],
    ['decimal', '.', clickDecimal],
    ['clear', 'C', clickClear],
    ['leftParenthesis', '(', clickLeftParenthesis],
    ['rightParenthesis', ')', clickRightParenthesis],
    ['equals', '=', clickEquals],
    ['backspace', '<-', clickBackspace]
];

export const [
    ButtonZero, 
    ButtonOne, 
    ButtonTwo, 
    ButtonThree, 
    ButtonFour, 
    ButtonFive, 
    ButtonSix, 
    ButtonSeven, 
    ButtonEight, 
    ButtonNine,
    AddButton,
    SubtractButton,
    MultiplyButton,
    DivideButton,
    DecimalButton,
    ClearButton,
    LeftParenthesisButton,
    RightParenthesisButton,
    EqualsButton,
    BackspaceButton
] = buttonList.map(([id, display, action]) => createButtonFunctionComponent({id: id, display: display, action: action}));

export const buttonReducer = buttonSlice.reducer;
