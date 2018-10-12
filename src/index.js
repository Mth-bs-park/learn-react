import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = (state = {num: 0, number: {value: 0}}, action) => {

  switch (action.type) {
    case 'increase':
      return {
        ...state,
        num: state.num + 1,
        number: {
          value: state.number.value + 1,
        }
      };
    case 'decrease':
      return {
        ...state,
        num: state.num - 1,
        number: {
          value: state.number.value - 1,
        }
      };
    default:
      return state;
  }
};

const middleware = ({dispatch, getState}) => next => (action) => {
  console.log('middleware');
  return next(action);
};

const store = createStore(
  combineReducers({
    counter: reducer
  }),
  applyMiddleware(
    middleware
  )
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
