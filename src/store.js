import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { widget, widgets } from './reducers'

export default createStore(
  combineReducers({
    widget,
    widgets
  }),
  applyMiddleware(thunk)
)
