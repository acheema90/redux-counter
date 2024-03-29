import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import './styles.scss';

const initialState = {
  count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});

const reset = () => ({
  type: RESET
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const mapStateToProps = (state) => {
  return state;
};

// passing in object literal of actionCreators and redux will bind them to dispatch
const mapDispatchToProps =  {
  increment,
  decrement,
  reset
};

class Counter extends Component {
  render() {
    const { count, increment, decrement, reset } = this.props;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    );
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
    <Provider store={store}>
      <CounterContainer />
    </Provider>,
    document.getElementById('root')
  );
