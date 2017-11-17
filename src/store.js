import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { widget, widgets, app } from './reducers'

export default createStore(
  combineReducers({
    widget,
    widgets,
    app
  }),
  applyMiddleware(thunk)
)
