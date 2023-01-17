
import React from 'react';
import Display from './components/display/Display';
import { ButtonZero, ButtonOne, ButtonTwo, ButtonThree, ButtonFour, ButtonFive, ButtonSix, ButtonSeven, ButtonEight, ButtonNine } from './components/buttons/buttons';
import { AddButton, SubtractButton, MultiplyButton, DivideButton, DecimalButton, LeftParenthesisButton, RightParenthesisButton, EqualsButton, BackspaceButton, ClearButton } from './components/buttons/buttons';
import { styleApp } from './styles/styles';

const App = () => (
  <div className="App" style={styleApp}>
    <Display />
    <ClearButton />
    <LeftParenthesisButton />
    <RightParenthesisButton />
    <BackspaceButton />
    <ButtonSeven />
    <ButtonEight />
    <ButtonNine />
    <DivideButton />
    <ButtonFour />
    <ButtonFive />
    <ButtonSix />
    <MultiplyButton />
    <ButtonOne />
    <ButtonTwo />
    <ButtonThree />
    <SubtractButton />
    <ButtonZero />
    <DecimalButton />
    <EqualsButton />
    <AddButton />
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
