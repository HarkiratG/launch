import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/UI/Input/Input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input label="Mortgage ($)" inputtype="input" type="text" name="name" placeholder="Your interest %" />
        <Input label="Period (yrs)" inputtype="input" type="email" name="name" placeholder="Your interest %" />
        <Input label="Interest (%)" inputtype="input" type="text" name="name" placeholder="Your interest %" />
      </header>
    </div>
  );
}

export default App;
