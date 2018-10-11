import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class Header extends Component {
  render() {

    return (
      <div className='header'>
        <div className='text-container'>
          this is header  
        </div>
        <div className='right-menu-container'>
          <ul>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
          </ul>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Counter/>
        </div>
      </div>
    );
  }
}

const Counter = (props) => (
  <div className='counter-container'>
    {props.num ? props.num : 0}
  </div>
);

export default App;
