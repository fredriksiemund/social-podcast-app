import React from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { NAV_BACKGROUND } from './styles/common'
import Router from './routes'
import reducers from './redux/reducers'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={NAV_BACKGROUND} />
    <View style={{ flex: 1 }}>
      <Router />
    </View>
  </Provider>
)

export default App
