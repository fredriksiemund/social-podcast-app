import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './redux/reducers'
import Router from './routes'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Router />
  </Provider>
)

export default App
