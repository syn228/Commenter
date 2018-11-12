import { Provider } from 'react-redux'
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import asyncMiddleware from 'middlewares/async'

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers, 
    initialState, 
    applyMiddleware(asyncMiddleware)
  );

  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}