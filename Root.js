import { Provider } from 'react-redux'
import React from 'react'
import { createStore } from 'redux'
import reducers from 'reducers'

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      { children }
    </Provider>
  )
}