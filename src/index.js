import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
