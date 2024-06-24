
import React from 'react';
import { useSelector } from 'react-redux';
import { BreakDecrementButton, BreakIncrementButton, ResetButton, SessionDecrementButton, SessionIncrementButton, StartStopButton } from './components/buttons';
import { BreakLengthDisplay, SessionLengthDisplay, TimeLeftDisplay } from './components/displays';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <div id='time-left-display'>
        <h2 id='timer-label'>
          {useSelector((state) => state.timer.currentCycle)}
          <audio id='beep' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Heart_Monitor_Beep--freesound.org.mp3'></audio>
        </h2>
        <StartStopButton />
        <TimeLeftDisplay />
        <ResetButton />
      </div>
      <div id='time-setters'>
        <div id='session-length-setter'>
          <h2 id='session-label'>Session Length</h2>
          <SessionDecrementButton />
          <SessionLengthDisplay />
          <SessionIncrementButton />
        </div>
        <div id='break-length-setter'>
          <h2 id='break-label'>Break Length</h2>
          <BreakDecrementButton />
          <BreakLengthDisplay />
          <BreakIncrementButton />
        </div>
      </div>
    </div>
  );
};

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
