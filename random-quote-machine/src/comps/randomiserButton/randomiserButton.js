
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import quotes from '../../data/quotes';
import styles from '../styles/styles.module.css'

const getRandomId = () => Math.floor(Math.random() * quotes.length);

const randomiserSlice = createSlice({
    name: 'randomiser',
    initialState: ((randomId = getRandomId()) => ({
        randomId: randomId,
        currentQuote: quotes[randomId].quote,
        currentAuthor: quotes[randomId].author
    }))(),
    reducers: {
        getNewId: (state) => {
            let newRandomId = state.randomId;
            while (newRandomId === state.randomId) {
                newRandomId = getRandomId();
            };
            state.randomId = newRandomId;
            state.currentQuote = quotes[state.randomId].quote;
            state.currentAuthor = quotes[state.randomId].author;
            //  console.log(state.currentQuote);
        }
    }
});

export const randomiserReducer = randomiserSlice.reducer;

const Randomiser = () => {
    const dispatch = useDispatch();
    return (
        <button 
            id='new-quote' 
            onClick={() => dispatch(randomiserSlice.actions.getNewId())} 
            className={styles.newQuoteButton}
        >
            New Quote
        </button>
    )
};

export default Randomiser;
