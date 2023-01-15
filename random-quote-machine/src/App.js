
import React from 'react';
import Randomiser from './comps/randomiserButton/randomiserButton';
import { TweetThisButton } from './comps/shareThisButton/shareThisButton';
import { useSelector } from 'react-redux';
import styles from './comps/styles/styles.module.css';

const App = () => (
  <div id='quote-box' className={styles.quoteBox}>
    <h4 id='text'>{useSelector((state) => state.randomiser.currentQuote)}</h4>
    <p id='author'><em>{useSelector((state) => state.randomiser.currentAuthor)}</em></p>
    <TweetThisButton />
    <Randomiser />
  </div>
);

export default App;

/*

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;

*/
