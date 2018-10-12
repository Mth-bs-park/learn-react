import React, { Component } from 'react';
import {connect} from 'react-redux';
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
          <button onClick={this.props.increase}>increase</button>
          <button onClick={this.props.decrease}>decrease</button>
          <Counter/>
          <Counter2/>
        </div>
      </div>
    );
  }
}

const increase = () => ({type: 'increase'});

const decrease = () => ({type: 'decrease'});

App = connect(
  (state) => ({}),
  (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  })
)(App);

const Counter = connect(
  (state) => ({num: state.counter.num, number: state.counter.number}),
  (dispatch) => ({

  })
)((props) => (
  <div className='counter-container'>
    {props.num}/{props.number.value}
  </div>
));

class Counter2 extends Component {

  componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
    nextProps.number.value += 1;
  }

  render() {
    return (
      <div className='counter-container'>
        {this.props.num}/{this.props.number.value}
      </div>
    )
  }
}

Counter2 = connect(
  (state) => ({num: state.counter.num, number: state.counter.number}),
  (dispatch) => ({})
)(Counter2)

export default App;
