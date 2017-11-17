import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setWidgets } from './action-creators'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'typeface-roboto'
import 'tachyons-flexbox'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

store.dispatch(setWidgets)
